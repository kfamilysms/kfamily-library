export type IPlan = {
  id?: string

  name?: string
  description?: string

  price?: number

  restrictions?: {
    familiesLimit?: number
    functionNumbersLimit?: number
  }
}
