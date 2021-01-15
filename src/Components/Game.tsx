import { useState } from 'react'
import Board from './Board'

export default function Game() {
  const [squares, setSquares] = useState<any[]>(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)

  function handleClick(i: number) {
    if (calculateWinner(squares) || squares[i]) {
      return
    }

    const currentSquares = [...squares]

    currentSquares[i] = xIsNext ? 'X' : 'O'
    setSquares(currentSquares)
    setXIsNext(current => !current)
  }

  const winner = calculateWinner(squares)

  let status
  if (winner) {
    status = 'Winner: ' + winner
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O')
  }

  return (
    <div className='game'>
      <div className='game-board'>
        <Board squares={squares} onClick={i => handleClick(i)} />
      </div>
      <div className='game-info'>
        <div>{status}</div>
      </div>
    </div>
  )
}

function calculateWinner(squares: any[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (const line of lines) {
    const [a, b, c] = line

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }

  return null
}
