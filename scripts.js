const showDialogBtn = document.querySelector('#show-dialog-btn')
const myDialog = document.querySelector('#my-dialog')
const closeDialogBtn = document.querySelector('#close-dialog-btn')

showDialogBtn.addEventListener('click', () => {
  myDialog.classList.toggle('show')
})

closeDialogBtn.addEventListener('click', () => {
  myDialog.classList.toggle('show')
})
