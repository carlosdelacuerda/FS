export interface SponsorInterface {
    id: number,
    validated: boolean,
    name: string,
    img: string,
    favorites: number[]
}

export interface SponsorState {
    sponsor: SponsorInterface,
    error?: any,
    logged?: boolean
}

