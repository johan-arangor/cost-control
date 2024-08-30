//syncDatabase
const dataBase = require('./src/database/models');

const syncModels = async () => {
    try {
        await dataBase.models.User.sync();
        await dataBase.models.Vehicule.sync();
        await dataBase.models.Expense.sync();
        await dataBase.models.Tag.sync();
        await dataBase.models.UserCategory.sync();
        await dataBase.models.PredefinedCategory.sync();
        await dataBase.models.ExpenseTag.sync();
        await dataBase.models.Income.sync();
        await dataBase.models.IncomeTag.sync();
        await dataBase.models.Income.sync();
        await dataBase.models.Income.sync();
        await dataBase.models.Income.sync();

        console.log('[OK] Tables synchronized correctly');
    } catch {
        console.log('[ERROR] Error synchronized tables', error);
    }
}

syncModels().then(() => {
    process.exit(0);
});