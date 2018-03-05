import {TypedArray} from "../types"

export function concat<T extends TypedArray>(a: T, b: T): T {
  const c = new ((a as any).constructor)(a.length + b.length)
  c.set(a, 0)
  c.set(b, a.length)
  return c
}
