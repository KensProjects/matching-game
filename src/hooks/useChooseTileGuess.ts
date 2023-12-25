import useGameState from "./useGameState"

export default function useChooseTileGuess() {

    const { currentGuessesArray, correctGuessesArray, setSelectedBoardTileIndex, setCurrentGuessesArray } = useGameState()

    function chooseTileGuess(idx: number) {
        const alreadyChosen = currentGuessesArray.includes(idx)
        const alreadyCorrect = correctGuessesArray.includes(idx)
        const maxGuesses = currentGuessesArray.length === 2

        const active = (alreadyChosen || alreadyCorrect || maxGuesses)

        if (active) {
            return
        } else {
            setSelectedBoardTileIndex(idx)
            setCurrentGuessesArray()
        }

    }
    return { chooseTileGuess }
}
