let numberContainer = document.querySelector('.rating-button');
let submitButton = document.querySelector('.btn-submit');
let rateNumber = document.querySelector('.rating-selected');
let ratingCard = document.querySelector('.rating-card');
let thankyouCard = document.querySelector('.thankyou-card');

numberContainer.addEventListener('click', event => {
    let numberSelected = event.target.innerText;
    rateNumber.innerText = numberSelected;
    
});

submitButton.addEventListener('click', () => {
    let numberSelected = rateNumber.innerText;
    if (numberSelected >= 1 && numberSelected <= 5){
        ratingCard.style.display = 'none';
        thankyouCard.style.display = 'flex';
    }
});


