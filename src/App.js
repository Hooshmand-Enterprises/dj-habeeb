import React from 'react'
import { Box, Button, Link } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import EmailIcon from '@mui/icons-material/Email';
import CloudIcon from '@mui/icons-material/Cloud';
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
              height: '96vh',
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
          <hr />
          <LatestRelease />
          <hr />
          <Instagram />
          <hr />
          <Contact />
          <hr />
        </article>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

const LatestRelease = () => (
  <section style={{ textAlign: 'center' }}>
    <h2 style={{ color: 'white' }}>Latest releases</h2>
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', marginBottom: '16px' }}>
      <iframe 
        title="Latest Release" 
        width="100%" 
        height="300" 
        scrolling="no" 
        frameBorder="no" 
        allow="autoplay" 
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1962120063&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
      <iframe 
        title="Latest Sets" 
        width="100%" 
        height="300" 
        scrolling="no" 
        frameBorder="no" 
        allow="autoplay" 
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1941877247&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
      </iframe>
      <Button 
        variant='text' 
        href='https://soundcloud.com/iamhabeeb' 
        target='_blank' 
        rel='noopener noreferrer'
        startIcon={<CloudIcon />}
      >
        SoundCloud
      </Button>
    </div>
  </section>
)

const Instagram = () => (
  <section style={{ textAlign: 'center' }}>
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
)

const Contact = () => (
  <section style={{ textAlign: 'center' }}>
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
)

const Footer = () => (
  <footer className='App-footer'>
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
)

export default App
