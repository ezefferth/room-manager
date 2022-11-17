
//mimport './App.css'
import styles from './app.module.scss'

import Room from "./components/room"

import { SalasContext } from './components/data/salas'
import { useContext } from "react"

function App() {

  const { salas } = useContext(SalasContext)

  /*   function test() {
      console.log(salas)
    } */

  return (
    <div className={styles.div}>
      {/* <button onClick={() => test()}>Test</button> */}
      {
        salas.map((sala) => {
          //console.log(sala.nome)
          return <Room sala={sala} />
        })
      }
    </div>
  )
}

export default App
