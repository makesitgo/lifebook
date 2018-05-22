import actionCreatorFactory from 'typescript-fsa';
import { ReqresClient } from 'reqres-client';

const create = actionCreatorFactory('root');

export const setReqres = create<ReqresClient>('set reqres');
