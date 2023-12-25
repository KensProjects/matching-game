import { useMemo } from "react"

export default function useBoard() {

    const numsArr = useMemo(() => [1, 2, 3, 4], [])
    const boardRow = useMemo(() => numsArr, [numsArr])
    const boardColumns = useMemo(() => [...boardRow, ...boardRow], [boardRow])
    const board = useMemo(() => boardColumns.sort(() => 0.5 - Math.random()), [boardColumns])

    return { board }
}