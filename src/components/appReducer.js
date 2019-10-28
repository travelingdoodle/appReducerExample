/* eslint-disable no-case-declarations */

export const initialState = {
  isLoading: true,
  checked: true,
  error: null
};

export function appReducer(state, actionType) {
  console.log("state", state, "actionType", actionType);
  switch (actionType) {
    case "LOADING":
      return {
        ...state,
        isLoading: !state.isLoading,
        checked: !state.checked
      };

    default:
      throw new Error("Unknown action type: " + actionType);
  }
}
