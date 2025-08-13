import { useClash } from '../hooks/useClash'
import { Link } from 'react-router'

function App() {
  const { data } = useClash()


  // const rarityAdj = {
  //   common: 0,
  //   rare: 2,
  //   epic: 5,
  //   legendary: 8,
  //   champion: 10,
  // }
  // const card = data?.cards.map((card) => {
  //   return { ...card, level: getCommonLevel(card.rarity, card.level) }
  // })
  
  // function getCommonLevel(rarity: Rarity, level: number) {
  //   return level + (rarityAdj[rarity] || 0)
  // }
  return (
    <>
      <div className="navbar">
        <img className='CR-logo-img' alt="src" src="https://play-lh.googleusercontent.com/gnSC6s8-6Tjc4uhvDW7nfrSJxpbhllzYhgX8y374N1LYvWBStn2YhozS9XXaz1T_Pi2q"></img>
        <h1 className='CR-header'>CR Site</h1>
        <Link className='player-stats-link' to={'player-stats/'}>Player Stats</Link>
      </div>
      <div className="app">
      </div>
      <div className='app2'>
      </div>
    
    </>
  )
}

export default App
