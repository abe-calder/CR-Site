import { useParams } from 'react-router'
import { useNavigate } from 'react-router'
import { useClash } from '../hooks/useClash'

export default function DeckBuilderCardDisplay() {
  const { raritySelect } = useParams<{ raritySelect: string }>()
  const navigate = useNavigate()
  const { data, isPending, isError } = useClash()

  if (isPending) {
    return <p>Loading Cards...</p>
  }
  if (isError) {
    return <p>There was an error loading cards...</p>
  }

  const cards = data.cards

  function cardDisplay(raritySelect: string) {
    const adaptiveCards = cards.filter((rarity) => rarity.rarity == raritySelect)
    {
      raritySelect == raritySelect ? (
        adaptiveCards &&
        adaptiveCards.map((card) => {
          return (
            <div key={card.id}>
              <img
                alt="cards"
                style={{ width: '3vw' }}
                src={card.iconUrls.medium}
              ></img>
            </div>
          )
        })
      ) : (
        <p></p>
      )
    }
  }

  return ( 
  <>
    {cardDisplay(raritySelect)}
  
  </>
  )
}
