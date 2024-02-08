module.exports = (sequelize, DataTypes )=>{
    const alias = 'Applicant';
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dni: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        telefono: {
            type: DataTypes.STRING,
            allowNull: false
        },
        urlLinkedin: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fechaNacimiento: {
            type: DataTypes.DATE,
            allowNull: false
        },
        sexo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imagen: {
            type: DataTypes.STRING,
            allowNull: false
        }
    };
    const config = {
        tableName: 'applicants',
        timestamps: false,
    };
   const Applicant = sequelize.define(alias,cols,config);
    Applicant.associate = function(models){
        Applicant.belongsTo(models.Professions,{
            as: "professions",
            foreignKey: "idProfesion"
        })
    }

    return Aplicant;
}