import { create } from "zustand";

export type MatchingGameStoreTypes = {
    points: number,
    roundsLeft: number,
    isGameOver: boolean,
    selectedBoardTileIndex: number | undefined,
    currentGuessesArray: number[],
    correctGuessesArray: number[],
    setSelectedBoardTileIndex: (idx: number) => void,
    setCurrentGuessesArray: () => void,
    setCorrectGuessesArray: () => void,
    increasePoints: () => void,
    resetPoints: () => void,
    decreaseRoundsLeft: () => void,
    resetSelectedBoardTileIndex: () => void,
    resetGuessesArray: () => void,
    tileIsSelected: boolean,
    setTileIsSelected: () => void
}

export const matchingGameStore = create<MatchingGameStoreTypes>()((set, get) => ({
    points: 0,
    roundsLeft: 3,
    isGameOver: false,
    selectedBoardTileIndex: undefined,
    currentGuessesArray: [],
    correctGuessesArray: [],

    setCorrectGuessesArray: () => {
        const currentGuesses = get().currentGuessesArray
        set((state) => ({ ...state, correctGuessesArray: [...state.correctGuessesArray, currentGuesses].flat() }))
    },

    setSelectedBoardTileIndex: (idx: number) => set({ selectedBoardTileIndex: idx }),
    setCurrentGuessesArray: () => {
        set((state) => ({ currentGuessesArray: [...state.currentGuessesArray, state.selectedBoardTileIndex!] }))
    },
    resetSelectedBoardTileIndex: () => {
        set({ selectedBoardTileIndex: undefined })
    },
    resetGuessesArray: () => {
        set({ currentGuessesArray: [] })

    },
    increasePoints: () => {
        set((state) => ({ points: state.points + 1 }))
        const points = get().points
        if (points === 4) {

            setTimeout(() => {
                set({ isGameOver: true })
            }, 1000)
        }
    },
    resetPoints: () => set({ points: 0 }),
    decreaseRoundsLeft: () => {

        set((state) => ({ roundsLeft: state.roundsLeft - 1 }))
        const roundsLeft = get().roundsLeft
        if (roundsLeft === 0) {
            set({ isGameOver: true })
        }
    },
    tileIsSelected: false,
    setTileIsSelected: () => set((state) => ({ tileIsSelected: !state.tileIsSelected }))

}))