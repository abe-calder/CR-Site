import { Link, Outlet } from 'react-router'

function App() {
  return (
    <>
      <div className="navbar">
        <img className='CR-logo-img' alt="src" src="https://play-lh.googleusercontent.com/gnSC6s8-6Tjc4uhvDW7nfrSJxpbhllzYhgX8y374N1LYvWBStn2YhozS9XXaz1T_Pi2q"></img>
        <h1 className='CR-header'>CR Site</h1>
        <Link className='home-link' to={'/'}>Home</Link>
        <Link className='player-stats-link' to={'player-stats/:stats'}>Player Stats</Link>
        <Link className='deck-builder-link' to={'deck-builder/'}>Deck Builder</Link>
        <Link className='saved-decks-link' to={'saved-decks/'}>Saved Decks</Link>
      </div>
      <div className="app">
        <Outlet/>
      </div>
      <div className='app2'>
      </div>
    
    </>
  )
}

export default App
