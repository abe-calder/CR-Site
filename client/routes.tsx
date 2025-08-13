/* eslint-disable react/jsx-key */
import { createRoutesFromElements, Route } from 'react-router'
import App from './components/App'
import Home from './components/Home'
import PlayerStats from './components/PlayerStats'

const routes = createRoutesFromElements(
  <Route path='/' element={<App />}>
    <Route index element={<Home/>} />
    <Route path='player-stats/' element={<PlayerStats/>}/>
  </Route>
)

export default routes