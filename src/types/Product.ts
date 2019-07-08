import { Action } from "redux"

export type Product = {
  id: number
  name: string
  price: number
  quantity: number
  status: boolean
}

type GetProductsPayload = Product[]

export type ProductAction = Action & {
  payload: GetProductsPayload
}
