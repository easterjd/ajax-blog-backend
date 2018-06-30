const model = require('../model/model')
const bodyVal = require('./bodyVal')

function getAll (req,res,next) {
  const limit = req.query.limit
  const data = model.getAll(limit)
  res.status(200).json({data})
}

function getOne (req,res,next) {
  const id = req.params.id
  const data = model.getOne(id)
  if (data.status) {
    next({error: data})
  } else {
    res.status(200).json({data})
  }
}

function createOne (req,res,next) {
  const body = req.body
  const bodyCheck = bodyVal(body)
  if (bodyCheck.status) {
    next({error: bodyCheck})
  } else {
    const data = model.createOne(bodyCheck)
    res.status(201).json({data})
  }
}

function updateOne (req,res,next) {
  const id = req.params.id
  const body = req.body
  const bodyCheck = bodyVal(body)
  if (bodyCheck.status) {
    next({error: bodyCheck})
  } else {
    const data = model.updateOne(id, bodyCheck)
    res.status(200).json({data})
  }
}

function deleteOne (req,res,next) {
  const id = req.params.id
  const data = model.deleteOne(id)
  if (data.status) {
    next({error: data})
  } else {
    res.status(200).json({data})
  }
}

module.exports = {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne
}
