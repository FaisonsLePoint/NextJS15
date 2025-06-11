import sequelize from '../lib/db.config'
import createUserModel from './user.js'
import createCocktailModel from './cocktail.js'

// Synchronisation
//if(process.env.NODE_ENV === 'development'){
//    sequelize.sync({alter: true})
//}

// Objet et relation
const db = {}

db.sequelize = sequelize
db.User = createUserModel(sequelize)
db.Cocktail = createCocktailModel(sequelize)

db.User.hasMany(db.Cocktail, {foreignKey: 'user_id', onDelete: 'cascade'})
db.Cocktail.belongsTo(db.User, {foreignKey: 'user_id'})

export default db