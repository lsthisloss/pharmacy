const { Direction} = require("../models/models");
const ApiError = require('../error/ApiError')


class DirectionController {
    async create(req, res) {
        const {name} = req.body
        const type = await Direction.create({name})
        return res.json(type)
    }

    async getAll(req, res) {
        const types = await Direction.findAll()
        return res.json(types)
    }

}

module.exports = new DirectionController()
