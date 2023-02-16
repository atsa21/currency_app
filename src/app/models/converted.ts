import { Motd } from "./motd"
import { Rates } from "./rates"

export interface Converted {
    base: string,
    date: string,
    motd: Motd,
    rates: Rates,
    success: boolean
}
