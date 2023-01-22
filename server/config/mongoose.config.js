const mongoose = require("mongoose");

const shredDB = "built2shredDB";

mongoose.set('strictQuery', true);

mongoose.connect(`mongodb://localhost/${shredDB}`, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() => {
    console.log(`you're connected to the database ${shredDB}`)
})
.catch((err) => {
    console.log(`there was an error connecting to the ${shredDB}. Here is the error`, err)
})