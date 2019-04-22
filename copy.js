const fs = require('fs')
const path = require('path')

function checkDirectorySync (directory) {
  try {
    fs.statSync(directory)
  } catch (e) {
    fs.mkdirSync(directory)
  }
}

const getAbsolutePath = function (folderName) {
  return path.join(__dirname, folderName)
}

function copy (source, dest) {
  fs.copyFile(
    path.resolve(getAbsolutePath(source)),
    path.resolve(getAbsolutePath(dest)), (err) => {
      if (err) throw err
      console.log(`file ${source} copied to ${dest}`)
    })
}

(function doCopy () {
  checkDirectorySync(getAbsolutePath('local-storage'))
  checkDirectorySync(getAbsolutePath('session-storage'))

  copy('dist/local-storage.min.js', 'local-storage/index.js')
  copy('dist/local-storage.min.js.gz', 'local-storage/index.js.gz')
  // session storage
  copy('dist/session-storage.min.js', 'session-storage/index.js')
  copy('dist/session-storage.min.js.gz', 'session-storage/index.js.gz')
})()
