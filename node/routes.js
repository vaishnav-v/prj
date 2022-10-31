var express = require('express')
const Joi = require('joi')
const { insertItem, getItems, updateQuantity } = require('./db')

const router = express.Router()
const itemSchema = Joi.object().keys({
    name: Joi.string(),
    quantity: Joi.number().integer().min(0)
})

