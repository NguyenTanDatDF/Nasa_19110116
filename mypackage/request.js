const TIME_OUT = 500
function encrypt(data)
{
    return 'data duoc ma hoa';
}
function send(url, data)
{
    const dataSend = encrypt(data);
    console.log(`Sending encrypt data ${dataSend}`);
    return dataSend;
}
module.exports= 
{
    send, 
    TIME_OUT
}
console.log('File request is loading...')