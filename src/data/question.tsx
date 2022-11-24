export interface Question {
    _id: string,
    answerValue: number
    character: string
    questions: { en: string, he: string }
    category: string
    direction: string
}