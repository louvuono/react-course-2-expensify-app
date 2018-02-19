import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;
        const expense = { description, note, amount, createdAt };
    
        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
            id: ref.key,
            ...expense
            }));
        });
    };
};

// export const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
//     type: 'ADD_EXPENSE',
//     expense: {
//         id: uuid(),
//         description,
//         note,
//         amount,
//         createdAt
//     }
// });

export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch) => {         
        // remove expense
        return database.ref(`expenses/${id}`).remove().then(() => {
            console.log('Removing expense');
            dispatch(removeExpense({ id }));
        });
    };
};
  
// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense = (id, updates) => {
    return (dispatch) => {         
        // edit expense
        return database.ref(`expenses/${id}`).update(updates).then(() => {
            console.log('Updating expense');
            dispatch(editExpense(id, updates));
        });
    };
};

// Set Expenses
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetExpenses = () => {
    return (dispatch) => {         
        // Read expenses
        return database.ref('expenses').once('value').then((snapshot) => {
                console.log(snapshot.val());
                const expenses = [];
                snapshot.forEach((childSnapshot) => {
                    expenses.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    });
                });
                dispatch(setExpenses(
                    expenses 
                ));
        });
    };
};
