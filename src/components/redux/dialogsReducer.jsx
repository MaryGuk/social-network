const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
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
};
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      };

    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messages: [...state.messages, { id: 6, message: body }],
      };
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({
  type: "SEND_MESSAGE",
});

export const updateNewMessageBodyCreator = (body) => {
  return {
    type: "UPDATE_NEW_MESSAGE_BODY",
    body: body,
  };
};

export default dialogsReducer;
