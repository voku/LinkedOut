# LinkedOut: The Reality Check

<div align="center">

A satirical LinkedIn clone that analyzes the reality of "10x developer" claims in the age of AI. Experience the contrast between polished professional personas and the actual daily struggles of software development.

[Live Demo](https://voku.github.io/LinkedOut/) | [Report Bug](https://github.com/voku/LinkedOut/issues) | [Request Feature](https://github.com/voku/LinkedOut/issues)

</div>

## 🎯 About

LinkedOut is a tongue-in-cheek exploration of the disconnect between LinkedIn's aspirational posts and the reality of software development. It showcases:

- **Profile Reality Check**: Compare AI-generated "10x developer" profiles with actual coding experiences
- **Feed Satire**: Posts that highlight the humor in tech industry trends and buzzwords
- **UI Parody**: A faithful recreation of LinkedIn's interface with a satirical twist

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/voku/LinkedOut.git
   cd LinkedOut
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

## 📦 Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Hosting**: GitHub Pages

## 📁 Project Structure

```
LinkedOut/
├── components/          # React components
│   ├── Layout.tsx      # Main layout wrapper
│   ├── Navbar.tsx      # Navigation bar
│   ├── ProfileView.tsx # Profile display
│   ├── Feed.tsx        # Post feed
│   └── ...
├── constants.ts        # App data (posts, profiles, comments)
├── types.ts           # TypeScript type definitions
├── index.html         # Entry point
├── index.tsx          # React root
└── App.tsx           # Main app component
```

## 🔍 Key Files Detector Helper Prompt

When exploring this codebase, use this prompt to quickly locate important files:

```
Please identify and show me:
1. Main application entry points (index.html, index.tsx, App.tsx)
2. Component files in the components/ directory
3. Data files (constants.ts for posts/profiles/comments)
4. Type definitions (types.ts)
5. Configuration files (vite.config.ts, package.json, tsconfig.json)
```

**Key Files to Start With**:
- `index.html` - HTML entry point with root div
- `index.tsx` - React application bootstrap
- `App.tsx` - Main application component
- `components/Layout.tsx` - Layout structure
- `constants.ts` - All application data (posts, profiles, comments)
- `types.ts` - TypeScript interfaces

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Inspired by the LinkedIn platform
- Built with modern web technologies
- Created as a satirical commentary on tech industry trends

## 🔗 Links

- Repository: [https://github.com/voku/LinkedOut](https://github.com/voku/LinkedOut)
- Live Demo: [https://voku.github.io/LinkedOut/](https://voku.github.io/LinkedOut/)
- Issue Tracker: [https://github.com/voku/LinkedOut/issues](https://github.com/voku/LinkedOut/issues)
