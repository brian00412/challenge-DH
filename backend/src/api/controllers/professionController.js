const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;

const professionAPIController = {
    'list': async (req, res) => {
        try {
            const professions = await db.Profession.findAll();
    
            let respuesta = {
                meta: {
                    status: 200,
                    total: professions.length,
                    url: '/api/professions'
                },
                data: professions
            };
    
            res.json(respuesta);
        } catch (error) {
            // Manejo de errores
            console.error("Error:", error);
            res.status(500).json({ error: 'Error' });
        }
    }
    
}

module.exports = professionAPIController;