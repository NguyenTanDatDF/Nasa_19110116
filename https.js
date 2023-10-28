//const request = require('./request.js');
//import send from request.js;


//const response = require('./response');
//const {read} = require('./response')

//const request2 = require('./request.js')
const {request, response} = require('./mypackage');



function make_reuest(url, data)
{
    const result = request.send(url, data);
    //const result2 = request2.send(url,data);
    return response.read(result); //response.read()
}


console.log(make_reuest('google.com', 'hello world'));
