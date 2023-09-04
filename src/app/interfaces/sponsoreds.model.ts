export interface SponsoredsInterface {
    id: number,
    name: string,
    birth: Date,
    description: string,
    imgs: string[]
}

export interface sponsoredsState {
    loading: boolean,
    sponsoredsList: ReadonlyArray<SponsoredsInterface>,
    error: any
}
