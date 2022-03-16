var express = require('express');
var router = express.Router();
var multer = require('multer');

const storage = multer.diskStorage({
  destination (req, file, callback) {
    callback(null, 'public/images/uploads');
  },

  filename (req, file, callback) {
    const [filename, extension] = file.originalname.split('.');
    callback(null, filename + '-' + Date.now() + '.' + extension);
  }
});

const upload = multer({ storage });

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('user', { route: 'user' });
});

router.post('/cadastrar', upload.single('arquivo'), function(req,res){
  var {file, body} = req;
  console.log(file,body);
  return res.redirect('/catalog'); 
} )


module.exports = router;
