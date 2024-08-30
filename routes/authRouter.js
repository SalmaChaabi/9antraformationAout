var express = require('express');
var router = express.Router();
const authController = require('../controller/authController');
const upload = require("../middlewares/uploadFile");
/* GET users listing. */
router.get('/getAllUsers',authController.getAllUsers);
router.get('/triUsers',authController.triUsers);
router.get('/getUserById/:id',authController.getUserById);
router.get('/searchUserByName',authController.searchUserByName);
router.get('/searchUserByNamesort',authController.searchUserByNamesort);
router.post('/adduserMembre',authController.adduserMembre);
router.post('/adduserMembrewithimg',upload.single("image_user"),authController.adduserMembrewithimg);
router.post('/adduserAdmin',authController.adduserAdmin);
router.post('/addusercoach',authController.addusercoach);
router.put('/updateUser/:id',authController.updateUser);
router.delete('/deleteUser/:id',authController.deleteUser);






module.exports = router;
