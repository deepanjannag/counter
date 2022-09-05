let count = 0;
const buttons = document.querySelectorAll('.counterBtn');

buttons.forEach(button => {
    button.addEventListener('click', changeCounter);
});

function changeCounter() {
    if (this.classList.contains('prevBtn'))
        count--;
    if (this.classList.contains('nextBtn'))
        count = count+1;

    document.querySelector('#counter').innerText = count;

    // #region color
    if (count < 0)
        document.querySelector('#counter').style.color = 'red';
    if (count > 0)
        document.querySelector('#counter').style.color = 'green';
    if (count == 0)
        document.querySelector('#counter').style.color = 'black';
    // #endregion
}


//A simpler approach

/*
let counter = 0;

document.querySelector('.prevBtn').addEventListener('click', () => changeNumber(-1));
document.querySelector('.nextBtn').addEventListener('click', () => changeNumber(1));


function changeNumber(change) {

    counter += change;
    document.querySelector('#counter').innerText = counter;

    // #region color
    if (counter < 0)
        document.querySelector('#counter').style.color = 'red';
    if (counter > 0)
        document.querySelector('#counter').style.color = 'green';
    if (counter == 0)
        document.querySelector('#counter').style.color = 'black';
    // #endregion
}


*/

