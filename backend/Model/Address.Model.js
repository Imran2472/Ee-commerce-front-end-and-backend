import mongoose from 'mongoose';

const AddressSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    fullname: {
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    zipcode: {
        type: String,
        required: true,
    },
    phonenumber:{
        type: String,
        required: true,
    },
    CreatedAt:{
        type: Date,
        default: Date.now(),
    }
   
});

const Address = mongoose.model('Address', AddressSchema);

export default Address;