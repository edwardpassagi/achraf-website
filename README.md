# Mohamed A. Belakhoua - Portfolio

[![Build and Deploy](https://github.com/edwardpassagi/achraf-website/actions/workflows/deploy.yml/badge.svg)](https://github.com/edwardpassagi/achraf-website/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A clean, modern one-page landing site for Mohamed Achraf Belakhoua, Embedded Engineer at OmniOn Power (formerly ABB). This professional portfolio showcases his expertise in embedded systems and hardware-software integration.

**Created by Edward Passagi** using Next.js and Tailwind CSS.

## ✨ Features

- **Modern Design**: Clean, professional aesthetic with subtle animations
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Single-Page Experience**: No vertical scrolling, everything fits in viewport
- **Professional Animations**: Elegant Framer Motion animations that enhance UX
- **Technical Background**: Grid patterns and circuit-like elements reflecting engineering expertise
- **Performance Optimized**: Fast loading with Next.js 14 and static export
- **SEO Ready**: Proper meta tags and structured data
- **Accessibility**: WCAG compliant design and interactions

## 🚀 Live Demo

Visit the live site: [https://edwardpassagi.github.io/achraf-website](https://edwardpassagi.github.io/achraf-website)

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Font**: Inter (Google Fonts)
- **Deployment**: GitHub Pages with GitHub Actions
- **Development**: ESLint, Prettier

## 📦 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/USERNAME/REPOSITORY.git
   cd REPOSITORY
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build and Deployment

### Local Build
```bash
# Build for production
npm run build

# Start production server
npm start
```

### Static Export (for GitHub Pages)
```bash
# Build and export static files
npm run build
```

### Automated Deployment

This project uses GitHub Actions for automated CI/CD:

- **Continuous Integration**: Runs on every push and pull request
- **Multi-Node Testing**: Tests on Node.js 18.x and 20.x
- **Automated Deployment**: Deploys to GitHub Pages on main branch pushes
- **Build Artifacts**: Stores build files for debugging

#### Setup GitHub Pages Deployment

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"
4. The workflow will automatically deploy on pushes to main branch

#### Alternative Deployment Options

The workflow includes commented configurations for:
- **Vercel**: Uncomment and add required secrets
- **Netlify**: Uncomment and add required secrets

## 📁 Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD
├── app/
│   ├── globals.css            # Global styles and Tailwind imports
│   ├── layout.tsx             # Root layout with metadata
│   └── page.tsx               # Main landing page component
├── public/
│   └── images/
│       ├── mo-avatar.jpg      # Profile avatar
│       └── icon.png           # Favicon
├── .gitignore                 # Git ignore rules
├── next.config.js             # Next.js configuration
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # Tailwind CSS configuration
└── tsconfig.json              # TypeScript configuration
```

## 🎨 Design Features

### Visual Elements
- **Gradient Backgrounds**: Subtle blue-to-slate gradients
- **Grid Patterns**: Technical grid overlay with fade effects
- **Geometric Shapes**: Animated triangles, circles, and squares
- **Circuit Elements**: SVG circuit-board style graphics
- **Floating Particles**: Subtle animated dots and elements

### Animations
- **Page Load Sequence**: Staggered content appearance
- **Hover Effects**: Interactive button and avatar responses
- **Background Motion**: Gentle floating blob animations
- **Delayed Elements**: Progressive background element reveals

### Professional Touches
- **Company Badge**: OmniOn Power branding with pulse indicator
- **Avatar Frame**: Gradient border with hover effects
- **Typography**: Professional font hierarchy with gradient text
- **Color Scheme**: Blue/indigo palette conveying trust and technology

## 🔧 Customization

### Updating Content
- **Personal Info**: Edit `app/page.tsx` for name, title, description
- **Company**: Update company name and branding
- **Avatar**: Replace `public/images/mo-avatar.jpg`
- **Favicon**: Replace `public/images/icon.png`

### Styling
- **Colors**: Modify `tailwind.config.js` and CSS classes
- **Animations**: Adjust Framer Motion configurations
- **Layout**: Update component structure in `app/page.tsx`

### Deployment
- **Domain**: Add custom domain in workflow CNAME setting
- **Platform**: Switch deployment target in GitHub Actions

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

**Mohamed A. Belakhoua** - Embedded Engineer at OmniOn Power
- **Portfolio**: [https://edwardpassagi.github.io/achraf-website](https://edwardpassagi.github.io/achraf-website)
- **LinkedIn**: [Add LinkedIn profile]
- **Email**: [Add professional email]

**Edward Passagi** - Website Creator & Developer
- **GitHub**: [Add GitHub profile]
- **LinkedIn**: [Add LinkedIn profile]
- **Email**: [Add professional email]

---

Created by **Edward Passagi** for Mohamed Achraf Belakhoua  
Built with ❤️ using Next.js, TypeScript, and Tailwind CSS