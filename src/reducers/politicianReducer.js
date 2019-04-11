export const politicianReducer = (state = [], action) => {
    switch (action.type) {
      case 'START_FETCH_ID':
        return {
          isFetching: true
        };
      case 'COMPLETE_FETCH_ID':
        return {
          isFetching: false,
          id: action.data.id,
          state: action.data.state
        };
      case 'START_FETCH_RECORD':
        return {
          isFetching: true
        };
      case 'COMPLETE_FETCH_RECORD':
        console.log(action.data)
        return {
        };
      default:
          return state;
    }
}
