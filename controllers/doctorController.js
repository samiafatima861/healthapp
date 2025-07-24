const Doctor = require('../models/doctor');

// Get all doctors
exports.getAllDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.render('doctors/allDoctors', { 
            title: 'All Doctors',
            doctors 
        });
    } catch (error) {
        res.status(500).render('error', {
            message: 'Error fetching doctors',
            error
        });
    }
};

// Register a new doctor
exports.registerDoctor = async (req, res) => {
    try {
        const doctor = new Doctor(req.body);
        await doctor.save();
        res.redirect('/doctors/all');
    } catch (error) {
        res.render('doctors/registerDoctor', {
            title: 'Register Doctor',
            error: error.message
        });
    }
};

// Login doctor
exports.loginDoctor = async (req, res) => {
    try {
        const { email, password } = req.body;
        const doctor = await Doctor.findOne({ email });
        
        if (!doctor) {
            throw new Error('Doctor not found');
        }
        
        // In a real app, you would verify the password here
        res.redirect('/doctors/dashboard');
    } catch (error) {
        res.render('doctors/loginDoctor', {
            title: 'Doctor Login',
            error: error.message
        });
    }
};

// Search doctors by name
exports.searchDoctorsByName = async (req, res) => {
    try {
        const searchQuery = req.query.name;
        const doctors = await Doctor.find({
            name: { $regex: searchQuery, $options: 'i' }
        });
        
        res.render('doctors/searchResults', {
            title: 'Search Results',
            doctors,
            searchQuery
        });
    } catch (error) {
        res.status(500).render('error', {
            message: 'Error searching doctors',
            error
        });
    }
};

// Get doctor by ID
exports.getDoctorById = async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id);
        if (!doctor) {
            throw new Error('Doctor not found');
        }
        res.render('doctors/doctorDetails', {
            title: 'Doctor Details',
            doctor
        });
    } catch (error) {
        res.status(404).render('error', {
            message: 'Doctor not found',
            error
        });
    }
};

// Update doctor
exports.updateDoctor = async (req, res) => {
    try {
        const doctor = await Doctor.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        res.json(doctor);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete doctor
exports.deleteDoctor = async (req, res) => {
    try {
        await Doctor.findByIdAndDelete(req.params.id);
        res.json({ message: 'Doctor deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};