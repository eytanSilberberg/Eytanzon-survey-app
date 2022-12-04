export interface Survey {
    _id: string
    category: string
    words: [Words, Words]
}


export interface Words {
    name: string,
    value: number,
    color: string
}