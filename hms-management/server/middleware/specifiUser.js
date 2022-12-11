module.exports = (req, res, next) => {
  if (use.role[0] === 'PATIENT') return next();
  if (use.role[0] === 'DOCTOR') return next();
};
