# Firebase Setup Guide

## Enable Email/Password Authentication

To fix the "auth/invalid-credential" error, you need to enable Email/Password authentication in Firebase Console:

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project: **willing-tree**
3. Navigate to **Authentication** in the left sidebar
4. Click the **Sign-in method** tab
5. Find **Email/Password** in the list
6. Click on it and toggle **Enable**
7. Click **Save**

## Test Authentication

After enabling Email/Password auth:

1. Try the "Forgot Password" link - it should now send a reset email
2. Create a new account using "Create Account"
3. Or reset your existing account password using the forgot password flow

## Verify Firebase Configuration

Your current Firebase config in `.env.local`:
- Project ID: willing-tree
- Auth Domain: willing-tree.firebaseapp.com

Make sure these match your Firebase project settings.

## Common Issues

- **invalid-credential**: Email/Password auth not enabled
- **user-not-found**: Email doesn't exist in Firebase Auth
- **wrong-password**: Password is incorrect
- **weak-password**: Password less than 6 characters