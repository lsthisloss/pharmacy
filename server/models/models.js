const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Direction = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true},
    name: {type: DataTypes.STRING,  allowNull: false}
})

const Substance = sequelize.define('tblsubstance', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    direction_id: {type: DataTypes.INTEGER,references: {model: Direction, key: 'id'}, allowNull: false},
    pharmagroup: {type: DataTypes.STRING, allowNull: false},
    pharmaaction: {type: DataTypes.STRING, allowNull: false},
    foruse: {type: DataTypes.STRING, allowNull: false},
    methodofapply: {type: DataTypes.STRING, allowNull: false},
    sideeffect: {type: DataTypes.STRING, allowNull: false},
    contraindications: {type: DataTypes.STRING, allowNull: false},
    dailydose: {type: DataTypes.STRING, allowNull: false}
})

Direction.hasMany(Substance, {foreignKey: 'direction_id'});
Substance.belongsTo(Direction, {foreignKey: 'id'}); 

const Drug = sequelize.define('tbldrug', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    substance_id: {type: DataTypes.INTEGER,references: {Model: Substance, key: 'id'}, allowNull: false},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    country: {type: DataTypes.STRING, allowNull: false},
    form: {type: DataTypes.STRING, allowNull: false},
    dose: {type: DataTypes.STRING, allowNull: false},
    count: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.STRING, allowNull: false}
})

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    username: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

Substance.hasMany(Drug, {foreignKey: 'substance_id'});
Drug.belongsTo(Substance, {foreignKey: 'id'}); 


module.exports = {
 User, Substance, Drug, Direction
}
