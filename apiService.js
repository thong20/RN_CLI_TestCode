import React from 'react';
import {Auth} from './Setup';

export const SignUpUser = (email, password) => {
  return new Promise((resolve, reject) => {
    Auth()
      .createUserWithEmailAndPassword(email, password) // return Promise, readmore:
      // https://firebase.google.com/docs/reference/js/firebase.auth.Auth?authuser=0#createuserwithemailandpassword
      .then(() => {
        resolve('Sign Up Successfully!');
        // hàm resolve() sẽ lưu string 'Sign Up Successfully!' vào Promise
        // Vậy khi ta gọi hàm SignUpUser(), truyền vào 'email, password' thì
        // * Trường hợp SignUp thành công, ta sẽ có dữ liệu là 1 string 'Sing Up Successfully!'
      })
      .catch((err) => reject(err));
  });
};
export const SignInUser = (email, password) => {
  return new Promise((resolve, reject) => {
    Auth()
      .signInWithEmailAndPassword(email, password) // return Promise
      .then((data) => {
        resolve(data);
      })
      .catch((err) => reject(err));
  });
};
export const SignOutUser = (email, password) => {
  return new Promise((resolve, reject) => {
    Auth()
      .signOut() // return Promise
      .then(() => {
        resolve('Sign Out Successfully!');
      })
      .catch((err) => reject(err));
  });
};
