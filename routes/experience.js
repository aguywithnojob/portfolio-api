const express = require('express');
const Experience = require('../model/experience');

const router = express.Router();

// get
router.get('/',(req,res,next)=>{
    Experience.find().then(result=>{
        if(result.length>0){
            res.status(200).json({
                result:result
            })
        }
        else{
            res.status(404).json({
                message:'record not Found'
            })
        }
    }).catch(err=>{
        res.status(500).json({
            message:'error occured',
            error:err
        })
    })
});
// post
router.post('/',(req,res,next)=>{
    const experience = new Experience({
        company:req.body.company,
        role:req.body.role,
        desc:req.body.desc,
        from:req.body.from,
        to:req.body.to
    })
    experience.save().then(result=>{
        res.status(201).json({
            message:'successfully added',
            result:result
        })
    }).catch(err=>{
        res.status(500).json({
            message:'error occured',
            error:err
        })
    })
});
// delete
router.delete('/:id',(req,res,next)=>{
    const id= req.params.id;
    Experience.deleteOne({_id:id})
    .then(result=>{
        if(result.deletedCount > 0){
            res.status(200).json({
                message:'deleted successfully',
                result:result
            })
        }
        else{
            res.status(404).json({
                message:'Record Not Found'
            })
            
        }
    }).catch(err=>{
        res.status(500).json({
            message:'error occured',
            error:err
        })
    })
});
// update
router.patch('/:id',(req,res,next)=>{
    const id= req.params.id;
    Experience.where({_id:id}).update({
        company:req.body.company,
        role:req.body.role,
        desc:req.body.desc,
        from:req.body.from,
        to:req.body.to
    }).then(result=>{
        res.status(200).json({
            message:'updated successfully',
            result:result
        })
        .catch(err=>{
            res.status(500).json({
                message:'error occured',
                error:err
            })
        })
    })
});

module.exports = router;