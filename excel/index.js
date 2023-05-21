const express = require('express');
const fs = require('fs-extra')
const multer = require('multer')
const excelToJson = require('convert-excel-to-json')

const app = express()

var upload = multer({dest: "uploads/"})
app.post('/read', upload.single('file'),(req,res)=> {
    try {
        if(req.file.filename == null || req.file.filename == 'undefined'){
            res.status(400).json('No file uploaded')
        }else{
            var filePath = 'uploads/'+req.file.filename;
            const excelData = excelToJson({
                sourceFile: filePath,
                header: {
                    rows: 1,
                },
                columnToKey: {
                    "*":"{{columnHeader}}",
                },
            });
            fs.remove(filePath)
            res.status(200).json(excelData)
        }
    } catch (error) {
        res.status(500)
    }
})






app.listen(3000,()=>{
    console.log("Imeanza");
})