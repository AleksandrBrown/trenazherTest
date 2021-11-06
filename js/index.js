let db = []
fetch('https://raw.githubusercontent.com/AleksandrBrown/telPlaginData/main/countries.json')
	.then(response => {
		return response.json()
	})
	.then(data => {
		data.forEach(obj => {
			db.push(obj)
		})
		formTaker(db)
	})
async function formTaker(db) {
	if( db.length != 0 ) {
		let countryCode = document.querySelector('.country-list-ul')
		db.forEach (country => {
			let optionTemp = `<li data-id="${country.id}" data-code="${country.code.toLowerCase()}" data-phonecode="${country.phone}" class="country-list-point "><span class="country-name">${country.name}</span> <span class="country-code">+${country.phone}</span> <img src="./assets/icons/countries/${country.code.toLowerCase()}.png"></li>`
			countryCode.insertAdjacentHTML('beforeend', optionTemp)
		})
		changeCountry()
	}
}
let countryTelCode = document.querySelector('.label-4-tel')
let defaultPoint = document.querySelector('.choosen-country-flag-img')
function changeCountry() {
	let countryList = document.querySelector('.country-list-ul')
	countryList.addEventListener('click', e => {
		e.target.tagName != 'LI' ? notLiClick(e.target) : LiClick(e.target)
		let mainwindow = document.querySelector('.country-list')
		mainwindow.hidden = true
	})
}
function notLiClick (event) {
	defaultPoint.src = `./assets/icons/countries/${event.parentElement.dataset.code}.png`
	countryTelCode.innerHTML = `+${event.parentElement.dataset.phonecode}`
}
function LiClick (event) {
	defaultPoint.src = `./assets/icons/countries/${event.dataset.code}.png`
	countryTelCode.innerHTML = `+${event.dataset.phonecode}`
} 
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