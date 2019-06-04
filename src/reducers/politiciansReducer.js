export const politiciansReducer = (state = [], action) => {
    switch (action.type) {
      case 'START_FETCH_POLITICIANS':
        return {
          isFetching: true
        };
      case 'COMPLETE_FETCH_POLITICIANS':
        return {
          isFetching: false,
          state: action.data.state,
          district: action.data.district,
          house: action.data.house,
          senate: action.data.senate
        };
      case 'CLOSE_POLITICIAN':
        return {
          isFetching: undefined
        };
      default:
          return state;
    }
}
