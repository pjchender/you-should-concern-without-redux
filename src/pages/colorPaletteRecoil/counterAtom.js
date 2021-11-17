import { atom, selectorFamily } from 'recoil';

const initialState = {
  red: 0,
  blue: 0,
  green: 0,
};

export const counterState = atom({
  key: 'counterState',
  default: initialState,
});

export const colorCounterSelector = selectorFamily({
  key: 'colorCounterSelector',
  get:
    (color) =>
    ({ get }) => {
      const state = get(counterState);
      return state[color];
    },
});
