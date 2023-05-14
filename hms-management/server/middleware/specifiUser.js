const doctorAuth = (req, res, next) => {
  if (req.user.role.includes('doctor')) return next();
  else return res.status(401).json({ error: 'this service not made for you' });
};

const patientAuth = (req, res, next) => {
  if (req.user.role.includes('patient')) return next();
  else return res.status(401).json({ error: 'this service not made for you' });
};

const adminAuth = (req, res, next) => {
  if (req.user.role.includes('admin')) return next();
  else return res.status(401).json({ error: 'this service not made for you' });
};

module.exports = { adminAuth, patientAuth, doctorAuth };
