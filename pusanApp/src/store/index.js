import { applyMiddleware, compose, createStore } from 'redux';
import { createHashHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers/index';

const history = createHashHistory();
const routeMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware({
  onError: error => {
    console.log(error);
  },
});

const middlewares = [sagaMiddleware, routeMiddleware];

export default function configureStore(initialState) {
  const store = createStore(
    reducers(history),
    initialState,
    compose(composeWithDevTools(applyMiddleware(...middlewares))),
  );

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
export { history };
