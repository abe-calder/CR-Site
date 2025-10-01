import { useClash } from '../hooks/useClash'
import DraggableCard from './DraggableCard'

interface Props {
  cardRarity: string
  setCardRarity: React.Dispatch<React.SetStateAction<string>>
}

export default function DeckBuilderCardDisplay({
  cardRarity,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setCardRarity,
}: Props) {
  const { data, isPending, isError } = useClash()

  if (isPending) {
    return <p>Loading Cards...</p>
  }
  if (isError) {
    return <p>There was an error loading cards...</p>
  }

  const cards = data.cards

  function handleCardDisplay(rarityLevel: string) {
    const adaptiveCards = cards.filter((rarity) => rarity.rarity == cardRarity)
    const displayCards =
      rarityLevel == cardRarity
        ? adaptiveCards &&
          adaptiveCards.map((card) => {
            return (
              <div key={card.id}>
                <div className="adaptive-cards">
                  <DraggableCard imageUrl={card.iconUrls.medium} />
                </div>
              </div>
            )
          })
        : undefined
    return displayCards
  }

  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 0.1fr)', width: '50vw', height: '70vh', position: 'absolute' }}>
        {cards && handleCardDisplay(cardRarity)}
      </div>
    </>
  )
}
