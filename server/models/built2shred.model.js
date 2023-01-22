const mongoose = require('mongoose')

const BoardSchema = mongoose.Schema({
    name:{
        type:String,
    },
    boardBrand:{
        type:String,
        enum: [
            'anti-hero - classic eagle',
            'anti-hero - non-sequitur',
            'anti-hero - party ambassador',
            'krooked - team logo',
            'krooked - muerte',
            'krooked - two face',
            'hockey - vandals',
            'hockey - epilogue',
            'hockey - athena'
        ],
        required:[true, "brand is required."]
    },
    boardBrandImage: {
        type:String
    },
    size:{
        type:String,
        enum: [
            '8.25',
            '8.5',
            '8.75'
        ],
        required:[true, "select a size."]
    },
    griptape:{
        type:String,
        enum: [
            'MOB',
            'steelo',
            'jessup'
        ],
        required:[true, "you're just asking for it. please add grip."]
    },
    trucks:{
        type:String,
        enum: [
            'ace',
            'independent',
            'thunder'
        ],
        required:[true, "can't shred without trucks. please add trucks."]
    },
    trucksbrandImage:{
        type:String
    },
    wheels: {
        type:String,
        enum: [
            'spitfire',
            'bones',
            'OJ'
        ],
        required:[true, "how can you roll with no wheels? please add wheels."]
    },
    wheelsBrandImage:{
        type:String
    },
    bearings:{
        type:String,
        enum: [
            'bones bearings',
            'bronson',
            'cortina',
        ],
        required:[true, "wheels are useless without bearings, please add bearings."]
    },
}, {timestamps:true})

const Board = mongoose.model('Board', BoardSchema)

module.exports = Board