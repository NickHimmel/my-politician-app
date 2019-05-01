export const idReducer = (state = {id: "000000000", votesmart: "000000"}, action) => {
    switch (action.type) {
      case 'SET_ID':
        return {
          id: action.data.id,
          votesmart: action.data.votesmart
        };
      default:
        return state;
    }
}
