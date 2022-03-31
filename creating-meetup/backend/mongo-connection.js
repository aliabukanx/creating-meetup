const mongoose= require('mongoose')

 
    async function main () {
    await mongoose.connect('mongodb://localhost/wtm', {useNewUrlParser: true, 
    useUnifiedTopology: true, family: 4})
    console.log('connected')
}  
main()
