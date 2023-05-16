const express = require("express")
const articleModel =require('../models/articleModel')
const cors = require('cors');
const router = express.Router();

router.use(express.json());
router.use(cors());

router.get("/getArticles", async (req, res)=>{ 
    articleModel.find({}, (err, result) =>{
        if (err){
            res.json(err);
        }else{
            res.json(result);
        }
    })

});
router.get("/getArticles/:id", async (req, res) => {
  const articleId = req.params.id;

  articleModel.findById(articleId, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});



// router.post("/addArticles",async (req, res ) => {
//     const articles = req.body;
//     const newArticles = new articleModel(articles);
//     await newArticles.save();

//     res.json(articles);
// });

router.post('/addArticles', async (req, res) => {
    const { title, image, paragraph } = req.body;
    
    if (!title || !image || !paragraph) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    try {
      const newArticle = new articleModel({
        title,
        image,
        paragraph,
        createdAt: new Date(), // Add the current date and time
      });
  
      await newArticle.save();
      res.json(newArticle);
    } catch (err) {
      res.status(500).json({ message: 'Error adding article', error: err });
    }
  });
  

// router.post("/updateArticle/:id",async(req,res)=>{
//     const newTitle = req.body.newTitle;
//     const newImage = req.body.newImage;
//     const newPara = req.body.newPara;
//     const id= req.body.id;
//     console.log(newTitle,newImage,newPara,id);

//     try{
//         let filter ={_id: id}
//         let update ={
//             $set :{'title':newTitle,'image': newImage, 'paragraph':newPara,},
//         }
//         await articleModel.findOneAndUpdate(filter,update);
//     }
//     catch(err){
//         console.log(err);
//     }
//     res.send('updated')
// })


router.post('/updateArticle/:id', async (req, res) => {
    const { id } = req.params;
    const { newTitle, newImage, newPara } = req.body;
  
    try {
      const updatedArticle = await articleModel.findByIdAndUpdate(
        id,
        {
          title: newTitle,
          image: newImage,
          paragraph: newPara,
        },
        { new: true }
      );
  
      res.json(updatedArticle);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while updating the article' });
    }
  });



// router.post('/updateArticle/:id',async(req,res)=>{
//     console.log(req.params,'dgahdja')
//     console.log(req.body,'vasdajhdsja')
    // articleModel.findByIdAndUpdate(req.params.id, function( todo ,err) {
    //     if (!todo)
    //         res.status(404).send("data is not found");
    //     else

    //         articleModel.title = req.body.title;
    //         articleModel.image = req.body.image;
    //         articleModel.paragraph = req.body.paragraph;
    //         articleModel.save().then(articleModel => {
    //             res.json('Todo updated!');
    //         })
    //         .catch(err => {
    //             res.status(400).send("Update not possible");
    //         });
    // });
//     try{   await articleModel.findByIdAndUpdate(req.params.id, 
//         {$set:{
//                 title : req.body.title,
//                 image :req.body.image,
//                 paragraph :req.body.paragraph}},( todo ,err)=> {
        
//             // todo.save();
//     });}
    
//     catch{(err => {
//         res.status(400).send("Update not possible");
//         console.log(err);
//     });}
//     res.json('Todo updated!');


// });

// router.post('/deleteArticle/:id', async (req, res) => {
//     const { id } = req.params;
  
//     try {
//       await articleModel.findByIdAndDelete(id);
//       res.json({ message: 'Article deleted successfully' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'An error occurred while deleting the article' });
//     }
//   });

// Delete an article by ID
router.delete('/deleteArticle/:id', async (req, res) => {
    const id = req.params.id;
  
    try {
      const deletedArticle = await articleModel.findByIdAndDelete(id);
      if (!deletedArticle) {
        return res.status(404).json({ error: 'Article not found' });
      }
      res.json({ message: 'Article deleted successfully' });
    } catch (error) {
      console.error('Error deleting article:', error);
      res.status(500).json({ error: 'Server error' });
    }
  });
module.exports = router;