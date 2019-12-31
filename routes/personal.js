const express = require('express');
const Personal = require('../model/personal');

const router = express.Router();

// get
router.get('/',(req,res,next)=>{
    Personal.find().then(result=>{
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
    const personal = new Personal({
        name:req.body.name,
        photoUrl:req.body.photoUrl,
        role:req.body.role,
        git:req.body.git,
        linkdin:req.body.linkdin,
        gmail:req.body.gmail,
        about:req.body.about,
        phone:req.body.phone,
        tagline:req.body.tagline,
        resumeLink:req.body.resumeLink
    })
    personal.save().then(result=>{
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
    Personal.deleteOne({_id:id})
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
    Personal.where({_id:id}).update({
        name:req.body.name,
        photoUrl:req.body.photoUrl,
        role:req.body.role,
        git:req.body.git,
        linkdin:req.body.linkdin,
        gmail:req.body.gmail,
        about:req.body.about,
        phone:req.body.phone,
        tagline:req.body.tagline,
        resumeLink:req.body.resumeLink
        
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