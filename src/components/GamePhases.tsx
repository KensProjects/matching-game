import useGameState from "../hooks/useGameState"
import GameScreen from "./GameScreen"
import EndingScreen from "./EndingScreen"

export default function GamePhases() {
    const { isGameOver } = useGameState()

    return (
        <>
            {isGameOver ? <EndingScreen /> : <GameScreen />}
        </>
    )
}
