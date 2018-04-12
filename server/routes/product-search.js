const router = require('express').Router();
const config = require('../config');

const algoliaSearch = require('algoliasearch');
const client = algoliaSearch(config.algoAppId,config.algoAppKey);
const index = client.initIndex('ansaramazon');



router.get('/',(req,res,next)=>{
    if(req.query.query){
        index.search({
            query: req.query.query,
            page: req.query.page
        },(err, content)=>{
            res.json({
                success: true,
                message: 'Here is your search',
                status: 200,
                content: content,
                search_result: req.query.query
            });
        });
    }
});


module.exports = router;