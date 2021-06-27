let count = 0;
const buttons = document.querySelectorAll('.counterBtn');

buttons.forEach(button => {
    button.addEventListener('click', changeCounter);
});

function changeCounter() {
    if (this.classList.contains('prevBtn'))
        count--;
    if (this.classList.contains('nextBtn'))
        count++;

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

