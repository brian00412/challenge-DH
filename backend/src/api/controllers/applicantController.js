const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;

const applicantAPIController = {
    'list': async (req, res) => {
        try {
            const applicants = await db.Applicant.findAll();
    
            let respuesta = {
                meta: {
                    status: 200,
                    total: applicants.length,
                    url: '/api/applicants'
                },
                data: applicants
            };
    
            res.json(respuesta);
        } catch (error) {
            // Manejo de errores
            console.error("Error:", error);
            res.status(500).json({ error: 'Error' });
        }
    }
    
}

module.exports = applicantAPIController;