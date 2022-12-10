const userIdentify = (req,res, next) => {
    let userRole = ''
    if(req.user.role[0] === 'Patient' ){
       return userRole = 'Patient'
    }
    else if(req.user.role[0] === 'Doctor') {
      return  userRole = 'Doctor'
    }

    else{
     return userRole = 'Admin'
    }
    next()
}