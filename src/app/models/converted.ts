import { Motd } from "./motd"

export interface Converted {
    base: string,
    date: string,
    motd: Motd,
    rates: string,
    success: boolean
}
