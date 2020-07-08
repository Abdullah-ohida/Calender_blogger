const dayNumber = document.querySelector('.number');
const monthName = document.querySelectorAll('.month-name');
const dayIncrease = document.querySelectorAll('.day')

// month of the year
let count = 1;
dayIncrease.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
        const getValue = event.currentTarget.classList;
        if (getValue.contains('decrease')) {
            if(count == 1){
                return count;
            }else{
                count--;
            }
        }else if(getValue.contains('increase')){
            if(count == 31){
                return count;
            }else{
                count++;
            }
        }
        dayNumber.textContent = count;
    })
});