export const idReducer = (state = {id: "000000000"}, action) => {
    switch (action.type) {
      case 'SET_ID':
        return {
          id: action.data.id
        };
      default:
          return state;
    }
}
