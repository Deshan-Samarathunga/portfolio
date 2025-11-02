# Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Optionally styled with Tailwind CSS.

## Features

- 🎨 Modern and responsive design
- 📱 Mobile-friendly navigation
- ⚡ Smooth scrolling and animations
- 📧 Contact form
- 🎯 SEO optimized
- ♿ Accessible
- 🚀 Fast performance

## File Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── css/
│   ├── style.css      # Custom CSS styles (if not using Tailwind)
│   └── input.css      # Tailwind CSS input file
│
├── js/
│   └── main.js        # JavaScript functionality
│
├── images/            # Your images folder
│   └── .gitkeep      # Keep folder in git
│
├── assets/            # Other assets
│
├── package.json       # Node.js dependencies
├── tailwind.config.js # Tailwind CSS configuration
├── README.md          # This file
└── .gitignore        # Git ignore rules
```

## Setup

### Option 1: Using Plain CSS

1. Simply open `index.html` in your browser
2. Or use a local server:
   ```bash
   npx http-server . -p 3000
   ```

### Option 2: Using Tailwind CSS

1. Install dependencies:
   ```bash
   npm install
   ```

2. For development (with watch mode):
   ```bash
   npm run dev
   ```

3. For production build:
   ```bash
   npm run build
   ```

4. Serve the site:
   ```bash
   npm run serve
   ```

## Customization

### Update Your Information

1. **Personal Info**: Edit `index.html` to update your name, title, and description
2. **Skills**: Modify the `skillsData` array in `js/main.js`
3. **Projects**: Modify the `projectsData` array in `js/main.js`
4. **Colors**: Update CSS variables in `css/style.css` or Tailwind config in `tailwind.config.js`
5. **Social Links**: Update footer links in `index.html`

### Adding Content

- **Images**: Place your images in the `images/` folder
- **Projects**: Add project cards in `js/main.js`
- **Skills**: Add skill cards in `js/main.js`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your portfolio!

## Credits

- Font Awesome for icons
- Google Fonts for typography
