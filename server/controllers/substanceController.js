const { Substance, Drug, User } = require("../models/models");
const ApiError = require('../error/ApiError')

class SubstanceController {
    async create(req, res, next) {
        try {
            let {name, direction_id, pharmaGroup, pharmaAction, forUse, methodOfApply, sideEffect, contraindications, dailyDose} = req.body
            const substance = await Substance.create({name, direction_id, pharmaGroup, pharmaAction, forUse, methodOfApply, sideEffect, contraindications, dailyDose});
            return res.json(substance)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

  

    async getAll(req, res) {
        let {direction_id, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        
        let offset = page * limit - limit
        let substances;
        if (!direction_id) {
            substances = await Substance.findAndCountAll({limit, offset})
        }
     
        if (direction_id) {
            substances = await Substance.findAndCountAll({where:{direction_id}, limit, offset})
        }
       
        return res.json(substances)
    }


    async getOne(req, res) {
        const {id} = req.params
        const substance = await Substance.findOne(
            {
                where: {id},
                include: [{model: Drug}]
            },
        )
        return res.json(substance)
    }
}

module.exports = new SubstanceController()
