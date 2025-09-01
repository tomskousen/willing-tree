# Immediate Fix Instructions

## 🔥 Fix "Missing or insufficient permissions" Error

### Step 1: Update Firestore Rules (2 minutes)

1. **Open Firebase Console**: https://console.firebase.google.com
2. Select your project: **willing-tree-pwa** (or your project name)
3. Navigate to: **Firestore Database** → **Rules** tab
4. **DELETE** everything in the rules editor
5. **COPY & PASTE** this entire block:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow users to create and manage their own profile
    match /users/{userId} {
      allow read: if request.auth != null && request.auth.uid == userId;
      allow create: if request.auth != null && request.auth.uid == userId;
      allow update: if request.auth != null && request.auth.uid == userId;
      allow delete: if false;
    }
    
    // Allow searching for users (for pairing)
    match /users/{userId} {
      allow get: if request.auth != null;
      allow list: if request.auth != null && request.query.limit <= 10;
    }
    
    // Innermosts (partnerships)
    match /innermosts/{innermostId} {
      allow read: if request.auth != null && 
        (request.auth.uid == resource.data.partnerA || 
         request.auth.uid == resource.data.partnerB);
      allow create: if request.auth != null;
      allow update: if request.auth != null && 
        (request.auth.uid == resource.data.partnerA || 
         request.auth.uid == resource.data.partnerB);
      allow delete: if request.auth != null && 
        (request.auth.uid == resource.data.partnerA || 
         request.auth.uid == resource.data.partnerB);
    }
    
    // Willing boxes
    match /willingBoxes/{boxId} {
      allow read: if request.auth != null && 
        (request.auth.uid == resource.data.partnerA || 
         request.auth.uid == resource.data.partnerB);
      allow create: if request.auth != null;
      allow update: if request.auth != null && 
        (request.auth.uid == resource.data.partnerA || 
         request.auth.uid == resource.data.partnerB ||
         request.auth.uid == request.resource.data.partnerA || 
         request.auth.uid == request.resource.data.partnerB);
      allow delete: if false;
    }
  }
}
```

6. Click **"Publish"** button
7. Wait for "Rules published successfully" message

### Step 2: Verify Email Settings (1 minute)

1. Still in Firebase Console
2. Go to: **Authentication** → **Settings** → **Authorized domains**
3. Make sure these domains are listed:
   - `localhost`
   - `tomskousen.github.io`
   - Any other domains you're using

### Step 3: Test It Works

1. Go to your app: https://tomskousen.github.io/willing-tree/
2. Try to sign up with a NEW email
3. Should work now! ✅

## 📧 Email Functionality Status

### ✅ What's Working (Built-in Firebase)
- **Password Reset Emails**: When you click "Forgot Password", Firebase sends the email
- **Email Verification**: When new users sign up, Firebase sends verification email
- **These work WITHOUT any additional setup!**

### ⚠️ What Needs Setup (Custom Emails)
- **Invitation Emails**: Requires Firebase Functions + SendGrid
- **SMS Messages**: Requires Firebase Functions + Twilio

## 🔍 How to Verify Emails Are Working

### Test Password Reset:
1. Go to login page
2. Click "Forgot Password?"
3. Enter an email address
4. Click "Send Reset Email"
5. **Check your email** (including spam folder)
6. You should receive an email from `noreply@willing-tree-pwa.firebaseapp.com`

### Check Firebase Console:
1. Go to Firebase Console → **Authentication** → **Users**
2. You should see users listed here
3. Check the "Providers" column - should show envelope icon for email

## 🚨 If Emails Still Don't Arrive

1. **Check Spam Folder** - Firebase emails often go to spam
2. **Check Email Address** - Make sure it's typed correctly
3. **Try Different Email** - Some providers block Firebase emails
4. **Check Firebase Quotas**:
   - Free tier allows 10 password reset emails per day
   - Free tier allows unlimited verification emails

## 💡 Quick Alternative

If you need to test the app without email:

1. **Create test accounts directly in Firebase Console**:
   - Authentication → Users → Add User
   - Enter email and password
   - User can login immediately

2. **Use the mutual pairing feature**:
   - Both users sign up separately
   - Use "Pair with Existing User" option
   - Share confirmation code via text/chat

## Next Steps

Once the Firestore rules are published:
1. User registration will work ✅
2. Password reset emails work (Firebase built-in) ✅
3. For custom invitation emails, you'll need to:
   - Set up SendGrid account
   - Deploy Firebase Functions
   - Or just share the app link manually for now

The app is fully functional for testing even without custom email invitations!