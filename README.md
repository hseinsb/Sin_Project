# Sin Desire Profiler 🎭

A sophisticated psychological quiz website that determines users' dominant "deadly sin desire" through a 25-question assessment. Built for Hussein Sbeiti.

## 🌟 Features

- **Dark Mystical Interface**: Professional, modern design with mystical animations
- **25-Question Psychology Quiz**: Rule-based scoring system (no AI/LLM)
- **7 Personalized Results**: Detailed sin profiles with poetic descriptions
- **Email Capture**: Collects user data before revealing results
- **Firebase Integration**: Real-time data storage and analytics
- **Google Sheets Webhook**: Automatic data export for marketing
- **Mobile Responsive**: Optimized for all devices

## 🛠️ Tech Stack

- **Frontend**: Next.js 15 + React 19 + TypeScript
- **Styling**: Tailwind CSS 4 + Custom CSS animations
- **Database**: Firebase Firestore
- **Analytics**: Firebase Analytics
- **Deployment**: Vercel (recommended)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Firebase project
- Google Apps Script webhook (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hseinsb/Sin-Project.git
   cd Sin-Project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create `.env.local` in the root directory:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)**

## 🔐 Security

- ✅ API keys are stored in environment variables
- ✅ `.env.local` is gitignored 
- ✅ No sensitive data in source code
- ✅ Firebase security rules recommended
- ✅ CORS handling for external webhooks

## 📊 Quiz Logic

### Scoring System
- 25 questions (20 multiple choice + 5 yes/no)
- Each answer tagged with 1-2 sins
- Scores increment based on selections
- Tie-breaking with priority order: pride, envy, wrath, sloth, greed, lust, gluttony

### Seven Sin Results
1. **Pride** - "The Silent Throne"
2. **Envy** - "The Hungry Mirror" 
3. **Wrath** - "The Burning Crown"
4. **Sloth** - "The Quiet Rebellion"
5. **Greed** - "The Golden Cage"
6. **Lust** - "The Crimson Heart"
7. **Gluttony** - "The Endless Feast"

## 🗂️ Project Structure

```
src/
├── app/                 # Next.js app router
│   ├── quiz/           # Quiz interface
│   ├── capture/        # Email capture form
│   ├── results/        # Sin result pages
│   └── layout.tsx      # Root layout
├── components/         # Reusable components
├── data/              # Quiz questions & sin profiles
├── lib/               # Firebase configuration
├── types/             # TypeScript types
└── utils/             # Quiz logic & calculations
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

### Other Platforms
- Netlify: Add environment variables in site settings
- Firebase Hosting: Use Firebase functions for environment variables
- Custom VPS: Set up environment variables and process manager

## 📈 Analytics & Data

### Firebase Collections
- `users`: Complete user data with quiz results
- `email_leads`: Email leads for marketing

### Google Sheets Integration
Real-time webhook exports user data to Google Sheets for:
- Email marketing campaigns
- User analytics and insights
- Data visualization and reporting

## 🎨 Design Features

- **Advanced CSS**: Glass morphism, gradients, animations
- **Responsive Design**: Mobile-first approach
- **Accessibility**: WCAG compliant color contrasts
- **Performance**: Optimized images and lazy loading
- **SEO**: Meta tags, OpenGraph, structured data

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary software owned by Hussein Sbeiti. All rights reserved.

## 📞 Support

For issues or questions, please contact Hussein Sbeiti or create an issue in this repository.

---

**Built with ❤️ by Hussein Sbeiti**

<!-- Trigger Vercel deployment with ESLint fixes -->
