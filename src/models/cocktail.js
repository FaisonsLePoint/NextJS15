/*** Import des modules nécessaires */
import { DataTypes } from "sequelize"

/*** Définition du model Cocktail */
export default (sequelize) => {
    const Cocktail = sequelize.define('Cocktail', {
        id:{
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
        nom:{
            type: DataTypes.STRING(100),
            defaultValue: '',
            allowNull: false
        },
        description:{
            type: DataTypes.TEXT,
            defaultValue: '',
            allowNull: false,
        },
        recette:{
            type: DataTypes.TEXT,
            defaultValue: '',
            allowNull: false,
        }
    }, { paranoid: true})

    return Cocktail
}