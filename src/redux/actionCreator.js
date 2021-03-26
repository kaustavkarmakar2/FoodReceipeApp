export const addUser=()=>{
  return dispatch => {
    fetch('')
    .then(r=>r.json())
    .then(recipe => dispatch({
      type: 'FETCH_RECIPE',
      payload: recipe
    }))
  }
}

