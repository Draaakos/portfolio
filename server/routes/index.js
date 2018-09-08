module.exports = (app, hash) => {
  app.get('/', (req, res) => res.render('home.hbs', {hash}));

  app.get('*', (req, res) => res.render('404.hbs'));
};

