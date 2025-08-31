#!/bin/bash

# Firebase Configuration Setup Script
# Run this after getting your Firebase configuration from the console

echo "Firebase Configuration Setup"
echo "============================"
echo ""
echo "Please enter your Firebase configuration values from the Firebase Console:"
echo "(Project Settings > Your apps > Web app)"
echo ""

# Read configuration values
read -p "API Key (starts with AIza...): " API_KEY
read -p "Auth Domain (e.g., willing-tree-app.firebaseapp.com): " AUTH_DOMAIN
read -p "Project ID (e.g., willing-tree-app): " PROJECT_ID
read -p "Storage Bucket (e.g., willing-tree-app.appspot.com): " STORAGE_BUCKET
read -p "Messaging Sender ID (numeric): " MESSAGING_SENDER_ID
read -p "App ID (starts with 1:...): " APP_ID
read -p "Measurement ID (starts with G-...) [optional, press Enter to skip]: " MEASUREMENT_ID

# Create .env.local file
cat > .env.local << EOF
# Firebase Configuration
VITE_FIREBASE_API_KEY=$API_KEY
VITE_FIREBASE_AUTH_DOMAIN=$AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID=$PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET=$STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID=$MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID=$APP_ID
VITE_FIREBASE_MEASUREMENT_ID=$MEASUREMENT_ID

# Firebase Emulators (development only)
VITE_USE_FIREBASE_EMULATORS=false

# App Configuration
VITE_APP_NAME="Willing Box"
VITE_APP_VERSION=1.0.0
VITE_APP_ENV=development

# Optional Services (can be added later)
VITE_STRIPE_PUBLISHABLE_KEY=
VITE_RESEND_API_KEY=
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
EOF

echo ""
echo "✅ Configuration saved to .env.local"
echo ""
echo "Now setting up GitHub Secrets..."
echo "Please run: gh auth login (if not already logged in)"
echo ""

# Check if gh CLI is installed
if ! command -v gh &> /dev/null; then
    echo "GitHub CLI (gh) is not installed. Installing..."
    brew install gh
fi

# Add secrets to GitHub
echo "Adding secrets to GitHub repository..."
gh secret set VITE_FIREBASE_API_KEY --body "$API_KEY" --repo tomskousen/willing-tree
gh secret set VITE_FIREBASE_AUTH_DOMAIN --body "$AUTH_DOMAIN" --repo tomskousen/willing-tree
gh secret set VITE_FIREBASE_PROJECT_ID --body "$PROJECT_ID" --repo tomskousen/willing-tree
gh secret set VITE_FIREBASE_STORAGE_BUCKET --body "$STORAGE_BUCKET" --repo tomskousen/willing-tree
gh secret set VITE_FIREBASE_MESSAGING_SENDER_ID --body "$MESSAGING_SENDER_ID" --repo tomskousen/willing-tree
gh secret set VITE_FIREBASE_APP_ID --body "$APP_ID" --repo tomskousen/willing-tree

if [ ! -z "$MEASUREMENT_ID" ]; then
    gh secret set VITE_FIREBASE_MEASUREMENT_ID --body "$MEASUREMENT_ID" --repo tomskousen/willing-tree
fi

echo ""
echo "✅ GitHub Secrets added successfully!"
echo ""
echo "Setup complete! You can now:"
echo "1. Test locally: npm run dev"
echo "2. Deploy: git push (will trigger GitHub Actions)"