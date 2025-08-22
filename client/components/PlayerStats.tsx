import { useClash } from '../hooks/useClash'
import { Card, ClashRoyale, Rarity } from '../../models/ClashRoyale'
import { useState } from 'react'

function PlayerStats() {
  const { data, isPending, isError } = useClash()

  const [searchTerm, setSearchTerm] = useState('')

  const [filteredResults, setFilteredResults] = useState([])

  if (isPending) {
    return <p>Loading Api data</p>
  } else if (isError) {
    return <p>There was an error..</p>
  }

  const rarityAdj = {
    common: 0,
    rare: 2,
    epic: 5,
    legendary: 8,
    champion: 10,
  }

  const maxLvlRarityAdj = {
    common: 1,
    rare: 3,
    epic: 6,
    legendary: 9,
    champion: 11,
  }

  function getCommonLevel(rarity: Rarity, level: number) {
    return level + (rarityAdj[rarity] || 0)
  }

  function getCommonMaxLevel(rarity: Rarity, maxLevel: number) {
    return maxLevel + (maxLvlRarityAdj[rarity] || 0)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const handleSearchClick = () => {
    // Only perform the search when the button is clicked
    const fixedCards = data.cards.map((card) => ({
      ...card,
      level: getCommonLevel(card.rarity, card.level),
      maxLevel: getCommonMaxLevel(card.rarity, card.maxLevel),
    }))

    const newFilteredResults: Card[] = fixedCards.filter((card) =>
      card.name.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    setFilteredResults(newFilteredResults)
  }

  const fixedCards = data.cards.map((card) => ({
    ...card,
    level: getCommonLevel(card.rarity, card.level),
    maxLevel: getCommonMaxLevel(card.rarity, card.maxLevel),
  }))

  return (
    <>
      <div style={{ width: '60%' }}>
        <h1 style={{ paddingLeft: '1.3em', paddingTop: '0.5em' }}>
          Player Stats
        </h1>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '3em',
            paddingTop: '2em',
          }}
        >
          <label
            style={{
              fontSize: 'large',
              textAlign: 'center',
              color: 'black',
              paddingRight: '1em',
              paddingLeft: '2.3em',
            }}
            htmlFor="input"
          >
            <strong>Input a card to search for...</strong>
          </label>
          <br></br>
          <input
            style={{
              border: '2px solid black',
              borderRadius: '5px',
              color: 'black',
              backgroundColor: 'white',
            }}
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button style={{ color: 'black' }} onClick={handleSearchClick}>
            Submit Search
          </button>
        </div>
        <div></div>
        <ul>
          {/* Display results only if `filteredResults` is not empty */}
          {filteredResults.length > 0 ? (
            filteredResults.map((item: any) => (
              <li key={item.id}>
                <h1>{item.name}</h1>
                <img
                  alt="card"
                  src={item.iconUrls.medium as string}
                  style={{ width: '4%' }}
                ></img>
                <h3>Level: {item.level}</h3>
                <h3>MaxLevel: {item.maxLevel}</h3>
                <h3>Rarity: {item.rarity}</h3>
                <h3>Elixir Cost: {item.elixirCost}</h3>
                {item.evolutionLevel == 1 ? (
                  <h3>Evo Level: {item.evolutionLevel}</h3>
                ) : (
                  <p></p>
                )}
              </li>
            ))
          ) : (
            // display message when search is empty
            <h1>Search for a card to see results...</h1>
          )}
        </ul>
      </div>
      <div
        style={{
          float: 'right',
          transform: 'translateY(-150px)',
          paddingRight: '1em',
        }}
      >
        <h1>Max Level Cards:</h1>
        {fixedCards.length > 0 ? (
          fixedCards.map((items) => (
            <ul key="items" style={{ transform: 'translateX(6em)' }}>
              {items.level == 15 ? (
                <>
                  <li>
                    <h3
                      style={{
                        backgroundColor: '#Add8E6',
                        width: 'fit-content',
                      }}
                    >
                      {items.name}
                    </h3>
                  </li>
                  <img
                    alt="maxlvlcards"
                    src={items.iconUrls.medium}
                    style={{ width: '20%' }}
                  ></img>
                </>
              ) : (
                <p></p>
              )}
            </ul>
          ))
        ) : (
          <p>error</p>
        )}
      </div>
    </>
  )
}

export default PlayerStats
