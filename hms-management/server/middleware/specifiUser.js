module.exports = (req, res, next) => {
  if (req.user?.role[0].toLowerCase() === 'patient') return next();
  if (req.user?.role[0].toLowerCase() === 'doctor') return next();
  next();
};
