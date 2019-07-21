var express = require('express');
const model = require('../models/service');
const router = express();

function returnError(res, error) {
    res.status(500).json({
      message: 'An error occurred',
      error: error
    });
}

router.get('/services', (req, res, next) => {
    model.find()
    .then( services => {
        res.status(200).json({
            message: 'Success',
            services: services
        });
    })
    .catch(error => {
        returnError(res, error);
    });
});


module.exports = router;