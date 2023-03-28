const fs=require('fs');

fs.readFile('input1.txt',{encoding:'utf-8'},(err,data)=>{
    if(err)throw err;
    const arr1=data.toString().split('\r\n');
    // console.log(arr1);
    fs.readFile('input2.txt',{encoding:'utf-8'},(err,data)=>{
        if(err)throw err;
        const arr2=data.toString().split('\r\n');
        // console.log(arr2);
        const out=arr1.concat(arr2);
        out.sort((a,b)=>a-b);
        const ans=out.join('\n');
        //  console.log(ans);
        fs.writeFile('output.txt',ans,(err)=>{
            if(err)throw err;
            console.log("done");
        })
    })
})
