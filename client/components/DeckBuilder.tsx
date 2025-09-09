// import { useClash } from '../hooks/useClash'
import { RadioGroup } from 'radix-ui'

function DeckBuilder() {
  // const { data, isPending, isError } = useClash()

  // function cardsByRarity() {
  //   data?.cards.filter((c) => {
  //     console.log(c.rarity == 'common' ? c.iconUrls.medium : '')
  //     return c.rarity == 'common' ? <p>{c.iconUrls.medium}</p> : null
  //   })
  // }

  return (
    <>
      <div style={{ position: 'relative' }}>
        <div>
          <h1 className="contentStyl">Build A Deck </h1>
        </div>
        <div style={{ position: 'relative', width: 'fit-content', transform: 'translate(8vw, 8vh)' }}>
          <img
            style={{ width: '20vw', maxWidth: '30vw',  }}
            alt="deck"
            src="../data/images/empty_deck (1).webp"
          ></img>
        </div>

        <div>
         
        </div>

        <div style={{ position: 'relative', transform: 'translate(85vw, -60vh)' }}>
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
                >
                  <RadioGroup.Indicator className="RadioGroupIndicator" />
                </RadioGroup.Item>
                <label className="Label" htmlFor="r5">
                  Champion
                </label>
              </div>
            </RadioGroup.Root>
          </form>
        </div>
      </div>
    </>
  )
}

export default DeckBuilder
