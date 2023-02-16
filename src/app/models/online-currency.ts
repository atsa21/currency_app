import { Motd } from "./motd"
import { Rates } from "./rates"

export interface OnlineCurrency {
    base: string,
    date: string,
    motd: Motd,
    rates: Rates,
    success: boolean
}
