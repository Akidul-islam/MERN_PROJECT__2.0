const ErrorHandler = (err, req, res, next) => {
	console.log(err);
	const message = err.message ? err.message : 'Server Error Occurred';
	const status = err.status ? err.status : 500;

	res.status(status).json({
		message,
	});
}
module.exports = ErrorHandler