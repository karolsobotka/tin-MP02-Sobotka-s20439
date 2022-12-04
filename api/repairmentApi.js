const Repairment = require('../model/sequelize/repairment');
const RepairmentRepository = require('../repository/sequelize/repairmentRepository');

exports.getRepairments = (req, res, next) => {
    RepairmentRepository.getRepairments().then(repairments =>{
        res.status(200).json(repairments);
    }).catch(err => {
        console.log(err);
    });
};

exports.getRepairmentsById = (req, res, next) => {
    const repairmentId = req.params.repairmentId;
    RepairmentRepository.getRepairmentById(repairmentId)
    .then(repairment =>{
        if(!repairment){
            res.status(404).json({
                message: 'Repairment with id: '+repairmentId+' not found.'
            })
        }else
            res.status(200).json(repairment);
    });
};

exports.createRepairment = (req, res, next) => {
   RepairmentRepository.createRepairment(req.body)
   .then(newObj =>{
    res.status(201).json(newObj);
   })
   .catch(err =>{
    if(!err.statusCode){
        err.statusCode = 500;
    }
    next(err);
   });
};

exports.updateRepairment = (req, res, next) => {
    const repairmentId = req.params.repairmentId;
    RepairmentRepository.updateEmployee(repairmentId, req.body)
   .then(result  =>{
    res.status(200).json({message: 'Repairment updated successfully', repairment: result});
   })
   .catch(err =>{
    if(!err.statusCode){
        err.statusCode = 500;
    }
    next(err);
   });

};

exports.deleteRepairment = (req, res, next) => {
    const repairmentId = req.params.repairmentId;
    RepairmentRepository.deleteRepairment(repairmentId)
    .then( result => {
    res.status(200).json({message: 'Removed repairment successfully', repairment: result})
    .catch(err => {
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    })
    })
};
