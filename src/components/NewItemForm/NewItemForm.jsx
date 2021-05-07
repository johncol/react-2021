import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../Dashboard/slice';

import './NewItemForm.css';

export const NewItemForm = () => {
  const [item, setItem] = useState('');
  const dispatch = useDispatch();

  const createItem = (event) => {
    event.preventDefault();
    const isNotEmpty = item.trim().length > 0;
    if (isNotEmpty) {
      dispatch(actions.createNewItem(item.trim())).then(() => {
        setItem('');
      });
    }
  };

  return (
    <form className="field has-addons" onSubmit={createItem}>
      <div className="control">
        <input
          className="input"
          type="text"
          placeholder="Add new item"
          value={item}
          onChange={(event) => setItem(event.target.value)}
        />
      </div>
      <div className="control">
        <button className="button">Add</button>
      </div>
    </form>
  );
};
