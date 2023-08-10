export interface sponsoredsInterface {
    id: number,
    name: string,
    birth: Date,
    description: string,
    imgs: string[]
}

export interface sponsoredsState {
    loading: boolean,
    sponsoredsList: ReadonlyArray<sponsoredsInterface>,
    error: any
}
