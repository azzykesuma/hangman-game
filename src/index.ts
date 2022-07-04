import { questions } from './question.js'

// registering clicks
const wordsWrapper = document.querySelector('.wordsWrapper')
let answerForm = document.getElementById('answer__form') as HTMLInputElement

wordsWrapper?.addEventListener('click', e => {
    const target = e.target as HTMLButtonElement | null;
    if(target) {
        
    }
})