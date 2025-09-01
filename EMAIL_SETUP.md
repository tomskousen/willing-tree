# Email Functionality Setup for Willing Tree

## Current Status
The app is configured to use Firebase Authentication's built-in email services for:
1. **Email Verification** - Sent automatically when users sign up
2. **Password Reset** - Sent when users click "Forgot Password"
3. **Custom Invitations** - Sent via Firebase Functions (requires additional setup)

## Firebase Email Services (Working Out of Box)

### Email Verification & Password Reset
These work automatically through Firebase Auth without any additional configuration:

```javascript
// Email verification (automatic on signup)
await sendEmailVerification(user);

// Password reset (triggered by "Forgot Password")
await sendPasswordResetEmail(auth, email);
```

### To Enable Firebase Emails:

1. **Go to Firebase Console**
   - https://console.firebase.google.com
   - Select your project

2. **Enable Email/Password Authentication**
   - Authentication → Sign-in method → Email/Password → Enable
   - This is likely already done

3. **Configure Email Templates** (Optional)
   - Authentication → Templates
   - Customize the email templates for:
     - Email address verification
     - Password reset
     - Email address change

4. **Configure Authorized Domains**
   - Authentication → Settings → Authorized domains
   - Add your domains:
     - `localhost` (for development)
     - `tomskousen.github.io` (for GitHub Pages)
     - `willing-box-pwa.vercel.app` (for Vercel)
     - Your custom domain if you have one

## Fixing Firestore Permissions

The Firestore rules have been updated. To deploy them:

### Option 1: Via Firebase Console (Easiest)
1. Go to https://console.firebase.google.com
2. Select your project
3. Go to Firestore Database → Rules
4. Copy and paste the contents of `firestore.rules`
5. Click "Publish"

### Option 2: Via Firebase CLI
```bash
# First login to Firebase
firebase login

# Then deploy the rules
firebase deploy --only firestore:rules
```

## Custom Email Invitations (SendGrid/Firebase Functions)

For custom invitation emails, you need to:

1. **Set up SendGrid** (or use Firebase's built-in email)
   ```bash
   # Set SendGrid API key
   firebase functions:config:set sendgrid.api_key="YOUR_SENDGRID_API_KEY"
   ```

2. **Deploy Firebase Functions**
   ```bash
   # Deploy functions
   firebase deploy --only functions
   ```

## Testing Email Functionality

### Test Password Reset (Should Work Now)
1. Go to login page
2. Click "Forgot Password?"
3. Enter your email
4. Check your email for reset link

### Test Email Verification (Should Work Now)
1. Sign up with a new account
2. Check email for verification link
3. Click link to verify

### Common Issues & Solutions

#### "Missing or insufficient permissions"
**Solution**: Deploy the updated Firestore rules (see above)

#### No emails received
**Possible causes**:
1. Check spam folder
2. Verify email is correct
3. Check Firebase Console → Authentication → Users to see if user was created
4. Check Firebase Console logs for errors

#### Email templates not customized
**Solution**: Go to Firebase Console → Authentication → Templates

## Verification Steps

1. **Check Firebase Console**
   - Authentication → Users: See if users are being created
   - Firestore Database → Data: See if user profiles are being created
   - Functions → Logs: Check for any errors

2. **Check Browser Console**
   - Look for any error messages
   - Check network tab for failed requests

3. **Test Locally**
   ```bash
   # Run with Firebase emulators
   firebase emulators:start
   
   # In another terminal
   npm run dev
   ```

## Quick Fix for Immediate Use

If you need the app working immediately without custom emails:

1. **Use Firebase's built-in emails** (already working):
   - Password reset emails
   - Verification emails

2. **For invitations**, users can:
   - Share the app URL manually
   - Have their partner sign up independently
   - Use the mutual pairing feature with confirmation codes

The core authentication and password reset should already be working with Firebase's built-in email service. The custom invitation emails require Firebase Functions to be deployed with SendGrid or Twilio configuration.