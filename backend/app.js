const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, Content-type, Accept");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});

app.use('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: "fasfsf55",
      title: "first server-side post",
      content: "This coming from the server."
    },
    {
      id: "fadfsf55",
      title: "second server-side post",
      content: "This coming from the server."
    },
    {
      id: "fasfs655",
      title: "third server-side post",
      content: "This coming from the server."
    }
  ];
  res.status(200).json({
    message: "Post fetched successfully",
    posts: posts
  });
});

module.exports = app;
