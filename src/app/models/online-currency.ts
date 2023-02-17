import { Motd } from "./motd"

export interface OnlineCurrency {
    base: string,
    date: string,
    motd: Motd,
    rates: {
        UAH: number
    },
    success: boolean
}
