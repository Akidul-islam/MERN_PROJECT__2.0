
const dbGetItems =  (model, queryValue) => {
    return model.find(queryValue)
  }
  
  const dbFindPropertyById  =  (model,key,value) =>{
  if(key === "_id"){
      return model.findById(value)
  }
  return model.findOne({[key] :value})
  }
  
//   create items
  const dbCreateNewItem = (model,data) => {
    // create new data
return new model(data).save().then((daa) => console.log(daa))
  };
  
//   updte by model,user,data
  const dbUpdateItem = (model,userId, data ) =>{
  const user = findUserByProperty('email', data.email)
  if(!user) return res.status(400).json({msg:'user not exits'})
  
  return model.findByIdAndUpdate(userId, {...data}, {new:true})
  
  }

  // get all data and also query data servicess
const dbQueryItem = async (queryValue) => {
	const queryObj = {} 
	if(queryValue){
		const {name,email} = queryValue
		if(name){
			queryObj.name = {$regex :name, $options:'i'}
		}
	}
	// if(email) return queryObj.email = email
    //  if(role) return queryObj.role = role
	return await dbGetItems(queryObj)
}

// deleted items
const dbDeletedItem = (model,userId) =>{
   return  model.findByIdAndDelete(userId)
}
  module.exports = {dbFindPropertyById,dbCreateNewItem,dbDeletedItem,dbGetItems}