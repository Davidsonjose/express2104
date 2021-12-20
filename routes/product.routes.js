const express = require("express");
const multer = require("multer");
const path = require("path");
const Post = require("../models/Post");
const cloudinary = require('cloudinary').V2;

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    return callback(null, "upload/pictures");
  },
  filename: (req, file, callback) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extname = path.extname(file.originalname);
    return callback(null, file.fieldname + "-" + uniqueSuffix + extname);
  },
});

const upload = multer({ storage, limits: { fileSize: 1000000 } });

const router = express.Router();


router.get('/', async(req, res, next)=>{
  try {
    const allPost = await Post.find();
    res.render('post/list', {
      title: 'Posts',
      allPost
    });
  } catch (error) {
    next(new Error(error));
  }
});

// router.get('/:id', async(req, res, next)=>{
//   try {
//     const {id} = req.params;
//     const singlePost = await Post.findById({_id: id});
//     res.send(singlePost)
//   } catch (error) {
//     next(new Error(error));
//   }
// });


// router.get("/allPost", async(req, res, next) => {
//     try {
//        const post =  await Post.find();
//         res.send(post)
//     } catch (error) {
//         next(new Error(error))
//     }
// });

router.get("/post", (req, res, next) => {
  res.render("post/create.ejs", {
    title: "create post",
  });
});

// router.post("/post", (req, res) => {
//   let image = upload.single("image");
//   image(req, res, (err) => {
//     if (err) {
//       return new Error(error);
//     }
//     res.send({ file: req.file, body: req.body });
// });
// });

router.post("/post", upload.single("image"), async (req, res, next) => {
  try {
    const { file, body } = req;
    // const cloudFile = cloudinary.uploader.upload(file.path);
    const data = {
      image: `upload/pictures/${file?.filename}`,
      ...body,
    };
    const dataSave = await Post.create(data);
    res.send(dataSave);
  } catch (error) {
    return next(new Error(error));
  }
});

    // router.get('/:id', async(req, res, next)=>{
    //     try {
    //         const { id } = req.params;
    //         const singlePost = await Post.findById({_id: id})
    //     } catch (error) {
    //         return next(error)
    //     }
    // });



// exports.logMethod= (req, res, next)=>{
//     console.log(req.method, '/', + req.get('host'), + '/' + req.url)
// }


// res.send({ file: req.file, body: req.body });
module.exports = router;
