export const metadata = {
  title: 'Sam.',
  description: 'Sam\'s portfolio showcasing profile',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/*<link rel="icon" href="/favicon.png" />*/}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Satisfy&family=Dancing+Script:wght@400;700&family=Pacifico&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Outfit:wght@300;400;600&family=Space+Grotesk:wght@400;500;600&family=Sora:wght@300;400;600&family=Raleway:wght@200;300;400&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Orbitron:wght@500;700&family=Exo+2:wght@500;600;700&family=Audiowide&family=Chakra+Petch:wght@600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}