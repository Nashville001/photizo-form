'use strict'

const fileInput = document.getElementById('fileInput')
const dropArea = document.getElementById('drop-area')
const fileDisplay = document.getElementById('file-name')
const uploadText = document.getElementById('upload-text')

function handleFiles(files) {
  if(files.length > 0) {
    const file = files[0]
    fileDisplay.textContent = `Selected File: ${file.name}`
    uploadText.textContent = 'File Ready to Upload'
  }
}

fileInput.addEventListener('change', (e) => {
  handleFiles(e.target.files)
})

dropArea.addEventListener('dragover', (e) => {
  e.preventDefault()
  dropArea.classList.add('dragover')
})

dropArea.addEventListener('dragleave', (e) => {
  dropArea.classList.remove('dragover')
})

dropArea.addEventListener('drop', (e) => {
  e.preventDefault()
  dropArea.classList.remove('dragover')
  const files = e.dataTransfer.files
  fileInput.files = files
  handleFiles(files)
})