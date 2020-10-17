// import { auth, db, FirebaseTimestamp } from '../../js/firebase/index';

// export const signUp = (email, password, confirmPassword) => {
//   return async((dispatch) => {
//     // validation
//     if (email === "" || password === "" || confirmPassword === "") {
//       alert("必須項目が未入力です");
//       return false;
//     }

//     if (password !== confirmPassword) {
//       alert("パスワードが一致しません。");
//       return false;
//     }

//     return auth.createUserWithEmailAndPassword(email, password)
//       .then(result => {
//         const user = result.user
//         if (user) {
//           const uid = user.uid;
//           const timestamp = FirebaseTimestamp.now();

//           const userInitialData = {
//             created_at: timestamp,
//             email: email,
//             role: "customer",
//             updated_at: timestamp,
//           }

//           db.collection('users').doc(uid).set(userInitialData)
//             .then(() => {
//               dispatch(push('/'))
//             });
//         }
//       }
//   })
// }
// }