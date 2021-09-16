const reset = (
  setActionState,
  setOperatorState,
  setResultScreenState,
  setOperationScreenState
) => {
  setActionState(process.env.REACT_APP_ACTION_STATE);
  setOperatorState(process.env.REACT_APP_OPERATOR_STATE);
  setResultScreenState(process.env.REACT_APP_RESULT_SCREEN_STATE);
  setOperationScreenState(process.env.REACT_APP_OPERATION_SCREEN_STATE);
};
export default reset;