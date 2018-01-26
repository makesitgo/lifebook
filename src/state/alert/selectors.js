const root = 'alert';

export const getMessage = (state) => state[root].message;

export const getType = (state) => state[root].type;
