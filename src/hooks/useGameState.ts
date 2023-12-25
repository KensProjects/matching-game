import { type MatchingGameStoreTypes, matchingGameStore } from "../store"

export default function useGameState() {

    const points = matchingGameStore((state: MatchingGameStoreTypes) => state.points)
    const roundsLeft = matchingGameStore((state: MatchingGameStoreTypes) => state.roundsLeft)
    const isGameOver = matchingGameStore((state: MatchingGameStoreTypes) => state.isGameOver)
    const selectedBoardTileIndex = matchingGameStore((state: MatchingGameStoreTypes) => state.selectedBoardTileIndex)
    const currentGuessesArray = matchingGameStore((state: MatchingGameStoreTypes) => state.currentGuessesArray)
    const correctGuessesArray = matchingGameStore((state: MatchingGameStoreTypes) => state.correctGuessesArray)

    const setSelectedBoardTileIndex = matchingGameStore((state: MatchingGameStoreTypes) => state.setSelectedBoardTileIndex)
    const setCorrectGuessesArray = matchingGameStore((state: MatchingGameStoreTypes) => state.setCorrectGuessesArray)
    const setCurrentGuessesArray = matchingGameStore((state: MatchingGameStoreTypes) => state.setCurrentGuessesArray)
    const resetSelectedBoardTileIndex = matchingGameStore((state: MatchingGameStoreTypes) => state.resetSelectedBoardTileIndex)
    const resetGuessesArray = matchingGameStore((state: MatchingGameStoreTypes) => state.resetGuessesArray)
    const increasePoints = matchingGameStore((state: MatchingGameStoreTypes) => state.increasePoints)
    const decreaseRoundsLeft = matchingGameStore((state: MatchingGameStoreTypes) => state.decreaseRoundsLeft)
    const resetPoints = matchingGameStore((state: MatchingGameStoreTypes) => state.resetPoints)
    const tileIsSelected = matchingGameStore((state: MatchingGameStoreTypes) => state.tileIsSelected)
    const setTileIsSelected = matchingGameStore((state: MatchingGameStoreTypes) => state.tileIsSelected)

    return { points, roundsLeft, isGameOver, selectedBoardTileIndex, currentGuessesArray,correctGuessesArray,tileIsSelected, setSelectedBoardTileIndex, setCurrentGuessesArray,setCorrectGuessesArray,resetSelectedBoardTileIndex,resetGuessesArray, increasePoints, resetPoints, decreaseRoundsLeft,setTileIsSelected }
}
