//syncDatabase
const dataBase = require('./src/database/models');

const syncModels = async () => {
    try {
        await dataBase.User.sync();
        await dataBase.Vehicule.sync();
        await dataBase.Expense.sync();
        await dataBase.Tag.sync();
        await dataBase.UserCategory.sync();
        await dataBase.PredefinedCategory.sync();
        await dataBase.ExpenseTag.sync();
        await dataBase.Income.sync();
        await dataBase.IncomeTag.sync();

        console.log('[OK] Tables synchronized correctly');
    } catch (error) {
        console.log('[ERROR] Error synchronized tables', error);
    }
}

module.exports = syncModels;