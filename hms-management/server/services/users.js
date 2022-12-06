const Users = require('../models/users')

const getUsers =  (queryValue) => {
  return  Users.find(queryValue)
}

const findUserByProperty  =  (key,value) =>{
if(key === "_id"){
    return Users.findById(value)
}
return Users.findOne({[key] :value})
}

const createNewUser = ({ name, email, password, role,accountStatus }) => {
	const user = new Users({
		name,
		email,
		password,
		role: role ? role : 'PATIENT',
		accountStatus: accountStatus ? accountStatus : 'Pending',
	});
	return user.save();
};

const updateUsers = (userId, data ) =>{
const user = findUserByProperty('email', data.email)
if(!user) return res.status(400).json({msg:'user not exits'})

return Users.findByIdAndUpdate(userId, {...data}, {new:true})

}

module.exports = {findUserByProperty,getUsers, createNewUser,updateUsers}