import React from 'react';
import { Link } from 'react-router';

// const Greeting = ({ currentUser, logout })
//     if (this.props.currentUser) {
//       return(
//         <nav>
//           <h1>Hi, {this.props.currentUser}!</h1>
//           <button onClick={ this.props.logout() }>Log Out</button>
//         </nav>
//       );
//     } else {
//       return(
//         <nav>
//           <Link to="/login">Log In</Link>
//           <Link to="/signup">Sign Up</Link>
//         </nav>
//       );
//     }
//   }
//
// }

const Greeting = ({ currentUser, logout }) => {
    if (currentUser) {
      return(
        <nav>
          <h1>Hi, {currentUser.username}!</h1>
          <button onClick={logout}>Log Out</button>
        </nav>
      );
    } else {
      return(
        <nav>
          <Link to="/login">Log In</Link>
          <br />
          <Link to="/signup">Sign Up</Link>
        </nav>
      );
    }
  };

export default Greeting;
