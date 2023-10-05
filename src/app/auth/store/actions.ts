import { createActionGroup, props } from '@ngrx/store';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { CurrentUserInterface } from './../../shared/types/currentUser.interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
export const authActions = createActionGroup({
  source: 'auth',
  events: {
    Register: props<{ request: RegisterRequestInterface }>(),
    'Register Success': props<{ currentUser: CurrentUserInterface }>(),
    'Register Failure': props<{ errors: BackendErrorsInterface }>(),
  },
});

// the same as highter
// export const register = createAction(
//   '[Auth] Register',
//   props<{ request: RegisterRequestInterface }>()
// );
// export const registerSuccess = createAction(
//   '[Auth] RegisterSuccess',
//   props<{ request: RegisterRequestInterface }>()
// );
// export const registerFailure = createAction(
//   '[Auth] RegisterFailure',
//   props<{ request: RegisterRequestInterface }>()
// );
