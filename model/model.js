const data = require('./data')

function getAll (limit) {
  return limit ? data.slice(0, limit) : data
}

function getOne (id) {
  let response
  const post = data.find(post => post.id === id)
  if (post) {
    response = post
  } else {
    response = {status: 400, message:"Post ID not found"}
  }
  return response
}

function createOne (body) {
  let newPost = body
  data.push(newPost)
  return newPost
}

function updateOne (id, body) {
  let response
  const post = data.find(post => post.id === id)
  if (post) {
    post.title = body.title
    post.content = body.content
    response = post
  } else {
    response = {status: 400, message:"Post ID not found."}
  }
  return response
}

function deleteOne (id) {
  let response
  const post = data.find(post => post.id === id)
  if (post) {
    const index = data.indexOf(post)
    response = post
    data.splice(index, 1)
  } else {
    response = {status: 400, message: "Post ID not found."}
  }
  return response
}

module.exports = {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne
}
