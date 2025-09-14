exports.getPosts = (req, res, next) => {
  console.log("get posts is called");
  res.status(200).json({
    posts: [
      {
        title: "First Post",
        content: "This is the first post!",
      },
    ],
  });
};

exports.createPost = (req, res, next) => {
  console.log("create posts is called");
  //Create post in DB
  const { title, content } = req;
  res.status(201).json({
    message: "Post created successfully!",
    post: { id: new Date().toISOString(), title: title, content: content },
  });
};
