
import firebase from 'firebase';
//isko define krne k bd isko reducer mein bh define krenga yahn se
import { LOGIN_USER_FAIL, EMAIL_CHANGED , PASSWORD_CHANGED , LOGIN_USER_SUCCESS, LOGIN_USER } from './types';
import { Actions } from 'react-native-router-flux';
//here define the actionCreator of email



export const emailChanged = (text) => {
      return {
        type: EMAIL_CHANGED,
        payload: text
      };
    };

    export const passwordChanged = (text) => {
      return {
        type: PASSWORD_CHANGED,
        payload: text
      };
    };

    export const loginUser = ({ email, password }) => {
      return (dispatch) => {
        dispatch({ type: LOGIN_USER });

        firebase.auth().signInWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch((error) => {
            console.log(error);

            firebase.auth().createUserWithEmailAndPassword(email, password)
              .then(user => loginUserSuccess(dispatch, user))
              .catch(() => loginUserFail(dispatch));
          });
      };
    };

    const loginUserFail = (dispatch) => {
      dispatch({ type: LOGIN_USER_FAIL });
    };

    const loginUserSuccess = (dispatch, user) => {
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
      });
      	Actions.employeelist();
      };
