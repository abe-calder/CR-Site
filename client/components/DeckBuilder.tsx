import { RadioGroup } from 'radix-ui'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router'
import DeckBuilderCardDisplay from './DeckBuilderCardDisplay'

function DeckBuilder() {
  const { raritySelect } = useParams<{ raritySelect: string }>()
  const navigate = useNavigate()
  // const { data, isPending, isError } = useClash()

  const handleRarityAdjust = (raritySelect: string) => {
    navigate(`/deckbuilder/${raritySelect}`)
  }

  // if (isPending) {
  //   return <p>Loading Cards...</p>
  // }
  // if (isError) {
  //   return <p>There was an error loading cards...</p>
  // }

  // const cards = data.cards

  // function commonDisplay() {
  //   const commonCards = cards.filter((rarity) => rarity.rarity == 'common')
  //   {
  //     raritySelect == 'common' ? (
  //       commonCards &&
  //       commonCards.map((card) => {
  //         return (
  //           <div key={card.id}>
  //             <img
  //               alt="common-cards"
  //               style={{ width: '3vw' }}
  //               src={card.iconUrls.medium}
  //             ></img>
  //           </div>
  //         )
  //       })
  //     ) : (
  //       <p></p>
  //     )
  //   }
  // }

  // const rareCards = cards.filter((rarity) => rarity.rarity == 'rare')
  // const epicCards = cards.filter((rarity) => rarity.rarity == 'epic')
  // const legendaryCards = cards.filter((rarity) => rarity.rarity == 'legendary')
  // const championCards = cards.filter((rarity) => rarity.rarity == 'champion')

  return (
    <>
      <div style={{ position: 'relative' }}>
        <div>
          <h1 className="contentStyl">Build A Deck </h1>
        </div>
        <div
          style={{
            position: 'relative',
            width: 'fit-content',
            transform: 'translate(8vw, 8vh)',
          }}
        >
          <img
            style={{ width: '20vw', maxWidth: '30vw' }}
            alt="deck"
            src="../data/images/empty_deck (1).webp"
          ></img>
        </div>

        <div></div>

        <div
          style={{ position: 'relative', transform: 'translate(85vw, -60vh)' }}
        >
          <h1 className="contentStyl">Rarity</h1>
          <form>
            <RadioGroup.Root
              className="RadioGroupRoot"
              defaultValue="common"
              aria-label="View density"
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <RadioGroup.Item
                  className="RadioGroupItem"
                  value="common"
                  id="r1"
                  onClick={() => handleRarityAdjust('common')}
                >
                  <RadioGroup.Indicator className="RadioGroupIndicator" />
                </RadioGroup.Item>
                <label className="Label" htmlFor="r1">
                  Common
                </label>
              </div>

              <div style={{ display: 'flex', alignItems: 'center' }}>
                <RadioGroup.Item
                  className="RadioGroupItem"
                  value="rare"
                  id="r2"
                  onClick={() => handleRarityAdjust('rare')}
                >
                  <RadioGroup.Indicator className="RadioGroupIndicator" />
                </RadioGroup.Item>
                <label className="Label" htmlFor="r2">
                  Rare
                </label>
              </div>

              <div style={{ display: 'flex', alignItems: 'center' }}>
                <RadioGroup.Item
                  className="RadioGroupItem"
                  value="epic"
                  id="r3"
                  onClick={() => handleRarityAdjust('epic')}
                >
                  <RadioGroup.Indicator className="RadioGroupIndicator" />
                </RadioGroup.Item>
                <label className="Label" htmlFor="r3">
                  Epic
                </label>
              </div>

              <div style={{ display: 'flex', alignItems: 'center' }}>
                <RadioGroup.Item
                  className="RadioGroupItem"
                  value="legendary"
                  id="r4"
                  onClick={() => handleRarityAdjust('legendary')}
                >
                  <RadioGroup.Indicator className="RadioGroupIndicator" />
                </RadioGroup.Item>
                <label className="Label" htmlFor="r4">
                  Legendary
                </label>
              </div>

              <div style={{ display: 'flex', alignItems: 'center' }}>
                <RadioGroup.Item
                  className="RadioGroupItem"
                  value="champion"
                  id="r5"
                  onClick={() => handleRarityAdjust('champion')}
                >
                  <RadioGroup.Indicator className="RadioGroupIndicator" />
                </RadioGroup.Item>
                <label className="Label" htmlFor="r5">
                  Champion
                </label>
              </div>
            </RadioGroup.Root>
          </form>
          <div>
            <DeckBuilderCardDisplay />
          </div>
        </div>
      </div>
    </>
  )
}

export default DeckBuilder
