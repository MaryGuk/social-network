import React from "react";
import { connect } from "react-redux";
import { follow, setUsers, unfollow } from "../redux/usersReducer";
import Users from "./Users";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId));
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//   };
// };

export default connect(mapStateToProps, { follow, unfollow, setUsers })(Users);
