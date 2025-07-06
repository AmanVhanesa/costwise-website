# Costwise Website

A modern, responsive website for the Costwise personal finance app.

## Features

- Responsive design with Tailwind CSS
- Custom MazzardSoftM font family
- App preview carousel with screenshots
- Smooth animations with Framer Motion
- Optimized for Vercel deployment

## Development

```bash
npm install
npm run dev
```

## Building for Production

```bash
npm run build
npm run preview
```

## Deployment

This project is optimized for Vercel deployment. The following changes have been made to ensure proper asset loading:

### Asset Paths
- All images are referenced from the `/public` directory with absolute paths (e.g., `/logo.png`, `/screenshots/screenshot1.png`)
- Fonts are referenced with absolute paths from the `/public/fonts` directory
- Favicon and manifest are properly referenced

### Font Loading
- Custom MazzardSoftM font family is configured in Tailwind CSS
- Font files are placed in `/public/fonts/`
- Fallback fonts are provided for better user experience

### Image Loading
- App screenshots are placed in `/public/screenshots/`
- Error handling is implemented for failed image loads
- Console logging helps debug asset loading issues

## Troubleshooting

If assets are not loading on Vercel:

1. Check the browser console for error messages
2. Verify that all files exist in the `/public` directory
3. Ensure file paths use absolute references (starting with `/`)
4. Check that the Vite config has `base: '/'` set

## File Structure

```
public/
├── fonts/          # Custom font files
├── screenshots/    # App preview images
├── logo.png        # App logo
├── favicon.png     # Favicon
└── manifest.json   # PWA manifest
```

## Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Responsive Carousel
- Heroicons

## Project Structure

```
costwise-website/
├── public/
│   └── favicon.svg
├── src/
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.js
└── README.md
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
