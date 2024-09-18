const dataSource = require('../models');

class Services {
    constructor(modelName) {
        this.model = modelName;
    }

    async getAll() {
        return dataSource[this.model].findAll();
    }

    async update(data, id) {
        const dataUpdated = dataSource[this.model].update(data, {
            where: {id: id}
        });
        if(dataUpdated[0] === 0) {
            return false;
        }
        return true;
    }

}

module.exports = Services;