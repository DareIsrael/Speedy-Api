const mongoose = require ("mongoose")
const Post = require ("../models/postModels")







const getPost = async (req, res) => {
    const posts = await Post.find({}).sort({createdAt: -1})
    res.status(200).json(posts)
}

const createPost = async (req, res) => {
    const {image, name, price} = req.body

    try {
    const post = await Post.create({image, name, price})
    res.status(200).json(post)
    } catch (error) {
   res.status(400).json({error: error.message})
    }
}

const getPostId = async (req, res) => {
    const posts = await Post.findOneAndDelete({}).sort({createdAt: -1})
    res.status(200).json(posts)
}



module.exports = { getPost, getPostId, createPost }
