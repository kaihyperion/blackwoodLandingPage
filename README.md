# Modern Landing Page with Shaders

A beautiful, modern landing page featuring animated shaders and a stunning hero section built with Next.js, Three.js, and Framer Motion.

## Features

- 🎨 **Animated Shader Background** - Custom GLSL shaders with paper-like textures
- ✨ **Modern Hero Section** - Smooth animations and interactive elements
- 🎭 **Framer Motion** - Fluid animations and micro-interactions
- 🎯 **Three.js Integration** - Real-time 3D graphics and shaders
- 📱 **Responsive Design** - Works perfectly on all devices
- 🎨 **Tailwind CSS** - Modern utility-first styling
- ⚡ **Next.js 14** - Latest React framework with App Router

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js + @react-three/fiber
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Shaders**: Custom GLSL shaders

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── ShaderBackground.tsx # Three.js shader background
│   └── HeroSection.tsx      # Hero section with animations
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── tsconfig.json           # TypeScript configuration
```

## Customization

### Shader Background

The shader background uses custom GLSL code in `components/ShaderBackground.tsx`. You can modify:

- **Colors**: Change the `color1`, `color2`, `color3` variables in the fragment shader
- **Animation Speed**: Adjust the `time * 0.1` multiplier
- **Noise Pattern**: Modify the `fbm` function parameters

### Hero Section

The hero section is in `components/HeroSection.tsx`. You can customize:

- **Text Content**: Update the heading, subtitle, and CTA text
- **Colors**: Modify the gradient classes and color variables
- **Animations**: Adjust the Framer Motion variants and timing
- **Stats**: Change the statistics numbers and labels

### Styling

The project uses Tailwind CSS with custom CSS variables. You can modify:

- **Colors**: Update the CSS variables in `app/globals.css`
- **Typography**: Change the font family in `app/layout.tsx`
- **Animations**: Add custom keyframes in `tailwind.config.js`

## Performance Optimization

- The shader background is optimized for 60fps performance
- Images and assets are automatically optimized by Next.js
- Animations use hardware acceleration where possible
- Lazy loading is implemented for better initial load times

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:

```bash
npm run build
npm start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - feel free to use this project for your own landing pages!

## Credits

- Inspired by modern design trends and shader techniques
- Built with love using Next.js, Three.js, and Framer Motion
