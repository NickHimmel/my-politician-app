export const idReducer = (state = [], action) => {
    switch (action.type) {
      case 'START_FETCH_ID':
        return {
          isFetching: true
        };
      case 'COMPLETE_FETCH_ID':
        return {
          isFetching: false,
          id: action.data.id,
          name: action.data.name,
          district: action.data.district,
          nextElection: action.data.nextElection,
          state: action.data.state
        };
      default:
          return state;
    }
}
