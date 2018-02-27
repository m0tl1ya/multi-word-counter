import {
  ADD_COUNTER,
  DELETE_COUNTER,
  EDIT_TEXT,
  REFRESH,
} from '../actions/counterActions';

const initialState = [
  {
    id: 0,
    words: 0,
    characters: 0,
  },
];

function counters(state = initialState, action) {
  switch (action.type) {
    case ADD_COUNTER:
      return [
        ...state,
        {
          id: state.reduce((maxId, counter) => Math.max(counter.id, maxId), -1) + 1,
          words: 0,
          characters: 0,
        },
      ];
    case DELETE_COUNTER:
      return state.filter(counter =>
        counter.id !== action.id);

    case EDIT_TEXT:
      return state.map(counter =>
        counter.id === action.id ?
        { ...counter, words: action.words, characters: action.characters } :
        counter);

    case REFRESH:
      return state.filter(counter =>
        counter.id === -1);

    default:
      return state;
  }
}

export default counters;
