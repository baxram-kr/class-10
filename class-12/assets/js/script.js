let closeBtn = document.getElementById('closebtn')
let content = document.querySelector('.content')
let shadow = document.querySelector('.shadow')

function open(){
content.classList.remove('hidden')
shadow.classList.remove('hidden')
}
function close(){
    content.classList.add('hidden')
    shadow.classList.add('hidden')
    }
const btns = document.querySelectorAll('.openbtn');
    for (const btn of btns) {
      btn.addEventListener('click', open )
    }

closeBtn.addEventListener('click', close)
shadow.addEventListener('click' ,close)
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
     close()
      console.log('Escape key was pressed');
    }
  });
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
     open()
      console.log('Enter key was pressed');
    }
  });
    
  

  



