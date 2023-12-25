import useGameState from '../hooks/useGameState'
import "../styles/EndingScreen.css"

export default function EndingScreen() {

    const { points, roundsLeft, isGameOver } = useGameState()

    const maxPoints = (points === 4)
    const outOfRounds = (roundsLeft === 0)

    if (!isGameOver) return null

    return (
        <div id='end-screen'>
            {maxPoints && <div>Excellent Work! </div>}
            {outOfRounds && <div>Sorry! Game Over! </div>}
            <button type='button' onClick={() => window.location.reload()}>Try Again?</button>
        </div>
    )
}
