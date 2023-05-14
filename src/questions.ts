interface Question {
    id: number,
    title: string,
    answer: string,
    options: Array<string>
}

export const questions: Array<Question> = [
    {
        id:1,
        title: 'Отношение прилежащего катета в противолежащему',
        answer: 'косинус',
        options: ["косинус", "синус", "тангенс", "котангенс"]
    },
    {
        id:2,
        title: 'Отношение прилежащего катета в противолежащему',
        answer: 'косинус',
        options: ["косинус", "синус", "тангенс", "котангенс"]
    },
    {
        id:3,
        title: 'Отношение прилежащего катета в противолежащему',
        answer: 'косинус',
        options: ["косинус", "синус", "тангенс", "котангенс"]
    },
]