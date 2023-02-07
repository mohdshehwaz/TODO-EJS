const express = require('express');

const router = express.Router();
const taskController = require('../controller/task_controller');

router.post('/create',taskController.create);
router.get('/delete/:id',taskController.delete); 
module.exports = router;