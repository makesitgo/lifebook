import { createSelector } from 'reselect';

const root = 'routing';

export const getDestination = (state) => {
  const locationState = state[root].location.state;
  if (locationState) {
    const from = locationState.from.pathname;
    return from;
  }
};
