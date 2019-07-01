const calculate = (state = {num:0, result:0, pre_num:0}, action) => {
  console.log('calReducer', action);
  switch (action.type) {
    case 'ADD_CAL':
      return {...state, result: action.result};

      case 'MINUS_CAL':
        console.log('reducer state', {...state, result: action.result});
        return{...state, result: action.result};

      case 'Total_CAL':
        console.log('reducer state', {...state, result: action.result});
        return{...state, result: action.result};

      case 'Pre_CAL':
        console.log('reducer state', {state, pre_num: action.result});
        return{...state, pre_num: action.result};

    default:
      return state;
  }
};

export default calculate;