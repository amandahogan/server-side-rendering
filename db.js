module.exports = {
  getHomeData: getHomeData,
  githubData: githubData
}

function getHomeData () {
  return {
    title: 'Awesome title',
    headerText: 'Welcome to Awesome',
    fruitList: [{
      name: 'apples',
      colour: 'red'
    }, {
      name: 'oranges',
      colour: 'orange'
    }, {
      name: 'bananas',
      colour: 'yellow'
    }]
  }
}

function githubData () {
  return require("./github")
}
