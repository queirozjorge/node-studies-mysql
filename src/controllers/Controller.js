class Controller {
    constructor(entityService) {
        this.entityService = entityService;
    }

    async getAll(req, res) {
        try {
            const list = await this.entityService.getAll();
            return res.status(200).json(list);
        } catch (error) {
            
        }
    }

}

module.exports = Controller;