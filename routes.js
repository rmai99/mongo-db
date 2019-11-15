let router = require('express').Router();

let  mhsController = 
require('./controllers/mahasiswaController');

router.route('/mahasiswa')
    .get(mhsController.index)
    .post(mhsController.store)
    

router.route('/mahasiswa/:id').put(mhsController.update);

router.route('/mahasiswa_updatedByNim/:nim').put(mhsController.updateByNim);

router.route('/mahasiswa_deletedByNim/:nim').delete(mhsController.deleteByNim);


module.exports = router;