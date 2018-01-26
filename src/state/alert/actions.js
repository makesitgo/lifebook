import { actionCreator } from 'state/util';

const name = 'alert';

const success = actionCreator(name, 'success');
const error = actionCreator(name, 'error');
const clear = actionCreator(name, 'clear');

export { success, error, clear };
