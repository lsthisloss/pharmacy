const { Drug} = require("../models/models");
const ApiError = require('../error/ApiError')


class DrugController {
    async create(req, res, next) {
        try {
            let {name, country, form, dose, count, price} = req.body
            const drug = await Drug.create({name, country, form, dose, count, price});
            return res.json(drug)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const drugs = await Drug.findAll()
        return res.json(drugs)
    }

    async getOne(req, res) {
        const {id} = req.params
        const drugs = await Drug.findOne(
            {
                where: {id},
            },
        )
        return res.json(drugs)
    }
}

module.exports = new DrugController()
