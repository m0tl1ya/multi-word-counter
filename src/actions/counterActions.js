export const ADD_COUNTER = 'ADD_COUNTER';
export const DELETE_COUNTER = 'DELETE_COUNTER';
export const EDIT_TEXT = 'EDIT_TEXT';
export const REFRESH = 'REFRESH';

export const addCounter = () => ({
  type: ADD_COUNTER,
});

export const deleteCounter = id => ({
  type: DELETE_COUNTER,
  id,
});


export const editText = (id, words, characters) => ({
  type: EDIT_TEXT,
  id,
  words,
  characters,
});


export const refresh = () => ({
  type: REFRESH,
});
