import { SWITCH_TYPE } from '../actions/modeActions';

const initialState = {
  mode: 'Words',
};

function mode(state = initialState, action) {
  switch (action.type) {
    case SWITCH_TYPE:
      return {
        mode: action.typeName,
      };

    default:
      return state;
  }
}

export default mode;
