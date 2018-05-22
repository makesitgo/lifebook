import actionCreatorFactory from 'typescript-fsa';
import { Alert } from './types';

const create = actionCreatorFactory('alert');

export const push = create<Alert>('push');
export const clear = create('clear');
