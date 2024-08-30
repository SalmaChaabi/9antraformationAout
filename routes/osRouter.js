var express = require('express');
var router = express.Router();
const osController  = require('../controller/osController');
router.get('/getInformation',osController.getOsInformation);

router.get("/cpus",osController.osCpus);

router.get("/osCpuslenght",osController.osCpuslenght);


router.get("/cpus/:id",osController.osCpusById);

module.exports = router;