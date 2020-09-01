// import { axios }  from 'axios'
// import { Component } from 'react';

// class Authenticate extends Component {
//   authstatus = {
//     isAuth: false
//   }
//   isAuthenticate() {
//     axios({
//       method : "GET",
//       url : "http://localhost:3000/auth/validate_token", 
//       headers : { "uid": window.localStorage.getItem('uid'), 
//                   "client": window.localStorage.getItem('client'), 
//                   "access-token" : window.localStorage.getItem('access-token') 
//                 }
//       })
//       .then((response) => {
//         console.log(response);
//         authstatus.isAuth = true;
//       })
//   }
//   return authstatus.isAuth;
// }

// export default Authenticate; 