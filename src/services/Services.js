const dataSource = require('../models');

class Services {
    constructor(modelName) {
        this.model = modelName;
    }

    async getAll() {
        return dataSource[this.model].findAll();
    }

}

module.exports = Services;