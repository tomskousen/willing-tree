# Firebase Deployment Guide for Willing Tree PWA

## Current Implementation Status

✅ **COMPLETED FEATURES:**
- Firebase Authentication (email/password)
- Firestore database integration
- Real-time data synchronization
- Email invitations via Firebase Functions
- SMS invitations via Twilio
- Mutual pairing between existing users
- Partnership breaking functionality
- Session persistence across devices

## Deployment Steps

### 1. Firebase Functions Configuration

Before deploying, configure your Firebase Functions environment variables:

```bash
# Set SendGrid API key for email
firebase functions:config:set sendgrid.api_key="YOUR_SENDGRID_API_KEY"

# Set Twilio credentials for SMS
firebase functions:config:set twilio.account_sid="YOUR_TWILIO_ACCOUNT_SID"
firebase functions:config:set twilio.auth_token="YOUR_TWILIO_AUTH_TOKEN" 
firebase functions:config:set twilio.phone_number="+1YOUR_TWILIO_PHONE"

# Set your app URL
firebase functions:config:set app.url="https://your-domain.com"
```

### 2. Deploy Firebase Functions

```bash
# Deploy functions only
firebase deploy --only functions

# Or deploy everything
firebase deploy
```

### 3. GitHub Repository Setup

```bash
# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Willing Tree PWA with Firebase integration"

# Create GitHub repo
gh repo create willing-tree-pwa --public

# Push to GitHub
git push -u origin main
```

### 4. Deploy to GitHub Pages

```bash
# Build the app
npm run build

# Deploy to GitHub Pages
npm run deploy
```

Your app will be available at: `https://YOUR_USERNAME.github.io/willing-tree/`

### 5. Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## Required External Services

### SendGrid (for Email)
1. Sign up at https://sendgrid.com
2. Create an API key
3. Verify your sender email domain
4. Add API key to Firebase Functions config

### Twilio (for SMS)
1. Sign up at https://twilio.com
2. Get Account SID and Auth Token
3. Purchase a phone number
4. Add credentials to Firebase Functions config

## Testing the Deployment

Test these features after deployment:

1. **User Registration & Login**
   - Create new account
   - Login persists across sessions
   - Logout works

2. **Partnership Creation**
   - Email invitation sending
   - SMS invitation sending
   - Pairing code generation

3. **Mutual Pairing**
   - Find existing user by email
   - Confirmation code generation
   - Both users enter same code

4. **Partnership Management**
   - View all partnerships
   - Break/end partnership
   - Partnership status updates

5. **Weekly Game Flow**
   - Create WishList (12 items)
   - Select WillingList (3 items)
   - Guessing game
   - Results display

## Security Checklist

- [ ] Update Firestore security rules for production
- [ ] Restrict API keys to specific domains
- [ ] Enable Firebase App Check
- [ ] Configure CORS in Firebase Functions
- [ ] Enable 2FA on all service accounts

## Monitoring

- **Firebase Console**: Monitor usage and errors
- **Functions Logs**: `firebase functions:log`
- **Firestore Usage**: Check read/write operations
- **Authentication**: Track user signups

## Cost Estimates

- **Firebase Free Tier**:
  - 50K reads/day
  - 20K writes/day
  - 20K deletes/day
  - 10GB bandwidth/month
  - 125K function invocations/month

- **SendGrid**: 100 emails/day free
- **Twilio**: $15 free trial credit

## Troubleshooting

### Functions Not Sending Emails/SMS
- Check Functions logs: `firebase functions:log`
- Verify config: `firebase functions:config:get`
- Ensure billing is enabled for external APIs

### Authentication Issues
- Check Firebase Console → Authentication
- Verify authorized domains
- Check redirect URLs

### Database Issues  
- Review Firestore security rules
- Check indexes for complex queries
- Monitor usage in Firebase Console