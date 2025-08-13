import { useClash } from "../hooks/useClash"
import { Rarity } from "../../models/ClashRoyale"
// import { useParams } from "react-router"

function PlayerStats() {
  // const { stats } = useParams()
  const { data } = useClash()


  const rarityAdj = {
    common: 0,
    rare: 2,
    epic: 5,
    legendary: 8,
    champion: 10,
  }
  const cards = data?.cards.map((card) => {
    return { ...card, level: getCommonLevel(card.rarity, card.level) }
  })
  
  function getCommonLevel(rarity: Rarity, level: number) {
    return level + (rarityAdj[rarity] || 0)
  }
  console.log(data)
  return (
    <>
    <h1>Player Stats</h1>
      {cards?.map((cards) => {
            return (
              <li key={cards.name}>
                <img
                  style={{ width: '1.3%' }}
                  src={cards.iconUrls.medium}
                  alt={cards.name}
                ></img>{' '}
                {cards.name} / Level: {cards.level} / Rarity: {cards.rarity.charAt(0).toUpperCase() + cards.rarity.slice(1)}
              </li>
            )
          })}
    </>
  )
}

export default PlayerStats