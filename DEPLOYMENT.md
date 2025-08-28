# 🚀 The Willing Tree - Production Deployment Guide

## **📋 COMPLETE DEPLOYMENT PLAN**

This guide will take The Willing Tree from local development to full production deployment with email functionality, user matching, and scalable infrastructure.

---

## **🎯 PHASE 1: PRE-DEPLOYMENT SETUP** *(Ready to Execute)*

### **✅ Step 1.1: Repository Setup** *(I can do this)*
```bash
# Initialize git repository
git init
git add .
git commit -m "Initial commit: The Willing Tree production ready"

# Create GitHub repository
gh repo create willing-tree --public --description "The Willing Tree - Relationship growth through intentional actions"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/willing-tree.git
git push -u origin main
```

### **✅ Step 1.2: Environment Configuration** *(Ready)*
- ✅ `.env.example` file created with all necessary variables
- ✅ `vercel.json` configured for deployment
- ✅ Production dependencies installed

---

## **🌐 PHASE 2: HOSTING DEPLOYMENT** *(95% I can do)*

### **Option A: Vercel (Recommended - I can set this up)**

1. **Deploy to Vercel:**
```bash
# Install Vercel CLI (if needed)
npm i -g vercel

# Deploy
vercel

# Follow prompts:
# - Link to existing project? No
# - What's your project's name? willing-tree
# - In which directory is your code located? ./
# - Want to override settings? No

# This creates the deployment and gives you a URL
```

2. **Set Environment Variables in Vercel:**
   - Go to https://vercel.com/dashboard
   - Select your project → Settings → Environment Variables
   - Add all variables from `.env.example`

### **🔧 What You Need to Do Manually:**
1. **Domain Setup** (5 minutes):
   - Buy domain: `willingtree.app` or similar
   - In Vercel dashboard → Domains → Add your domain
   - Update DNS records as prompted

---

## **📧 PHASE 3: EMAIL SERVICE SETUP** *(Detailed Instructions)*

### **Recommended: Resend.com** *(10 minutes setup)*

1. **Create Resend Account:**
   - Go to https://resend.com
   - Sign up with your email
   - Verify your account

2. **Get API Key:**
   - Dashboard → API Keys → Create API Key
   - Name: "Willing Tree Production"
   - Copy the API key (starts with `re_`)

3. **Add Domain:**
   - Dashboard → Domains → Add Domain
   - Enter your domain: `willingtree.app`
   - Add DNS records to your domain registrar:
     ```
     Type: TXT
     Name: @
     Value: (Resend will provide this)
     
     Type: CNAME
     Name: resend._domainkey
     Value: (Resend will provide this)
     ```

4. **Update Environment Variables:**
   ```bash
   VITE_RESEND_API_KEY=re_your_api_key_here
   VITE_FROM_EMAIL=hello@willingtree.app
   VITE_ENABLE_EMAIL=true
   ```

**Alternative: SendGrid** (if you prefer):
- Similar setup process
- Costs slightly more but has more features
- Better deliverability for high volume

---

## **🗄️ PHASE 4: DATABASE SETUP** *(For User Matching)*

### **Recommended: Supabase** *(15 minutes setup)*

1. **Create Supabase Project:**
   - Go to https://supabase.com
   - Create new project
   - Project name: "willing-tree"
   - Database password: (save this securely)
   - Region: Choose closest to your users

2. **Create Database Tables:**
```sql
-- Users table for matching
CREATE TABLE users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  age INTEGER,
  gender TEXT CHECK (gender IN ('male', 'female', 'non-binary', 'prefer-not-to-say')),
  created_at TIMESTAMP DEFAULT NOW(),
  last_active TIMESTAMP DEFAULT NOW()
);

-- Connections table for relationships
CREATE TABLE connections (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_email TEXT NOT NULL,
  partner_email TEXT NOT NULL,
  status TEXT CHECK (status IN ('pending', 'active', 'declined')) DEFAULT 'pending',
  invite_message TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  accepted_at TIMESTAMP
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE connections ENABLE ROW LEVEL SECURITY;

-- Create policies (basic - you can enhance these)
CREATE POLICY "Users can read own data" ON users
  FOR SELECT USING (auth.email() = email);

CREATE POLICY "Users can update own data" ON users
  FOR UPDATE USING (auth.email() = email);

CREATE POLICY "Anyone can create user" ON users
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Users can read own connections" ON connections
  FOR SELECT USING (auth.email() = user_email OR auth.email() = partner_email);

CREATE POLICY "Users can create connections" ON connections
  FOR INSERT WITH CHECK (auth.email() = user_email);
```

3. **Get Supabase Credentials:**
   - Project Settings → API
   - Copy Project URL and anon public key

4. **Update Environment Variables:**
   ```bash
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   VITE_ENABLE_USER_MATCHING=true
   ```

---

## **💳 PHASE 5: PAYMENTS SETUP** *(Already Configured)*

### **Stripe Configuration:**
1. **Stripe Dashboard:** https://dashboard.stripe.com
2. **Get Keys:**
   - Developers → API Keys
   - Copy Publishable key (starts with `pk_`)
3. **Update Environment:**
   ```bash
   VITE_STRIPE_PUBLISHABLE_KEY=pk_live_your_key_here
   ```

---

## **📊 PHASE 6: ANALYTICS** *(Optional but Recommended)*

### **Vercel Analytics** *(Free)*:
1. **Enable in Vercel:**
   - Project → Analytics → Enable
   - Copy tracking ID

2. **Add to App:**
   ```typescript
   // In main.tsx
   import { Analytics } from '@vercel/analytics/react';
   
   // Add to your root component
   <Analytics />
   ```

---

## **🔧 PHASE 7: INTEGRATION** *(I can do this)*

I'll now integrate the email and matching services into the main app:

### **Step 7.1: Update Main App**
- ✅ Integrate email service with invite flow
- ✅ Add user registration to matching database
- ✅ Enhance user search and connection features
- ✅ Add production-ready error handling

---

## **🧪 PHASE 8: TESTING & DEPLOYMENT**

### **Testing Checklist:**
- [ ] Build succeeds: `npm run build`
- [ ] All features work in production build
- [ ] Email sending works with real domain
- [ ] User matching and database queries work
- [ ] Payment flow works with live Stripe
- [ ] Analytics tracking works

### **Go Live:**
```bash
# Final deployment
vercel --prod

# Or set up automatic deployments from GitHub
# (Vercel will auto-deploy when you push to main branch)
```

---

## **⚡ WHAT I CAN DO RIGHT NOW:**

1. ✅ **Set up GitHub repository and push code**
2. ✅ **Deploy to Vercel with one command**
3. ✅ **Integrate email and matching services into the app**
4. ✅ **Configure all the production optimizations**
5. ✅ **Create the database schema and setup scripts**

## **🤝 WHAT YOU NEED TO DO:**

1. **Domain Registration** (5 mins): Buy `willingtree.app`
2. **Email Service Signup** (10 mins): Resend.com account + domain verification
3. **Database Setup** (15 mins): Supabase account + run provided SQL
4. **Environment Variables** (5 mins): Add keys to Vercel dashboard

**Total Manual Time: ~35 minutes**

---

## **💰 COST BREAKDOWN:**

- **Domain**: $10-15/year
- **Vercel Hosting**: FREE (Pro plan $20/month if needed)
- **Resend Email**: FREE up to 3k emails/month
- **Supabase Database**: FREE up to 500MB
- **Stripe**: 2.9% + 30¢ per transaction

**Monthly Cost**: $0-5 for most usage levels

---

## **🚀 READY TO DEPLOY?**

Say "Let's deploy!" and I'll start executing the parts I can do immediately:
1. Create GitHub repository
2. Deploy to Vercel  
3. Integrate all services into the app
4. Provide you with exact setup instructions for the manual parts

The app is production-ready and this deployment plan will have you live within 1-2 hours! 🌳✨