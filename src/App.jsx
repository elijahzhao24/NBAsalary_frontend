import { BrowserRouter as Router } from 'react-router-dom'
import Grid from './Grid'
import Header from './Header'
import Player from './Player'
function App() {
  return (
    <Router>
      <div style={{minHeight: '100vh', width: '100%', position: 'relative'}}>
        <Header />
        <Grid />
        <Player name="LeBron James" salary={100000000} image="https://oeqdkjiqevwwcbopbovz.supabase.co/storage/v1/object/public/player-headshots/headshots/2257.jpg" />

      </div>
    </Router>
  )
}

export default App
