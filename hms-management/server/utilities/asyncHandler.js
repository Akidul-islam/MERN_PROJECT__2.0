module.exports = (message = 'successfull', callback, additionalInfo = null) => {
  return async (req, res, next) => {
    try {
      const result = await callback(req, res, next);
      return res.status(200).json({ message, result, additionalInfo });
    } catch (error) {
      next(error);
    }
  };
};
