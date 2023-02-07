const Task = require('../models/task');
const moment = require('moment');
module.exports.home = async (req,res) => {
    const tasks =await Task.find();
    if(tasks){
        return res.render('home',{
            title:"TODO List",
            tasks:tasks,
            moment:moment
        })
    }
    console.log("Task does not have any valid data");
}