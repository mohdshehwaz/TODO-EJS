const { findByIdAndDelete } = require('../models/task');
const Task = require('../models/task');


module.exports.create = async (req,res) => {
    console.log("in the creation of the field",req.body);
    const addTask = await Task.create(req.body);
    if(addTask){
        console.log("Add task successfully");
        return res.redirect('/');
    }
    return ;
}

module.exports.delete = async (req,res) => {
    console.log(req.params);
    const deleteId = await Task.findByIdAndDelete(req.params.id);
    if(deleteId){
        console.log("Item deleted successfully");
        
        
        return res.status(200).send({msg:"Success"});
    }
}