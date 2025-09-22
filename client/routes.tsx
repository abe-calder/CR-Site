/* eslint-disable react/jsx-key */
import { createRoutesFromElements, Route } from 'react-router'
import App from './components/App'
import Home from './components/Home'
import PlayerStats from './components/PlayerStats'
import SavedDecks from './components/SavedDecks'
import DeckBuilder from './components/DeckBuilder'
import Register from './components/Register'

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path='register' element={<Register />} />
    <Route path="player-stats/" element={<PlayerStats />} />
    <Route path="deck-builder/" element={<DeckBuilder />} />
    <Route path="saved-decks/" element={<SavedDecks />} />
  </Route>
)

export default routes
