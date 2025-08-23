import { useClash, useClashBattleLog } from '../hooks/useClash'
import { Card, Rarity } from '../../models/ClashRoyale'
import { useState } from 'react'
import LoadingProgress from './LoadingBar'

function PlayerStats() {
  const { data, isPending, isError } = useClash()

  const {
    data: battleData,
    isPending: isPendingBattle,
    isError: isErrorBattle,
  } = useClashBattleLog()

  const [searchTerm, setSearchTerm] = useState('')

  const [filteredResults, setFilteredResults] = useState([])

  if (isPending) {
    return <LoadingProgress />
  } else if (isError) {
    return (
      <p style={{ backgroundColor: 'black' }}>
        Uh oh... There was an error with the PlayerStats data..
      </p>
    )
  }

  if (isPendingBattle) {
    return <LoadingProgress />
  } else if (isErrorBattle) {
    return (
      <p style={{ backgroundColor: 'black' }}>
        Uh oh... There was an error with the BattleLog data..
      </p>
    )
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

  const battleLog = battleData

  function help() {
    let wins = 0
    let losses = 0
    for (let i = 0; i < 25; i++) {
      const match = battleLog[i]
      match.team.map((tt: { trophyChange: number }) => {
        const tc = tt.trophyChange
        if (tc < 0) {
          losses += 1
        } else {
          wins += 1
        }
      })
    }
    return [[wins], [losses]]
  }
  const last25BattlesResult = help()

  return (
    <>
      <div style={{ width: '60%', overflow: 'hidden', position: 'relative' }}>
        <h1
          className="contentStyl"
          style={{
            transform: 'translateX(40px)',
          }}
        >
          Player Stats
        </h1>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '3em',
            width: '50%',
          }}
        >
          <label
            style={{
              fontSize: 'large',
              textAlign: 'center',
              color: 'black',
              transform: 'translateX(40px)',
              backgroundColor: 'rgba(173, 216, 230, 0.5)',
              width: 'fit-content',
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
              transform: 'translateX(45px)',
              backgroundColor: 'rgba(173, 216, 230, 0.5)',
              width: 'fit-content',
            }}
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button
            className="contentStyl"
            style={{
              color: 'black',
              transform: 'translateX(50px)',
            }}
            onClick={handleSearchClick}
          >
            Submit Search
          </button>
        </div>
        <div>
          <ul>
            {/* Display results only if `filteredResults` is not empty */}
            {filteredResults.length > 0 ? (
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              filteredResults.map((item: any) => (
                <li key={item.id}>
                  <h1 className="contentStyl">{item.name}</h1>
                  <img
                    alt="card"
                    src={item.iconUrls.medium as string}
                    style={{ width: '4%' }}
                  ></img>
                  <h3 className="contentStyl">Level: {item.level}</h3>
                  <h3 className="contentStyl">MaxLevel: {item.maxLevel}</h3>
                  <h3 className="contentStyl">Rarity: {item.rarity}</h3>
                  <h3 className="contentStyl">
                    Elixir Cost: {item.elixirCost}
                  </h3>
                  {item.evolutionLevel == 1 ? (
                    <h3 className="contentStyl">
                      Evo Level: {item.evolutionLevel}
                    </h3>
                  ) : (
                    <p></p>
                  )}
                </li>
              ))
            ) : (
              // display message when search is empty
              <h1 className="contentStyl">
                Search for a card to see results...
              </h1>
            )}
          </ul>
        </div>
      </div>
      <div
        style={{
          float: 'right',
          position: 'absolute',
          right: '5px',
          top: '200px',
        }}
      >
        <h1 className="contentStyl">Max Level Cards:</h1>
        {fixedCards.length > 0 ? (
          fixedCards.map((items) => (
            <ul key="items" style={{ transform: 'translateX(6em)' }}>
              {items.level == 15 ? (
                <>
                  <li>
                    <h3 className="contentStyl">{items.name}</h3>
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
      <div style={{ position: 'absolute', right: '50em', top: '200px' }}>
        <h1 className="contentStyl">Battle Log Data</h1>
        <h3 className="contentStyl">
          Over my last 25 Battles, my win rate was{' '}
          {String(last25BattlesResult[0] * 4)}%
        </h3>
        <h3 className="contentStyl">
          Over my last 25 Battles, I won {last25BattlesResult[0]} battles, and
          lost {last25BattlesResult[1]}
        </h3>
      </div>
    </>
  )
}

export default PlayerStats
