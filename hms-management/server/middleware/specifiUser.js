module.exports = (req, res, next) => {
  if (use.role[0].toLowerCase() === 'patient') return next();
  if (use.role[0].toLowerCase() === 'doctor') return next();
};
