const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");
const authMiddleware = require("../middleware/authMiddleware");

// Create Blog
router.post("/create", authMiddleware, async (req, res) => {
  try {
    const newBlog = new Blog({
      title: req.body.title,
      content: req.body.content,
      author: req.user.id
    });

    await newBlog.save();
    res.status(201).json({ message: "Blog created successfully" });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get All Blogs (Public)
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().populate("author", "name email");
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get Single Blog
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id)
      .populate("author", "name email");

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Update Blog
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    // 🔥 Check if logged-in user is blog owner
    if (blog.author.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not authorized" });
    }

    blog.title = req.body.title || blog.title;
    blog.content = req.body.content || blog.content;

    await blog.save();

    res.json({ message: "Blog updated successfully" });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Delete Blog
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    if (blog.author.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not authorized" });
    }

    await blog.deleteOne();

    res.json({ message: "Blog deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});


module.exports = router;
