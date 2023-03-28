const fs=require('fs');

// fs.writeFile('abc.txt',"Hello World",{},(err)=>{
//     if(err){
//         throw err;
//     }
//     console.log("done");
// })

const path=require('path');
console.log(__dirname);
const f1=path.join(__dirname,'files','xyz.txt');

fs.readFile(f1,{encoding:'utf-8'},(err,data)=>{
    if(err)throw err;
    // console.log(data.toString());
    // data+="World!";
    // fs.writeFile('abc.txt',data,{},(err)=>{
    //     if(err){
    //         throw err;
    //     }
    //     console.log("done");
    // })
    console.log(data);
})