import type { Equal, Expect } from "../../utils"

type MyPick<T, K extends keyof T> = { [S in K] : T[S]}


interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}
