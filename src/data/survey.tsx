export interface Survey {
    _id: string
    category: string
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


