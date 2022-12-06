const takeError = require("../utilities/error")

const dbGetItems =  (model, queryValue) => {
    return model.find(queryValue)
  }
  
  const dbFindPropertyById  =  (model,key,value) =>{
  if(key === "_id") return model.findById(value)
  return model.findOne({[key] :value})
  }
  
//   create items
  const dbCreateNewItem = (model,data) => {
    // create new data
return new model(data).save()
  };
  
//   updte by model,user,data
  const dbUpdateItem = (model, key, keyValue, data ) =>{
  const user = dbFindPropertyById(model, key, keyValue)
  if(!user) throw takeError(`${model}: ${keyValue} Does not Exits`, 404)
  
  return model.findByIdAndUpdate(keyValue, {...data}, {new:true})
  
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
  module.exports = {dbFindPropertyById,dbCreateNewItem,dbDeletedItem,dbGetItems,dbUpdateItem}