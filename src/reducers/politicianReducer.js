export const politicianReducer = (state = [], action) => {
    switch (action.type) {
      case 'START_FETCH_POLITICIAN':
        return {
          isFetching: true
        };
      case 'COMPLETE_FETCH_POLITICIAN':
        console.log(action.data)
        return {
          isFetching: false,
          politician: action.data,
          id: action.data.id
        };
      default:
          return state;
    }
}
