const http = require('node:http');

const requestEveentListener = (req, res) =>{
    res.writeHead(200,{
        "content-type": "application/json",
    })
if(req.url === "/get-users"){
    const output ={
        success: true,
        message: 'User List API',
    }
    res.end(JSON.stringify(output))
}else if(req.url === "/get-products"){
    const output ={
        success: true,
        message: 'Product list API',
    }
    res.end(JSON.stringify(output))
}
else if(req.url === "/get-orders"){
    const output ={
        success: true,
        message: 'Order list API',
    }
    res.end(JSON.stringify(output))
}else if(req.url === "/get-offers"){
    const output ={
        success: true,
        message: 'Offer list API',
    }
    res.end(JSON.stringify(output))
}
else{
    const output ={
        success: true,
        message: 'All list API are done',
    }
    res.end(JSON.stringify(output))
}

console.log(req.url);
// const dummyJSON = {
//     success:true,
//     message:'success',
// }
//     console.log("Request received");
  
    // res.end(JSON.stringify(dummyJSON));
    
}
const server = http.createServer(requestEveentListener)
server.listen(8080, () => console.log("Server is up and running on port 8080"))