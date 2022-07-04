interface QuestionsModel {
    id : number
    questions : string
    answer : string
}

export const questions : QuestionsModel[] = [
    {
        id : 1,
        questions : 'Apakah hewan terbesar di dunia?',
        answer : 'ikan paus'
    },
    {
        id : 2,
        questions : 'Apakah ibukota negara Prancis?',
        answer : 'Paris'
    },
    {
        id : 3,
        questions : 'Candi terbesar di Indonesia?',
        answer : 'Borobodur'
    },
]
