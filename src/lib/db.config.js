/*** Import des modules nécessaires */
import { Sequelize } from 'sequelize'

/*** Connexion à la base de données */
const sequelize = new Sequelize(
    process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: "mariadb",
        logging: process.env.NODE_ENV === 'development' ? console.log : false
    }
)

export default sequelize