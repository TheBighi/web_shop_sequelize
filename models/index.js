const path = require('path')
const sequelize = require('../util/db')
const fs = require('fs')

const models = {}

module.exports = (() => {
    if (!Object.keys(models).length) {
        const files = fs.readdirSync(__dirname)
        const excludeFiles = ['.', '..', 'index.js']

        for (const file of files) {
            if (!excludeFiles.includes(file) && path.extname(file) === '.js') {
                const modelPath = path.join(__dirname, file)
                const model = require(modelPath)

                models[model.name] = model
            }
        }

        Object.values(models).forEach(model => {
            if (typeof model.associate === 'function') {
                model.associate(models)
            }
        })

        models.sequelize = sequelize
    }

    return models
})()