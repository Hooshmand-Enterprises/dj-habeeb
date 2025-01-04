import React from 'react'
import { Box, Button, Link } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import EmailIcon from '@mui/icons-material/Email';
import { useMemo } from 'react'
import { useMediaQuery, ThemeProvider, createTheme, CssBaseline } from '@mui/material';

import 'animate.css/animate.compat.css'
import './App.css'

const App = () => {

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <div className="App">
        <header className="App-header">
          <Box
            sx={{
              width: '100vw',
              height: '100vh',
              backgroundImage: 'url(/assets/controller.webp), url(/assets/controller.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: 'inset 0 0 0 1000px rgba(0,0,0,.5)'
            }}
          >
            <picture>
              <source srcSet="/assets/habeeb-logo-white.webp" type="image/webp" />
              <source srcSet="/assets/habeeb-logo-white.png" type="image/png" />
              <img src="/assets/habeeb-logo-white.png" alt="Habeeb Logo" style={{ width: '1000px', maxWidth: '90%', height: 'auto' }} />
            </picture>
          </Box>
        </header>
        <article className='App-body'>
          <section style={{ textAlign: 'center', marginTop: '20px' }}>
            <h2 style={{ color: 'white' }}>Latest Mix</h2>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
              <iframe
                title='Mixcloud Feed'
                width="100%" 
                height="120" 
                src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fhabeebmh%2F" 
                frameBorder="0" 
              ></iframe>
              <Button 
                variant='text'
                href="https://www.mixcloud.com/habeebmh/" 
                target="_blank" 
                rel="noopener noreferrer" 
                startIcon={<LibraryMusicIcon />}
              >
                All mixes
              </Button>
            </div>
          </section>
          <hr style={{ width: '90%', margin: '20px auto', border: '1px solid grey' }} />
          <section style={{ textAlign: 'center', marginTop: '20px' }}>
            <h2 style={{ color: 'white' }}>Instagram</h2>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
              <iframe 
                title='Instagram Feed'
                src="https://www.instagram.com/habeebmh_/embed" 
                width="100%" 
                height="500" 
                frameBorder="0" 
                scrolling="no" 
                allowtransparency="true"
              ></iframe>
              <Button 
                variant='text' 
                startIcon={<InstagramIcon />} 
                className='App-ig-button' 
                href='https://www.instagram.com/habeebmh_/' 
                target='_blank' 
                rel='noopener noreferrer'
              >Instagram</Button>
            </div>
          </section>
          <section style={{ textAlign: 'center', marginTop: '20px' }}>
            <h2 style={{ color: 'white' }}>Contact</h2>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
              <Button 
                variant='text' 
                href='mailto:habeeb@hooshmandenterprises.com'
                startIcon={<EmailIcon />}
              >
                Email
              </Button>
            </div>
          </section>
        </article>
        <footer className='App-footer'>
          <hr style={{ width: '90%', margin: '20px auto', border: '1px solid grey' }} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '20px',
              padding: '20px',
              backgroundColor: 'rgba(0,0,0,.5)'
            }}
          >
            <Link href='https://www.instagram.com/habeebmh_/' target='_blank' rel='noopener noreferrer'>
              <InstagramIcon sx={{ fontSize: 40 }} />
            </Link>
            <Link href='https://www.mixcloud.com/habeebmh/' target='_blank' rel='noopener noreferrer'>
              <LibraryMusicIcon sx={{ fontSize: 40 }} />
            </Link>
          </Box>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default App
