const mongoose = require('mongoose')
const router = require('express').Router()
const profile =  mongoose.Schema({
    name:String,
    gender:String,
    data:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Story'
    }]
})


const profile2 =  mongoose.Schema({
    name2:String,
    title:String
})
const Profile = mongoose.model("Profile", profile)

const Story = mongoose.model("Story", profile2)

const story1 = new Story({
    title:'tryagain'
   })

const profil = new Profile({
    name:'akidulislam'
})

profil.data.push(story1)

router.post('/practice',  async (req, res, next) =>{ 

      await profil.save()
      return await Profile.findOne({name:'akidulislam'}).populate('data')
}   
)

module.exports = router
