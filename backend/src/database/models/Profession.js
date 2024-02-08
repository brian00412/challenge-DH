module.exports = (sequelize, DataTypes )=>{
    const alias = 'Profession';
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        }
    };
    const config = {
        tableName: 'professions',
        timestamps: false,
    };
   const Profession = sequelize.define(alias,cols,config);
    Profession.associate = function(models){
        Profession.hasMany(models.Applicant,{
            as: "applicants",
            foreignKey: "idProfesion"
        })
    }

    return Profession;
}