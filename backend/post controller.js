import Post from "./post model.js";

/* CREATE POST */
export const createPost = async (req, res) => {
  try {
    const { firstName, lastName, Title, text } = req.body;
    const newPost = new Post({
      firstName: firstName,
      lastName: lastName,
      Title: Title,
      text: text,
    });
    await newPost.save();
    const post = await Post.find();

    res.status(201).json(post);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};


/* READ POST */
export const getFeedPosts = async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};


/* UPDATE POSTS */
export const editPost = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, Title, text } = req.body;

    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Update post
    post.Title = Title || post.Title;
    post.text = text || post.text;
    post.lastName = lastName || post.lastName;

    // Save the updated post
    await post.save();

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


/* DELETE POST */
export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    await Post.findByIdAndDelete(id);
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};





