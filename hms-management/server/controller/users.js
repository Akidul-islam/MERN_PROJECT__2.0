const users = require('../services/auth')
const takeError = require('../utilities/error')
const db = require('../services/users')

const getUsers = async (req, res, next) =>{ 
  try {
    const queryUsers = await users.queryService(req.query)
    res.status(203).json({success:'ok' , queryUsers})
  } catch (error) {
    next(error)
  }
   
 }

// user create by roles
const usersCreate =(req,res) =>{
    res.json({fjksj:'CREATE'})
}

const getUser = async (req, res) =>{
  const {id:userId} = req.params
  const singleUser = await db.findUserByProperty('_id',userId)
  if(!singleUser){
    throw takeError('sorry not found', 400)
  }
  res.json({userId, result:singleUser})
}
 
const patchUsersUpdate = async (req, res, next) => {
  const { name, password, password2} = req.body;
	const { id:userId } = req.params;
  if(password < 5) throw takeError('password will be greater than 5', 400)
   if (password !== password2) throw takeError('password does not match', 400)

	try {
      const user = await users.updateService(userId,{name,password})
		return res.status(200).json(user);
	} catch (e) {
		next(e);
	}
};

const usersDelete = (req, res) =>{ res.send('I am deleted users') }

module.exports = {getUsers,usersCreate,getUser,patchUsersUpdate,usersDelete}