export const politicianReducer = (state = [], action) => {
    switch (action.type) {
      case 'START_FETCH_POLITICIAN':
        return {
          isFetching: true
        };
      case 'COMPLETE_FETCH_POLITICIAN':
        return {
          isFetching: false,
          data: action.data
        };
      default:
          return state;
    }
}
