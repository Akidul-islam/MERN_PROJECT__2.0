const takeError = (msg = 'something problem', status = 500 ) =>{
const err = new Error(msg)
err.status = status
return err
}

module.exports = takeError;