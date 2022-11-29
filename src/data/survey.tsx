export interface Survey {
    _id: string
    words: [{
        name: string,
        value: number,
        color: string
    },
        {
            name: string
            value: number
            color: string
        }]
}
