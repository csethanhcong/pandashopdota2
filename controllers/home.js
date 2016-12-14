/**
 * GET /
 * Home page.
 */
exports.home = (req, res) => {
  res.render('home', {
    title: 'Home'
  });
};

exports.index = (req, res) => {
  res.render('index', {
    title: 'Index'
  });
};
