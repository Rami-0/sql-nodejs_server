var Student = require('./student');
const dboperations = require('./dboperations');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

router.use((request, response, next) => {
	console.log('middleware');
	next();
});

router.route('/students').get((request, response) => {
	dboperations.getStudents().then((result) => {
		response.json(result[0]);
	});
});

router.route('/students/:id').get((request, response) => {
	dboperations.getStudent(request.params.id).then((result) => {
		response.json(result[0]);
	});
});

router.route('/students').post(async (request, response) => {
	try {
		let student = { ...request.body };
		const result = await dboperations.addStudent(student);
		response.status(201).json(result);
	} catch (error) {
		console.error(error);
		response.status(500).json({ error: 'Internal server error' });
	}
});

var port = process.env.PORT || 8090;
app.listen(port);
console.log('Order API is runnning at ' + port);
