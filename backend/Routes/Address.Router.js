import express from 'express';
import { AddAddress, GetAddresses } from '../Controller/Address.Controller.js';
import { Authorization } from '../Middlewares/IsAuthentication.js';
const router = express.Router();

router.post('/address',Authorization, AddAddress)
router.get('/getalladdress',Authorization, GetAddresses)

export default router