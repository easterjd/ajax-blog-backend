const shortID = require('short-id')
const dateFormat = require('dateformat')
let now = new Date()
const format = "mm/dd/yyyy"

function bodyVal (body) {
  const title = body.title
  const content = body.content

  if (title && typeof(title) === 'string' && title.length) {
    if (content && typeof(content) === 'string' && content.length) {
      return {
        id: shortID.generate(),
        title: title,
        content: content,
        date: dateFormat(now, format)
      }
    } else {
      return {status: 400, message: "You need content to create a blog post."}
    }
  } else {
    return {status: 400, message: "You need a title to create a blog post."}
  }
}

module.exports = bodyVal
