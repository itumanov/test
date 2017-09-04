const router = require('express').Router();
const request = require('request-promise');
const storage = require('node-persist');

const WORDS_API_URL = 'https://wordsapiv1.p.mashape.com/words/';
const MASHAPE_API_KEY = 'oUEdKpAuVbmshraAdbReGBfyb7b3p13VTCZjsn9t7zMBVrUEeK';

router.get('/:word', (req, res, next) => {
  const storageItem = storage.getItemSync(req.params.word);
  if(storageItem) {
    console.log('cached');
    res.send(storageItem);
  } else {
    const definitionPromise = request({
      url: WORDS_API_URL + req.params.word + '/definitions',
      method: "GET",
      headers: {
        'X-Mashape-Key': MASHAPE_API_KEY
      }
    });
    const synonymPromise = request({
      url: WORDS_API_URL + req.params.word + '/synonyms',
      method: "GET",
      headers: {
        'X-Mashape-Key': MASHAPE_API_KEY
      }
    });
    Promise.all([definitionPromise, synonymPromise]).then(values => {
      const result = Object.assign({}, JSON.parse(values[0]), JSON.parse(values[1]));
      storage.setItemSync(req.params.word, result);
      console.log('from external');
      res.send(result);
    }, error => {
      next(error);
      // res.status(404).json({
      //   status: 'error',
      //   message: 'Word not found'
      // });
    });
  }

});

module.exports = router;
