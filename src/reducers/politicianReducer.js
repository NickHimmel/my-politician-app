export const politicianReducer = (state = [], action) => {
    switch (action.type) {
      case 'START_FETCH_POLITICIAN':
        return {
          isFetching: true
        };
      case 'COMPLETE_FETCH_POLITICIAN':
        return {
          isFetching: false,
          politician: action.data.politician,
          votes: action.data.votes,
          bills: action.data.bills
        };
      default:
          return state;
    }
}
