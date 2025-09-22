import { useClash } from '../hooks/useClash'

interface Props {
  cardRarity: string
  setCardRarity: React.Dispatch<React.SetStateAction<string>>
}

export default function DeckBuilderCardDisplay({ cardRarity, setCardRarity }: Props) {
  const { data, isPending, isError } = useClash()

  // console.log(cardRarity)

  if (isPending) {
    return <p>Loading Cards...</p>
  }
  if (isError) {
    return <p>There was an error loading cards...</p>
  }

  const cards = data.cards

  function hnadleCardDisplay() {
    const adaptiveCards = cards.filter((rarity) => rarity.rarity == cardRarity)
  }

  return <></>
}
