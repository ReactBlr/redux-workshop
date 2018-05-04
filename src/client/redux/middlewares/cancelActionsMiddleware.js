const actions = {};

const setAction = action => {
  actions[action.type] = {
    phase: action.meta["redux-pack/LIFECYCLE"],
    transactionId: action.meta["redux-pack/TRANSACTION"]
  };
};

const getAction = action => actions[action.type];

const isStartAction = action => action.meta["redux-pack/LIFECYCLE"] === "start";

const isSuccessAction = action =>
  action.meta["redux-pack/LIFECYCLE"] === "success";

const isStaleAction = newAction => {
  const oldAction = getAction(newAction);
  return (
    oldAction &&
    oldAction.transactionId !== newAction.meta["redux-pack/TRANSACTION"]
  );
};

const isActionPresentInStartPhase = newAction => {
  const oldAction = getAction(newAction);
  return oldAction.phase === "start";
};

const isReduxPackAction = action =>
  action && Object.keys(action).includes("meta");

export default () => next => action => {
  if (isReduxPackAction(action)) {
    if (isStartAction(action)) {
      if (isStaleAction(action)) delete actions[action.type];
      setAction(action);
      next(action);
    } else if (isSuccessAction(action)) {
      if (isActionPresentInStartPhase(action)) {
        if (isStaleAction(action)) {
          next({
            ...action,
            payload: null
          });
        } else {
          delete actions[action.type];
          next(action);
        }
      } else {
        next(action);
      }
    }
  } else {
    next(action);
  }
};
