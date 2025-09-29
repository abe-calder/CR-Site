import { Link, Outlet } from 'react-router';
import { useState } from 'react';
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'
import { useAuth0 } from '@auth0/auth0-react'
import { useUser } from '../hooks/useUsers.ts';

function App() {
  const [isActive, setIsActive] = useState(false)
  const { logout, loginWithRedirect, user } = useAuth0()
  const { data: userData } = useUser()
 

  const toggleNav = () => {
    setIsActive(!isActive)
  };


  const handleSignOut = () => {
    logout()
  }

  const handleSignIn = () => {
    loginWithRedirect({
      authorizationParams: {
        redirectUri: `${window.location.origin}/register`
      },
    })
  }

  return (
    <>
      <div className="navbar">
        <img className='CR-logo-img' alt="src" src="https://play-lh.googleusercontent.com/gnSC6s8-6Tjc4uhvDW7nfrSJxpbhllzYhgX8y374N1LYvWBStn2YhozS9XXaz1T_Pi2q"></img>
        <h1 className='CR-header'>CR Site</h1>
        <div className={`nav-links ${isActive ? 'active' : ''}`}>
          <Link className='nav-link home-link' to={'/'}>Home</Link>
          <Link className='nav-link player-stats-link' to={'player-stats/'}>Player Stats</Link>
          <Link className='nav-link deck-builder-link' to={`deck-builder/`}>Deck Builder</Link>
          <IfAuthenticated>
          <button style={{border: 'none'}} className='nav-link' onClick={handleSignOut}>Sign out</button>
          <div className='info-container'>{user && <p className='link-info' style={{}}>Signed in as: {user?.nickname}</p>}
            <p className='link-info' style={{}}>PlayerTag: {userData?.playerTag}</p></div>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <button style={{border: 'none'}} className='nav-link' onClick={handleSignIn}>Sign in</button>
        </IfNotAuthenticated>
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