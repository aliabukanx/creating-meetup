const mongoose = require ('mongoose')
const { default: mongooseAutoPopulate } = require('mongoose-autopopulate')

const PersonSchema= new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2 
    },
    age: {
        type: Number,
        required: true,
        min: 18
    },
    meetups: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Meetup',
        autopopulate :{
            maxDepth:1 
        }
    }]
})

PersonSchema.methods.findPeersOver18 = async function(cb){
 
   return PersonModel.find ({ 
       age:{
           $gte: 18
       }
    }) 
}

PersonSchema.plugin(require('mongoose-autopopulate'))

const PersonModel = mongoose.model('Person', PersonSchema)

module.exports=PersonModel
