var DCT= require('./');

process.stdin.on('data', function (data) {
    console.log(data.toString());
    var coef = (new DCT()).run(data.toString().split(','));
    console.log(coef);
});
