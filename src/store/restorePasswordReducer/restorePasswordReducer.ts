const initialState = {}

type InitialStateType = typeof initialState

const restorePasswordReducer = (state = initialState, action: any): InitialStateType => {
   switch (action.type) {
      default:
         return state
   }
}

export default restorePasswordReducer
