/** This is Recoil */

import { atom } from 'recoil';

const initialState = {
  userId: 1,
};

export const userState = atom({
  key: 'userState',
  default: initialState,
});
