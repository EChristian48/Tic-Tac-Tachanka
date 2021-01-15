export type SquareProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  value: string
}

export default function Square({ onClick, value }: SquareProps) {
  return (
    <button className='square' onClick={onClick}>
      {value}
    </button>
  )
}
