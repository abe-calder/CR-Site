import {
  useClash,
  useClashBattleLog,
  useClashLeaderboardLog,
} from '../hooks/useClash'
import { Card, Rarity } from '../../models/ClashRoyale'
import { SetStateAction, useState } from 'react'
import LoadingProgress from './LoadingBar'

function PlayerStats() {
  const { data, isPending, isError } = useClash()

  const {
    data: battleData,
    isPending: isPendingBattle,
    isError: isErrorBattle,
  } = useClashBattleLog()

  const {
    data: leaderboardData,
    isPending: isPendingLeaderboard,
    isError: isErrorLeaderboard,
  } = useClashLeaderboardLog()

  const [searchTerm, setSearchTerm] = useState('')

  const [filteredResults, setFilteredResults] = useState([])

  if (isPending) {
    return <LoadingProgress />
  } else if (isError) {
    return (
      <p style={{ backgroundColor: 'black', color: 'white' }}>
        Uh oh... There was an error with the PlayerStats data..
      </p>
    )
  }

  if (isPendingBattle) {
    return <LoadingProgress />
  } else if (isErrorBattle) {
    return (
      <p style={{ backgroundColor: 'black', color: 'white' }}>
        Uh oh... There was an error with the BattleLog data..
      </p>
    )
  }

  if (isPendingLeaderboard) {
    return <LoadingProgress />
  } else if (isErrorLeaderboard) {
    return (
      <p style={{ backgroundColor: 'black', color: 'white' }}>
        Uh oh... There was an error with the Leaderboard data..
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

    setFilteredResults(newFilteredResults as SetStateAction<never[]>)
  }

  const fixedCards = data.cards.map((card) => ({
    ...card,
    level: getCommonLevel(card.rarity, card.level),
    maxLevel: getCommonMaxLevel(card.rarity, card.maxLevel),
  }))

  const battleLog = battleData

  function battleLogStats() {
    let wins = 0
    let losses = 0
    for (let i = 0; i < 25; i++) {
      const match = battleLog[i]
      match.type == 'pathOfLegend'
        ? match.team.map((t: { trophyChange: number }) => {
            const tc = t.trophyChange
            if (tc <= 1) {
              wins += 1
            }
          })
        : null
      match.type == 'pathOfLegend'
        ? match.opponent.map((troph: { trophyChange: number }) => {
            const tc = troph.trophyChange
            if (tc <= 1) {
              losses += 1
            }
          })
        : null
    }
    return [[wins], [losses]]
  }

  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          width: '47%',
          maxWidth: '50vw',
          // overflow: 'hidden',
          position: 'relative',
        }}
      >
        <h1
          className="contentStyl"
          style={{
            transform: 'translate(1.8vw)',
          }}
        >
          Player Stats
        </h1>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '4vh',
            // width: '50%',
          }}
        >
          <label
            className="contentStyl"
            style={{
              fontSize: 'large',
              textAlign: 'center',
              color: 'black',
              transform: 'translate(-0.5vw, 2.5vh)',
              padding: '1vw 1vw 1vw 1vw',
            }}
            htmlFor="input"
          >
            <strong className="contentStyl">
              Input a card to search for...
            </strong>
          </label>
          <br></br>
          <input
            className="contentStyl"
            style={{
              border: '0.125vw',
              borderRadius: '0.6vh',
              color: 'black',
              transform: 'translate(-0.5vw, 2.5vh)',
              fontSize: '0.7vw',
            }}
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button
            className="contentStyl"
            style={{
              color: 'black',
              transform: 'translate(0.5vw, 2.5vh)',
              fontSize: '0.5vw',
            }}
            onClick={handleSearchClick}
          >
            Submit Search
          </button>
        </div>
        <div
          style={{
            position: 'relative',
            width: 'fit-content',
            transform: 'translate(0, 3vh)',
            height: '100%',
          }}
        >
          <ul style={{ width: 'fit-content' }}>
            {filteredResults.length > 0 ? (
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              filteredResults.map((item: any, i: number) => (
                <li key={item.name + String(i)}>
                  <h1 className="contentStyl">{item.name}</h1>
                  <img
                    alt="card"
                    src={item.iconUrls.medium as string}
                    style={{ width: '20%' }}
                  ></img>
                  <h3 style={{ color: '#363737' }} className="contentStyl">
                    <strong style={{ color: 'black' }}>Level: </strong>
                    {item.level}
                  </h3>
                  <h3 style={{ color: '#363737' }} className="contentStyl">
                    <strong style={{ color: 'black' }}>MaxLevel: </strong>
                    {item.maxLevel}
                  </h3>
                  <h3 style={{ color: '#363737' }} className="contentStyl">
                    <strong style={{ color: 'black' }}>Rarity: </strong>
                    {item.rarity}
                  </h3>
                  <h3 style={{ color: '#363737' }} className="contentStyl">
                    <strong style={{ color: 'black' }}>Elixir Cost: </strong>
                    {item.elixirCost}
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
              <h1
                style={{ transform: 'translateY(.5vh)' }}
                className="contentStyl"
              >
                Search for a card to see results...
              </h1>
            )}
          </ul>
        </div>
      </div>
      <div
        className="player-stats-max-level-cards"
        style={{
          float: 'right',
          position: 'absolute',
          right: '0.8vw',
          top: '6vh',
        }}
      >
        <h1 style={{ transform: 'translateX(2vw)' }} className="contentStyl">
          Max Level Cards:
        </h1>
        {fixedCards.length > 0 ? (
          fixedCards.map((maxTroops) => (
            <ul key={maxTroops.id} style={{ transform: 'translateX(3.25vw)' }}>
              {maxTroops.level == 15 ? (
                <>
                  <li>
                    <h3 className="contentStyl">{maxTroops.name}</h3>
                  </li>
                  <img
                    alt="maxlvlmaxTroops"
                    src={maxTroops.iconUrls.medium}
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
      <div
        className="player-stats-battle-log-data"
        style={{ position: 'absolute', left: '37.5vw', top: '6vh' }}
      >
        <h1 className="contentStyl">Battle Log Data</h1>
        <h3 className="contentStyl">
          Over my last 25 Battles, my win rate was{' '}
          {(battleLogStats()[0] as never) * 4}%
        </h3>
        <h3 className="contentStyl">
          Over my last 25 Battles, I won {battleLogStats()[0]} battles, and lost{' '}
          {battleLogStats()[1]}
        </h3>
      </div>
      <div
        className="player-stats-leaderboard"
        style={{
          position: 'absolute',
          right: '41.5vw',
          top: '30vh',
        }}
      >
        <h1 className="contentStyl">Leaderboard Top 10 Global</h1>
        {leaderboardData ? (
          leaderboardData.items.map((players) => {
            return (
              <>
                <h2 className="contentStyl" style={{ color: '#363737' }}>
                  <strong style={{ color: 'black' }}>Rank: </strong>
                  {players.rank}
                </h2>
                <h3 className="contentStyl" style={{ color: '#363737' }}>
                  <strong style={{ color: 'black' }}>Player Name: </strong>
                  {players.name}
                </h3>
                <h3 className="contentStyl" style={{ color: '#363737' }}>
                  <strong style={{ color: 'black' }}>Medals: </strong>
                  {players.score}
                </h3>
                <h3 className="contentStyl" style={{ color: '#363737' }}>
                  <strong style={{ color: 'black' }}>Clan: </strong>
                  {players.clan?.name}
                </h3>
                <br></br>
              </>
            )
          })
        ) : (
          <p></p>
        )}
      </div>
      <h1 style={{ transform: 'translate(0, 13vh)' }} className="contentStyl">
        Badges
      </h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 0.02fr)',
          width: 'fit-content',
          transform: 'translate(0, 13vh)',
        }}
      >
        {data.badges.length > 0 ? (
          data.badges.map((bm) => {
            return (
              <img
                style={{ width: '3vw' }}
                alt="badge"
                src={bm.iconUrls.large != undefined ? bm.iconUrls.large : ''}
                key={bm.name}
              ></img>
            )
          })
        ) : (
          <p></p>
        )}
      </div>
    </div>
  )
}

export default PlayerStats
