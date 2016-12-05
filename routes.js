var db = require('./db')

module.exports = {
  home,
  author
}

// function home (req, res) {
//   var data = db.getHomeData()
//   data.showList = req.query.showlist
//   res.render('home', data)
// }

function home (req, res) {
  var data = {
    title: 'The repo page',
    headerText: 'Repository List',
    repos: db.githubData()
  }
  res.render('home', data)
}

function author (req, res) {
  var id = Number(req.params.id);
  var repo = db.githubData().find(function (repo) {
    return repo.owner.id === id;
  });
  if (repo === undefined) {
    res.send('Owner not found.')
  } else {
    res.render('author', repo.owner);
  }
}
