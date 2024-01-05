import Cup from './components/Cup'
import Header from './components/Header'

function App() {
  return (
    <div>
      <Header />
      <div id="cups">
        <Cup />
        <Cup />
        <Cup />
      </div> 
    </div>
  )
}

export default App
