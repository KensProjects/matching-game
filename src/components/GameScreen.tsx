import { useEffect } from 'react'
import useGameState from '../hooks/useGameState'
import useChooseTileGuess from '../hooks/useChooseTileGuess'
import "../styles/GameScreen.css"
import useBoard from '../hooks/useBoard'

export default function GameScreen() {

    const { board } = useBoard()

    const { points, roundsLeft, selectedBoardTileIndex, currentGuessesArray, correctGuessesArray, increasePoints, setCorrectGuessesArray, decreaseRoundsLeft, resetGuessesArray } = useGameState()

    const { chooseTileGuess } = useChooseTileGuess()

    useEffect(() => {
        const maximumGuessesPerRound = 2

        const currentGuessesMatch = currentGuessesArray.every((guess) => {
            const referenceIndex = board[currentGuessesArray[0]]
            const allIndexes = board[guess]
            const allGuessesMatch = (referenceIndex === allIndexes)
            return allGuessesMatch
        })

        const guessesArrayLength = currentGuessesArray.length
        const twoGuessesWereMade = (guessesArrayLength === maximumGuessesPerRound)

        if (!twoGuessesWereMade) return
        setTimeout(() => {

            if (currentGuessesMatch) {
                increasePoints()
                setCorrectGuessesArray()
            } else {
                decreaseRoundsLeft()
            }
            resetGuessesArray()
        }, 1000)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedBoardTileIndex, currentGuessesArray])

    return (
        <div className="window">

            <span className='game-info'>Points: {points}</span>
            <span className='game-info'>Rounds: {roundsLeft}</span>

            <ul className='game-board'>
                {board.map((tile, idx) => {
                    const test = currentGuessesArray.includes(idx)
                    const correct = correctGuessesArray.includes(idx)

                    return (
                        <li onClick={() => chooseTileGuess(idx)} className={`tile ${test ? "selected" : ""}${correct ? "correct" : ""}`}
                            key={idx}>
                            {tile}
                        </li>
                    )
                })}

            </ul>
        </div>

    )
}