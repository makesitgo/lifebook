import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { State } from './types';
import { push, clear } from './actions';

const initialState: State = {
  alerts: []
}

export default reducerWithInitialState(initialState)
  .case(clear, state => initialState)
  .case(push, (state, alert) => ({
    alerts: [...state.alerts, alert]
  }));
