import firebase from 'firebase/app'
import 'firebase/firestore'
import { useState } from 'react'
import { Game } from '../types'

export default function Menu() {
  const [nama, setNama] = useState('')
  const [gameCode, setGameCode] = useState('')

  function checkName() {
    if (!nama) throw Error('Nama ga boleh kosong.')
  }

  async function createGame() {
    try {
      checkName()

      const newGame: Game = {
        squares: Array(9).fill(null),
        xIsNext: Math.random() < 0.5,
        player1: nama,
      }

      const docRef = await firebase.firestore().collection('games').add(newGame)
      console.log(docRef.id)
    } catch (error) {
      console.error(error.message)
    }
  }

  async function joinGame(id: string) {
    try {
      checkName()

      await firebase.firestore().collection('games').doc(id).update({
        player2: nama,
      })
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <div>
      <input
        type='text'
        placeholder='Nama siapa wei'
        value={nama}
        onChange={e => setNama(e.target.value)}
      />

      <button onClick={createGame}>Main sini bikin room</button>
      <p>Atau masuk room orang:</p>

      <form
        onSubmit={e => {
          e.preventDefault()
          joinGame(gameCode)
        }}
      >
        <input
          type='text'
          placeholder='Kode masukin'
          value={gameCode}
          onChange={e => setGameCode(e.target.value)}
        />
        <button>Join</button>
      </form>
    </div>
  )
}
