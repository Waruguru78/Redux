// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Todo Application</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
}

export default App;
