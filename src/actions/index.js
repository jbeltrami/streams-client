import { SIGN_IN, SIGN_OUT } from './types';

export const signIn = userId => ({
  type: SIGN_IN,
  payload: userId,
});

export const signOut = userId => ({
  type: SIGN_OUT,
  payload: userId,
});
