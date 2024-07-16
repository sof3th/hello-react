import { useReducer } from 'react';

function reducer(state, action) {
  if (action.type === 'reset_form') return action.initialForm;
  else if (action.type === 'change_form')
    return {
      ...state,
      [action.form.name]: action.form.value,
    };
}

export default function useInputs(initialForm) {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const myDispatch = (e) => {
    e.initialForm = initialForm;
    dispatch(e);
  };
  return [state, myDispatch];
}
