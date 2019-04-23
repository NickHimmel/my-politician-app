export const idReducer = (state = [], action) => {
    switch (action.type) {
      case 'START_FETCH_ID':
        return {
          isFetching: true
        };
      case 'COMPLETE_FETCH_ID':
        return {
          isFetching: false,
          state: action.data.state,
          district: action.data.district,
          house: action.data.house,
          senate: action.data.senate
        };
      default:
          return state;
    }
}
