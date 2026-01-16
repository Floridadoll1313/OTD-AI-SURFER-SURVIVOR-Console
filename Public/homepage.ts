router.get('/', (req, res) => {
  res.sendFile(path.resolve('public/dashboard.html'));
});
