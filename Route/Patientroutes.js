const express = require('express');
const patientController = require('../Controller/Patientcontrollers');
const authenticatePatient = require('../Middleware/Authmiddlewares');
const router = express.Router();

// Register a new patient
router.post('/register', patientController.registerPatient);

// Login with JWT-based authentication
router.post('/login', patientController.loginPatient);

// Retrieve patient profile
router.get('/profile', authenticatePatient, patientController.getPatientProfile);

// Update patient profile
router.put('/profile', authenticatePatient, patientController.updatePatientProfile);

module.exports = router;
