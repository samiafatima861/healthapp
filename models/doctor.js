const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Doctor name is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters']
    },
    specialty: {
        type: String,
        required: [true, 'Specialty is required'],
        trim: true
    },
    qualification: {
        type: String,
        required: [true, 'Qualification is required'],
        trim: true
    },
    experience: {
        type: Number,
        required: [true, 'Years of experience is required'],
        min: [0, 'Experience years cannot be negative']
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
        trim: true
    },
    address: {
        street: String,
        city: String,
        state: String,
        zipCode: String
    },
    available: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create indexes for faster queries
doctorSchema.index({ name: 'text' });
doctorSchema.index({ specialty: 1 });
doctorSchema.index({ email: 1 }, { unique: true });

module.exports = mongoose.model('Doctor', doctorSchema);