const Board = require('../models/built2shred.model')

module.exports = {
    createShredder:(req, res) => {
        Board.create(req.body)
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            console.log('ERROR CREATING BOARD',err)
            res.status(400).json(err)
        })
    },

    displayShredders:(req, res)=>{
        Board.find()
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            console.log(err)
            res.status(400).json(err)
        })
    },

    viewShredder:(req, res)=>{
        Board.findById(req.params.id)
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            console.log(err)
            res.status(400).json(err)
        })
    },

    updateShredder:(req, res)=>{
        Board.updateOne({_id:req.params.id}, req.body, {runValidators:true})
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            console.log(err)
            res.status(400).json(err)
        })
    },

    deleteShredder:(req, res) =>{
        Board.deleteOne({_id:req.params.id}, req.body)
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            console.log(err)
            res.status(400).json(err)
        })
    }
}