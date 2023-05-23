const showDialogBtn = document.querySelector('#show-dialog-btn')
const myDialog = document.querySelector('#my-dialog')
const closeDialogBtn = document.querySelector('#close-dialog-btn')

showDialogBtn.addEventListener('click', () => {
  myDialog.show()
})

closeDialogBtn.addEventListener('click', () => {
  myDialog.close()
})

document.addEventListener('click', (e) => {
  if (!e.target.matches('#show-dialog-btn') && !e.target.matches('path'))
    myDialog.close()
})
