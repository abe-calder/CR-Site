import { RadioGroup } from 'radix-ui'
import DeckBuilderCardDisplay from './DeckBuilderCardDisplay'
import { useState } from 'react'

function DeckBuilder() {
  const [cardRarity, setCardRarity] = useState('common')

  const handleRarityAdjust = (rarityC: string) => {
    setCardRarity(rarityC)
  }

  return (
    <>
      <div style={{ position: 'relative', height: '100vh' }}>
        <div>
          <h1 className="contentStyl">Build A Deck </h1>
        </div>
        <div
          style={{
            position: 'absolute',
            width: '20vw',
            transform: 'translate(8vw, 5vh)',
          }}
        >
          <img style={{width: '20vw', position: 'relative'}} src="/images/IMG_1672.jpg" alt="empty-deck"></img>
        </div>
        <div
          style={{
            position: 'absolute',
            transform: 'translate(85vw, 5vh)',
            height: '100vh',
          }}
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
            <DeckBuilderCardDisplay
              cardRarity={cardRarity}
              setCardRarity={setCardRarity}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default DeckBuilder
