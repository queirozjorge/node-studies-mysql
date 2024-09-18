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

    async update(req, res) {
        const { id } = req.params;
        const data = req.body;

        try {
            const isUpdated = await this.entityService.update(data, Number(id));
            if(!isUpdated) {
                return res.status(400).json({ mensagem: `Registro nao atualizado`})
            }
            return res.status(200).json({ mensagem: `Atualizado com sucesso`})
        } catch (error) {
            
        }
    }

}

module.exports = Controller;