import { useClash } from '../hooks/useClash'
function DeckBuilder() {
  const { data, isPending, isError } = useClash()

  function cardsByRarity() {
    data?.cards.filter((c) => {
      console.log(c.rarity == 'common' ? c.iconUrls.medium : '')
      return c.rarity == 'common' ? <p>{c.iconUrls.medium}</p> : null
    })
  }
  cardsByRarity()
  return (
    <>
      {/* {data?.cards.map((card) => {
      return (
        <>
          <img style={{width: '3%'}} key={card.id} alt={card.name} src={card.iconUrls.medium}></img>
        </>
      )  
    })} */}

      {/* {data?.cards.filter((c) => {
        console.log(c.rarity == 'common'? c.iconUrls.medium : '')
      return (
        <>
          {c.rarity == 'common' ? <img alt={c.name} src={c.iconUrls.medium}></img> : null}
        </>
    )
    })} */}
    </>
  )
}

export default DeckBuilder
