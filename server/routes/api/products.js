const express = require('express')
const mongodb = require('mongodb')
const router = express.Router()

const config = require('config')
const db = config.get("mongoURI");

//Load database ONLY. Not Collections
async function loadCollection() {
    const client = await mongodb.MongoClient.connect(db, { useNewUrlParser: true } )

    return client.db('dn_products');
}

//@route GET /processors , Show Items
router.get('/', async (req, res) => {
    const processor = await loadCollection();
    res.send(await processor.collection('processors').find({}).toArray());
})

module.exports = router;