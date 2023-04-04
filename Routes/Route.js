const express = require("express");

const {newConversation ,getConversation} = require("../controller/conversationController");
const { addUser, getUser} = require("../controller/userController");
const {newMessage, getMessage} = require("../controller/messageController");
const {uploadImage, getImage} = require("../controller/image-controller");


const upload = require("../utilis/upload")

const router = express.Router();


router.route('/add').post( addUser);
router.route('/users').get( getUser);
router.route('/conversation/add').post( newConversation);
router.route('/conversation/get').post( getConversation);
router.route('/message/add').post(newMessage);
router.route('/message/get/:id').get(getMessage);
router.route('/file/upload').post( uploadImage);
router.route('/file/:filename').get(getImage);


module.exports= router;