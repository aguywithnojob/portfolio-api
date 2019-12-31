const express = require('express');
const Project = require('../model/project');

const router = express.Router();

// get
router.get('/',(req,res,next)=>{
    Project.find().then(result=>{
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
    const project = new Project({
        name:req.body.name,
        imageUrl:req.body.imageUrl,
        gitlink:req.body.gitlink,
        livelink:req.body.livelik,
        desc:req.body.desc
    })
    project.save().then(result=>{
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
    Project.deleteOne({_id:id})
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
    Project.where({_id:id}).update({
        name:req.body.name,
        imageUrl:req.body.imageUrl,
        gitlink:req.body.gitlink,
        livelink:req.body.livelik,
        desc:req.body.desc
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