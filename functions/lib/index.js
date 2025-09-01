"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendGameResultsSMS = exports.sendWeeklyReminderSMS = exports.sendMutualPairingCode = exports.sendPairingInviteSMS = exports.weeklyReminderScheduler = exports.sendGuessResults = exports.sendWeeklyReminder = exports.sendPairingInvite = void 0;
const functions = __importStar(require("firebase-functions"));
const admin = __importStar(require("firebase-admin"));
const sgMail = __importStar(require("@sendgrid/mail"));
const twilio_1 = __importDefault(require("twilio"));
// Initialize Firebase Admin
admin.initializeApp();
// Initialize SendGrid with API key from environment config
const sendgridApiKey = (_a = functions.config().sendgrid) === null || _a === void 0 ? void 0 : _a.api_key;
if (sendgridApiKey) {
    sgMail.setApiKey(sendgridApiKey);
}
// Initialize Twilio
const twilioAccountSid = (_b = functions.config().twilio) === null || _b === void 0 ? void 0 : _b.account_sid;
const twilioAuthToken = (_c = functions.config().twilio) === null || _c === void 0 ? void 0 : _c.auth_token;
const twilioPhoneNumber = (_d = functions.config().twilio) === null || _d === void 0 ? void 0 : _d.phone_number;
let twilioClient = null;
if (twilioAccountSid && twilioAuthToken) {
    twilioClient = (0, twilio_1.default)(twilioAccountSid, twilioAuthToken);
}
// Send pairing invitation email
exports.sendPairingInvite = functions.https.onCall(async (data, context) => {
    const { toEmail, fromName, pairingCode, message, appUrl } = data;
    // Validate inputs
    if (!toEmail || !fromName || !pairingCode) {
        throw new functions.https.HttpsError('invalid-argument', 'Missing required fields');
    }
    const msg = {
        to: toEmail,
        from: 'noreply@willingtree.app', // You'll need to configure this with your domain
        subject: `${fromName} invited you to The Willing Tree`,
        text: `${fromName} has invited you to join them on The Willing Tree!
    
${message ? `Personal message: ${message}\n\n` : ''}
Your pairing code is: ${pairingCode}

Click here to accept the invitation: ${appUrl}?code=${pairingCode}

The Willing Tree helps couples grow closer through a fun weekly game of caring actions and playful guessing.`,
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #4a8b4a 0%, #6B5B45 100%); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">🌳 The Willing Tree</h1>
        </div>
        <div style="padding: 30px; background: #f9f9f9;">
          <h2 style="color: #4a8b4a;">You're Invited!</h2>
          <p style="font-size: 16px; color: #333;">
            <strong>${fromName}</strong> has invited you to join them on The Willing Tree!
          </p>
          ${message ? `
            <div style="background: white; padding: 15px; border-left: 4px solid #4a8b4a; margin: 20px 0;">
              <p style="margin: 0; color: #666;">Personal message:</p>
              <p style="margin: 10px 0 0 0; color: #333;">${message}</p>
            </div>
          ` : ''}
          <div style="background: #4a8b4a; color: white; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0;">
            <p style="margin: 0 0 10px 0; font-size: 14px;">Your pairing code:</p>
            <h2 style="margin: 0; letter-spacing: 3px;">${pairingCode}</h2>
          </div>
          <div style="text-align: center; margin: 30px 0;">
            <a href="${appUrl}?code=${pairingCode}" style="background: #4a8b4a; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; display: inline-block; font-size: 16px;">
              Accept Invitation
            </a>
          </div>
          <p style="color: #666; font-size: 14px; text-align: center;">
            The Willing Tree helps couples grow closer through a fun weekly game of caring actions and playful guessing.
          </p>
        </div>
      </div>
    `
    };
    try {
        if (sendgridApiKey) {
            await sgMail.send(msg);
        }
        else {
            // Fallback: Store email request in Firestore for manual processing
            await admin.firestore().collection('emailQueue').add(Object.assign(Object.assign({}, msg), { createdAt: admin.firestore.FieldValue.serverTimestamp(), status: 'pending', type: 'pairingInvite' }));
            console.log('Email queued for manual processing (SendGrid not configured)');
        }
        return { success: true };
    }
    catch (error) {
        console.error('Error sending email:', error);
        throw new functions.https.HttpsError('internal', 'Failed to send email');
    }
});
// Send weekly reminder
exports.sendWeeklyReminder = functions.https.onCall(async (data, context) => {
    var _a, _b;
    const { userId, partnerName, weekNumber } = data;
    if (!userId || !partnerName) {
        throw new functions.https.HttpsError('invalid-argument', 'Missing required fields');
    }
    // Get user email from Firestore
    const userDoc = await admin.firestore().collection('users').doc(userId).get();
    if (!userDoc.exists) {
        throw new functions.https.HttpsError('not-found', 'User not found');
    }
    const userData = userDoc.data();
    const userEmail = userData === null || userData === void 0 ? void 0 : userData.email;
    if (!userEmail) {
        throw new functions.https.HttpsError('invalid-argument', 'User email not found');
    }
    const msg = {
        to: userEmail,
        from: 'noreply@willingtree.app',
        subject: `Week ${weekNumber}: Time to tend your Willing Tree with ${partnerName}`,
        text: `It's a new week on The Willing Tree!\n\nTime to select which of ${partnerName}'s wishes you're willing to work on this week.\n\nLog in to play: ${((_a = functions.config().app) === null || _a === void 0 ? void 0 : _a.url) || 'https://willingtree.app'}`,
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #4a8b4a 0%, #6B5B45 100%); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">🌳 Week ${weekNumber} Has Begun!</h1>
        </div>
        <div style="padding: 30px; background: #f9f9f9;">
          <p style="font-size: 16px; color: #333;">
            Time to tend your Willing Tree with <strong>${partnerName}</strong>!
          </p>
          <p style="color: #666;">
            Select 3 items from ${partnerName}'s WishList that you're willing to work on this week.
          </p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="${((_b = functions.config().app) === null || _b === void 0 ? void 0 : _b.url) || 'https://willingtree.app'}" style="background: #4a8b4a; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; display: inline-block; font-size: 16px;">
              Start This Week's Game
            </a>
          </div>
        </div>
      </div>
    `
    };
    try {
        if (sendgridApiKey) {
            await sgMail.send(msg);
        }
        else {
            await admin.firestore().collection('emailQueue').add(Object.assign(Object.assign({}, msg), { createdAt: admin.firestore.FieldValue.serverTimestamp(), status: 'pending', type: 'weeklyReminder' }));
        }
        return { success: true };
    }
    catch (error) {
        console.error('Error sending reminder:', error);
        return { success: false };
    }
});
// Send guess results
exports.sendGuessResults = functions.https.onCall(async (data, context) => {
    var _a, _b;
    const { userId, score, correctGuesses, weekNumber } = data;
    if (!userId) {
        throw new functions.https.HttpsError('invalid-argument', 'Missing userId');
    }
    // Get user email
    const userDoc = await admin.firestore().collection('users').doc(userId).get();
    if (!userDoc.exists) {
        throw new functions.https.HttpsError('not-found', 'User not found');
    }
    const userData = userDoc.data();
    const userEmail = userData === null || userData === void 0 ? void 0 : userData.email;
    if (!userEmail) {
        return { success: false };
    }
    const msg = {
        to: userEmail,
        from: 'noreply@willingtree.app',
        subject: `Week ${weekNumber} Results: You scored ${score} points!`,
        text: `Great job! You correctly guessed ${correctGuesses} items your partner worked on.\n\nYour total score: ${score} points\n\nLog in to see full details: ${((_a = functions.config().app) === null || _a === void 0 ? void 0 : _a.url) || 'https://willingtree.app'}`,
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #4a8b4a 0%, #6B5B45 100%); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">🎯 Week ${weekNumber} Results!</h1>
        </div>
        <div style="padding: 30px; background: #f9f9f9; text-align: center;">
          <h2 style="color: #4a8b4a;">You scored ${score} points!</h2>
          <p style="font-size: 18px; color: #333;">
            You correctly guessed <strong>${correctGuesses}</strong> items your partner worked on.
          </p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="${((_b = functions.config().app) === null || _b === void 0 ? void 0 : _b.url) || 'https://willingtree.app'}" style="background: #4a8b4a; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; display: inline-block; font-size: 16px;">
              View Full Results
            </a>
          </div>
        </div>
      </div>
    `
    };
    try {
        if (sendgridApiKey) {
            await sgMail.send(msg);
        }
        else {
            await admin.firestore().collection('emailQueue').add(Object.assign(Object.assign({}, msg), { createdAt: admin.firestore.FieldValue.serverTimestamp(), status: 'pending', type: 'guessResults' }));
        }
        return { success: true };
    }
    catch (error) {
        console.error('Error sending results:', error);
        return { success: false };
    }
});
// Scheduled function to send weekly reminders
exports.weeklyReminderScheduler = functions.pubsub
    .schedule('every monday 09:00')
    .timeZone('America/New_York')
    .onRun(async (context) => {
    // Get all active innermosts
    const innermostsSnapshot = await admin.firestore()
        .collection('innermosts')
        .where('status', '==', 'active')
        .get();
    const promises = [];
    innermostsSnapshot.forEach(doc => {
        var _a, _b;
        const innermost = doc.data();
        // Send reminder to both partners
        promises.push(exports.sendWeeklyReminder.run({
            userId: innermost.partnerA,
            partnerName: ((_a = innermost.partnerBEmail) === null || _a === void 0 ? void 0 : _a.split('@')[0]) || 'your partner',
            weekNumber: getCurrentWeekNumber()
        }, {}));
        if (innermost.partnerB) {
            promises.push(exports.sendWeeklyReminder.run({
                userId: innermost.partnerB,
                partnerName: ((_b = innermost.partnerAEmail) === null || _b === void 0 ? void 0 : _b.split('@')[0]) || 'your partner',
                weekNumber: getCurrentWeekNumber()
            }, {}));
        }
    });
    await Promise.all(promises);
    console.log(`Sent ${promises.length} weekly reminders`);
});
// Helper function
function getCurrentWeekNumber() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 1);
    const diff = now.getTime() - start.getTime();
    const oneWeek = 1000 * 60 * 60 * 24 * 7;
    return Math.floor(diff / oneWeek) + 1;
}
// SMS Functions using Twilio
// Send pairing invitation via SMS
exports.sendPairingInviteSMS = functions.https.onCall(async (data, context) => {
    const { toPhone, fromName, pairingCode, message, appUrl } = data;
    if (!toPhone || !fromName || !pairingCode) {
        throw new functions.https.HttpsError('invalid-argument', 'Missing required fields');
    }
    const smsBody = `${fromName} invited you to The Willing Tree! 🌳
${message ? `\nMessage: ${message}\n` : ''}
Your pairing code: ${pairingCode}

Join here: ${appUrl}?code=${pairingCode}`;
    try {
        if (twilioClient && twilioPhoneNumber) {
            await twilioClient.messages.create({
                body: smsBody,
                from: twilioPhoneNumber,
                to: toPhone
            });
        }
        else {
            // Fallback: Store SMS request in Firestore for manual processing
            await admin.firestore().collection('smsQueue').add({
                to: toPhone,
                body: smsBody,
                createdAt: admin.firestore.FieldValue.serverTimestamp(),
                status: 'pending',
                type: 'pairingInvite'
            });
            console.log('SMS queued for manual processing (Twilio not configured)');
        }
        return { success: true };
    }
    catch (error) {
        console.error('Error sending SMS:', error);
        throw new functions.https.HttpsError('internal', 'Failed to send SMS');
    }
});
// Send mutual pairing code via SMS
exports.sendMutualPairingCode = functions.https.onCall(async (data, context) => {
    const { toPhone, code, partnerName } = data;
    if (!toPhone || !code || !partnerName) {
        throw new functions.https.HttpsError('invalid-argument', 'Missing required fields');
    }
    const smsBody = `Your Willing Tree confirmation code with ${partnerName}: ${code}
Both partners must enter this code to connect.`;
    try {
        if (twilioClient && twilioPhoneNumber) {
            await twilioClient.messages.create({
                body: smsBody,
                from: twilioPhoneNumber,
                to: toPhone
            });
        }
        else {
            await admin.firestore().collection('smsQueue').add({
                to: toPhone,
                body: smsBody,
                createdAt: admin.firestore.FieldValue.serverTimestamp(),
                status: 'pending',
                type: 'mutualPairing'
            });
        }
        return { success: true };
    }
    catch (error) {
        console.error('Error sending SMS:', error);
        throw new functions.https.HttpsError('internal', 'Failed to send SMS');
    }
});
// Send weekly reminder via SMS
exports.sendWeeklyReminderSMS = functions.https.onCall(async (data, context) => {
    var _a;
    const { toPhone, partnerName, weekNumber } = data;
    if (!toPhone || !partnerName) {
        throw new functions.https.HttpsError('invalid-argument', 'Missing required fields');
    }
    const smsBody = `Week ${weekNumber} on The Willing Tree! 🌳
Time to select from ${partnerName}'s WishList.
Login: ${((_a = functions.config().app) === null || _a === void 0 ? void 0 : _a.url) || 'https://willingtree.app'}`;
    try {
        if (twilioClient && twilioPhoneNumber) {
            await twilioClient.messages.create({
                body: smsBody,
                from: twilioPhoneNumber,
                to: toPhone
            });
        }
        return { success: true };
    }
    catch (error) {
        console.error('Error sending SMS reminder:', error);
        return { success: false };
    }
});
// Send game results via SMS
exports.sendGameResultsSMS = functions.https.onCall(async (data, context) => {
    var _a;
    const { toPhone, score, correctGuesses } = data;
    if (!toPhone) {
        throw new functions.https.HttpsError('invalid-argument', 'Missing phone number');
    }
    const smsBody = `Willing Tree Results! 🎯
You scored ${score} points!
Correct guesses: ${correctGuesses}
View details: ${((_a = functions.config().app) === null || _a === void 0 ? void 0 : _a.url) || 'https://willingtree.app'}`;
    try {
        if (twilioClient && twilioPhoneNumber) {
            await twilioClient.messages.create({
                body: smsBody,
                from: twilioPhoneNumber,
                to: toPhone
            });
        }
        return { success: true };
    }
    catch (error) {
        console.error('Error sending SMS results:', error);
        return { success: false };
    }
});
//# sourceMappingURL=index.js.map