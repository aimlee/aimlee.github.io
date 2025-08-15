# Ali Kurban - Portfolio Website

A modern, responsive portfolio website built with cutting-edge web technologies to showcase my experience as a Software Engineer, ML Researcher, and Product Officer.

## 🚀 Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/) - React framework for production
- **Package Manager**: [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager
- **UI Library**: [Chakra UI v3](https://v3.chakra-ui.com/) - Modular and accessible component library
- **Animation**: [Framer Motion](https://www.framer.com/motion/) - Production-ready motion library for React
- **3D Graphics**: [Three.js](https://threejs.org/) - JavaScript 3D library for immersive experiences
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type safety and better developer experience
- **Styling**: CSS-in-JS with Chakra UI's emotion-based styling system

## ✨ Features

- **Responsive Design** - Mobile-first approach with seamless desktop experience
- **Dark Theme** - Modern dark UI with accent colors and smooth transitions
- **Interactive 3D Elements** - Three.js integration for engaging visual experiences
- **Smooth Animations** - Framer Motion powered micro-interactions and page transitions
- **Performance Optimized** - Next.js optimization with static generation and image optimization
- **Accessible** - WCAG compliant components with proper semantic markup
- **SEO Friendly** - Meta tags, structured data, and optimized content structure

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** 18.x or later
- **pnpm** package manager (recommended) or npm/yarn

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ali-kurban-portfolio.git
   cd ali-kurban-portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

```bash
# Development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint

# Type checking
pnpm type-check
```

## 🏗️ Project Structure

```
├── app/                    # Next.js 14 App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── WorkExperience.tsx # Work experience section
│   ├── Research.tsx      # Research projects section
│   └── ...               # Other components
├── lib/                  # Utility functions and configs
├── public/               # Static assets
├── styles/               # Additional styling
└── types/                # TypeScript type definitions
```

## 🎨 Design System

The portfolio uses a consistent design system built on Chakra UI v3:

- **Colors**: Custom accent colors with dark theme support
- **Typography**: Hierarchy-based font sizing with optimal readability
- **Spacing**: Consistent spacing scale using Chakra's design tokens
- **Components**: Accessible, reusable components following design principles

## 🌟 Key Sections

### Work Experience
- **Chief Product Officer** @ SPOTFAKE.AI (2024-2025)
- **Research & Teaching Assistant** @ University of Adelaide (2023-2024)
- **Full-Stack Developer** @ GoCrowd.io (2022)
- **Software Engineer** @ Industrial and Commercial Bank of China (2021)

### Research Projects
- **MAMBA STOCK** - Novel stock prediction using State Space models
- **Debiasing Hospital Reviews** - Gender bias mitigation in NLP systems

### Skills & Technologies
- **Programming**: Python, JavaScript, TypeScript, C++, Java
- **ML/AI**: PyTorch, TensorFlow, Computer Vision, NLP
- **Web**: React, Next.js, Node.js, REST APIs
- **Cloud**: AWS, Azure, GCP, Docker, Kubernetes

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔧 Environment Variables

Create a `.env.local` file for any environment-specific configuration:

```bash
# Example environment variables
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your-ga-id
```

## 📱 Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 🤝 Contributing

This is a personal portfolio project, but feedback and suggestions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Ali Kurban

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 📞 Contact

**Ali Kurban**
- Email: ali.kurbanuly@gmail.com
- LinkedIn: [kurbana](https://linkedin.com/in/kurbana)
- Location: Adelaide, Australia

## 🙏 Acknowledgments

- [Chakra UI](https://chakra-ui.com/) for the amazing component library
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Three.js](https://threejs.org/) for 3D capabilities
- [Next.js](https://nextjs.org/) team for the excellent framework
- The open-source community for inspiration and resources

---

Built with ❤️ by Ali Kurban