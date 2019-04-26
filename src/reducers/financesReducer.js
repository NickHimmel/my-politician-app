export const financesReducer = (state = [], action) => {
    switch (action.type) {
      case 'START_FETCH_FINANCES':
        return {
          isFetching: true
        };
      case 'COMPLETE_FETCH_FINANCES':
        return {
          isFetching: false
        };
      default:
          return state;
    }
}
