const express = require('express');
const Education = require('../model/education');

const router = express.Router();

// get
router.get('/',(req,res,next)=>{
    // res.send("heellow")
    Education.find()
    .then(result=> {
        if(result.length>0){
            res.status(200).json({
                result: result
            })
        }
        else{
            res.status(404).json({
                message:'record Not Found'
            })
        }
        
    })
    .catch(err=>{
        console.log(err)
        res.status(400).json({
            message:'error occured',
            err:err
        })
    })
});
// post
router.post('/',(req,res,next)=>{
        const education = new Education({
            collegename:req.body.collegename,
            from:req.body.from,
            to:req.body.to,
            desc:req.body.desc
        })
        education.save()
        .then((result)=>{
            res.status(201).json({
                message:'record create successfully',
                data:result
            })
        })
        .catch(err=>{
            res.status(400).json({
                message:'error occured',
                error:err
            })
        })
});
// delete
router.delete('/:id',(req,res,next)=>{
    const id = req.params.id;
    Education.deleteOne({_id:id})
    .then((result)=>{
        if(result.deletedCount!=0){
            res.status(200).json({
                message:'deleted successfully',
                result:result
            })
        }
        else{
            res.status(404).json({
                message:'Record not Found'
            })
        }
        
    })
});
// update
router.patch('/:id',(req,res,next)=>{
    const id = req.params.id;
    Education.where({_id:id}).update({
            collegename:req.body.collegename,
            from:req.body.from,
            to:req.body.to,
            desc:req.body.desc 
    }).then((result)=>{
        res.status(200).json({
            message:'updated successfully',
            result:result
        })
    })
    .catch(err=>{
        res.status(400).json({
            message:'error occured',
            error:err
        })
    })
});

module.exports = router;