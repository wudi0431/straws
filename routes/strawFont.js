var express = require('express');
var router = express.Router();
var Fontmin = require('fontmin');
var path = require('path');
var os = require('os');
var fs = require('fs');
 




/* GET home page. */
router.get('/', function(req, res, next) {});

router.post('/', function(req, res, next) {


    var fontname =req.body.fontname;
    var srcPath = path.resolve(__dirname, '../public/fonts/'+fontname+'.ttf');

    var destPath = path.resolve(__dirname, '../public/temp/'+fontname+'');


    if(!fs.existsSync(destPath)){//不存在就创建一个
        fs.mkdirSync(destPath);
    }

    var text = req.body.text;
    var fontmin = new Fontmin()
        .src(srcPath);
    fontmin.use(Fontmin.glyph({
        text: text
    })).use(Fontmin.ttf2eot({
        clone: true
    })).use(Fontmin.ttf2woff({
        clone: true
    })).use(Fontmin.ttf2svg({
        clone: true
    })).dest(destPath);

    fontmin.run(function(err, files, stream) {

        if (err) {
            console.log(err);
            process.exit(-1);
        }

        var paths = [];
        files.forEach(function(file) {
            paths.push('/' + file.path.split('/public/')[1]);
        });

        var data = {
            text: text,
            fontname:fontname,
            paths: paths,
            destPath:destPath
        };

        res.render('fontShow', data);
    });


});

module.exports = router;