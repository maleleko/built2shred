const B2SControllers = require('../controllers/built2shred.controllers')

module.exports = (app) => {
    app.post('/buildyourown', B2SControllers.createShredder)
    
    app.get('/display', B2SControllers.displayShredders)

    app.get('/setup/:id', B2SControllers.viewShredder)

    app.put('/setup/updatesetup/:id', B2SControllers.updateShredder)

    app.delete('/setup/delete/:id', B2SControllers.deleteShredder)

    
}