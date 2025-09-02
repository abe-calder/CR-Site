import { Link, Outlet } from 'react-router';
import { useState } from 'react';

function App() {
  const [isActive, setIsActive] = useState(false);

  const toggleNav = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="navbar">
        <img className='CR-logo-img' alt="src" src="https://play-lh.googleusercontent.com/gnSC6s8-6Tjc4uhvDW7nfrSJxpbhllzYhgX8y374N1LYvWBStn2YhozS9XXaz1T_Pi2q"></img>
        <h1 className='CR-header'>CR Site</h1>
        <div className={`nav-links ${isActive ? 'active' : ''}`}>
          <Link className='nav-link home-link' to={'/'}>Home</Link>
          <Link className='nav-link player-stats-link' to={'player-stats/'}>Player Stats</Link>
          <Link className='nav-link deck-builder-link' to={'deck-builder/'}>Deck Builder</Link>
          <Link className='nav-link saved-decks-link' to={'saved-decks/'}>Saved Decks</Link>
        </div>
        <div className="hamburger" onClick={toggleNav}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default App
