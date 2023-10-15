document.addEventListener('DOMContentLoaded', function() {

  let display = document.getElementById('display');
  let buttons = Array.from(document.querySelectorAll('button'));

  buttons.map(button => {
    button.addEventListener('click', function() {
      if (button.innerText === 'C'){
        display.innerText = '0'
      } else if (button.innerText === '='){
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = 'Error';
        }
      } else {
        if (display.innerText === '0' && button.innerText !== '.') {
          display.innerText = button.innerText;
        } else if (display.innerText !== '0' || button.innerText === '.') {
          display.innerText += button.innerText;
        }
      }
    })
  })
})