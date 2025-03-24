import React from 'react';

const Home = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      margin: 0,
      padding: 0,
    },
    title: {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: '2.8rem',
      fontWeight: '700',
      background: 'linear-gradient(45deg, #8A2387, #E94057, #F27121)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'center',
      margin: 0,
      textShadow: '0px 2px 5px rgba(0,0,0,0.1)',
      letterSpacing: '0.5px',
      padding: '20px',
      position: 'relative'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to the Home Page</h1>
    </div>
  );
};

export default Home;