export const financesReducer = (state = [], action) => {
    switch (action.type) {
      case 'START_FETCH_FINANCES':
        return {
          isFetching: true
        };
      case 'COMPLETE_FETCH_FINANCES':
        return {
          isFetching: false,
          hasCid: true,
          summary: action.data.summary,
          contributors: action.data.contributors,
          industries: action.data.industries,
          sectors: action.data.sectors
        };
      case 'HAS_NO_CID':
        return {
          isFetching: false,
          hasCid: false
        };
      default:
          return state;
    }
}
