export const ADD_COUNTER = 'ADD_COUNTER';
export const DELETE_COUNTER = 'DELETE_COUNTER';
export const EDIT_COUNTER = 'EDIT_COUNTER';
export const REFRESH = 'REFRESH';

export const addCounter = () => ({
  type: ADD_COUNTER,
});

export const deleteCounter = id => ({
  type: DELETE_COUNTER,
  id,
});


export const editCounter = (id, text, words, characters, allCharacters, isCounted) => ({
  type: EDIT_COUNTER,
  id,
  text,
  words,
  characters,
  allCharacters,
  isCounted,
});


export const refresh = () => ({
  type: REFRESH,
});
