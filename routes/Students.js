const router = require('../routerconfig');
// Import the controller for this route
const studentController = require('../controller/studentController');

// Define a route and its handler
router.get('/students', studentController.getAllStudents);
router.get('/students/:id', studentController.getStudentById);
router.post('/students', studentController.createStudent);

module.exports = router;
