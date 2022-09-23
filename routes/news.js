var express = require('express');
var router = express.Router();
var db = require('../models/index')

//middlewares
const { newsExists } = require('../middlewares/news.middleware')


/* Get news deleted */

router.get('/deleted', async function (req, res, next) {

  try {

    const data = await db.News.findAll()

    const newsDeleted = await data.filter( element => {

      return element.deletedAt !== null

    })

    res.status(200).json({
      
        status: 'success',
            newsDeleted,

    });

  } catch (error) {
    console.log(error);
  }
});

/* GET news listing. */

router.get('/', async function ( req, res, next ) {

  try {

    const data = await db.News.findAll({ where: { deletedAt: null } })

    res.status(200).json({

      status: 'success',
      data,

    });

  } catch (error) {
    console.log(error);
  }

});

/* GET new */

router.get('/:id', async function ( req, res, next ) {

  try {

    const { id } = req.params
    const data = await db.News.findOne({ where: { id, deletedAt: null } })

    if ( data ) {

      res.status(200).json({
        status: 'success',
        data,
      });

    } else {

      res.status(200).json({
        status: 'error, este registro ha sido eliminado',
      });

    }

  } catch (error) {
    console.log(error);
  }
});

/* POST create new. */
router.post('/', async function (req, res, next) {
  try {

    const { name, content, image, categoryId } = req.body

    const newToAdd = await db.News.create({ name, content, image, categoryId })

    res.status(201).json({

      status: 'success',
      newToAdd,

    });

  } catch (error) {    
    console.log(error);
  }

});


/* PUT update new */
router.put('/news/:id', newsExists, async (req, res, next) => {
    const { news } = req
    const { name, content, image, categoryId, deletedAt } = req.body

    await news.update({ name, content, image, categoryId, deletedAt })

    res.status(201).json({
      status: 'success',
      news,
    });
});


/* DELETE new */

router.delete('/:id', async function (req, res, next) {

  try {

    const { id } = req.params
    
    const newToDelete = await db.News.findOne({ where: { id } })
    
    const fecha = new Date()

    newToDelete.update({ deletedAt: fecha })

    res.status(200).json({

      status: 'success',

    });
    
  } catch (error) {
    console.log(error);
  }

});


module.exports = router;
