var fs = require('fs')
var path = require('path')

var dataPath = path.join(__dirname, 'github.json')

module.exports = {
// getHomeData: getHomeData,
   githubData: githubData
}

// function getHomeData () {
//   return {
//     title: 'Awesome title',
//     headerText: 'Welcome to Awesome',
//     fruitList: [{
//       name: 'apples',
//       colour: 'red'
//     }, {
//       name: 'oranges',
//       colour: 'orange'
//     }, {
//       name: 'bananas',
//       colour: 'yellow'
//     }]
//   }
// }

function githubData (callback) {
  fs.readFile(dataPath, function (err, data) {
    var repos = JSON.parse(data)
    callback(null, repos)
  })
}

// function readData(callback) {
//   fs.readFile(dataPath, function (error, data) {
//     if (error) {
//       callback(error)
//     } else {
//
//     }
//   })
// }
