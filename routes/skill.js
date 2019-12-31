const express = require('express');
const Skill = require('../model/skill');

const router = express.Router();

// get
router.get('/',(req,res,next)=>{
    Skill.find()
    .then((result)=>{
        if(result.length>0){
            res.status(200).json({
                result:result
            })
        }else{
            res.status(404).json({
                message:'Record Not Found',
            })
        }
    })
    .catch(err=>{
        res.status(400).json({
            message:'error occured',
            error:err
        })
    })
});
// post
router.post('/',(req,res,next)=>{
    const skill = new Skill({
        name:req.body.name,
        expertise:req.body.expertise
    })
    skill.save().then((result)=>{
        res.status(201).json({
            result:result
        })
    })
    .catch(err=>{
        res.status(500).json({
            message:'error occured',
            error:err
        })
    })
});
// delete
router.delete('/:id',(req,res,next)=>{
    const id = req.params.id;
    Skill.deleteOne({_id:id})
    .then((result)=>{
        if(result.deletedCount > 0){
            res.status(200).json({
                message:'deleted successfully',
                result:result.data
            })
        }
        else{
            res.status(404).json({
                message:'Record Not Found'
            })
        }
       
    }).catch(err=>{
        res.status(400).json({
            message:'error occured',
            error:err
        })
    })
});
// update
router.patch('/:id',(req,res,next)=>{
    const id = req.params.id;
    Skill.where({_id:id}).update({
        name:req.body.name,
        expertise:req.body.expertise
    }).then((result)=>{
        res.status(200).json({
            message:'updated successfuly',
            result:result.data
        })
    }).catch(err=>{
        res.status(500).json({
            message:'error occured',
            error:err
        })
    })
});

module.exports = router;