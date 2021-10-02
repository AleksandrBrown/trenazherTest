//questions tabs
const tabQuestions = document.querySelector('.tab-m-q')
const contentArrQuestions = [...document.querySelectorAll('.tab-c-q')]
tabQuestions.addEventListener('change', () => {
    contentArrQuestions.forEach(i => {
    	if(i.classList.contains(`${tabQuestions.value}`)) {
    		contentArrQuestions.forEach(i => i.classList.remove('uk-active'))
    		i.classList.add('uk-active')
    	}
    })
})