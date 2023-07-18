export interface sponsoredsModel {
    id: number,
    name: string,
    birth: Date,
    description: string,
    imgs: string[]
}

export interface sponsoredsState {
    loading: boolean,
    sponsoredsList: ReadonlyArray<sponsoredsModel>
}
