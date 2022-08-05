import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
  _state: {
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Yura" },
        { id: 2, name: "Slava" },
        { id: 3, name: "Mother" },
        { id: 4, name: "Yuli" },
        { id: 5, name: "Dasha" },
        { id: 6, name: "Pasha" },
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 1, message: "How is your react?" },
        { id: 1, message: "How is your life?" },
        { id: 1, message: "How is your work? " },
        { id: 1, message: "How are you?" },
        { id: 1, message: "How are your wife?" },
      ],

      newMessageBody: "",
    },
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 15 },
        { id: 1, message: "It is my first post", likesCount: 20 },
      ],
      newPostText: "",
    },
  },
  _rerenderEntireTree() {},

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._rerenderEntireTree(this._state);
  },
};

export default store;
