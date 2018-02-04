import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visibleExpenses);
// });

// store.dispatch(addExpense({ description: 'Water Bill', amount: 4500, note: 'January'}));
// store.dispatch(addExpense({ description: 'Gas Bill', amount: 247, note: 'January', createAt: 1000}));
// store.dispatch(addExpense({ description: 'Rent', amount: 109500, note: 'January'}));
// store.dispatch(addExpense({ description: 'Electric Bill', amount: 189, note: 'January'}));

//store.dispatch(setTextFilter('Gas'));

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// }, 3000);

//store.dispatch(setTextFilter('gas'));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>    
);

ReactDOM.render(jsx, document.getElementById('app'));

