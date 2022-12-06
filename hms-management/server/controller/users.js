const users = require('../services/auth')
const takeError = require('../utilities/error')

// 
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

// getSingle users
const getUser = async (req, res) =>{
  const {id:userId} = req.params

  try {
    const singleUser = await db.findUserByProperty('_id',userId)
  if(!singleUser)  throw takeError('sorry user does not exits', 400)
  res.status(200).json({userId, result:singleUser})

  } catch (error) {
    next(error)
  }
  
}
 
const patchUsersUpdate = async (req, res, next) => {
  const { name, password, password2} = req.body;
	const { id:userId } = req.params;
  if(password < 6) throw takeError('password will be greater than 5', 400)
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