// avatar = [],
//   name,
//   _id,
//   groupChat = false,
//   sameSender,
//   isOnline,
//   newMessageAlert,
//   index = 0,
//   handleDeleteChatOpen,

export const SampleChats = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "John Doe",
    _id: "1",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Om ",
    _id: "2",
    groupChat: false,
    members: ["1", "2"],
  },
];
export const SampleUsers = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "John Doe",
    _id: "1",
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Om ",
    _id: "2",
  },
];

export const sampleNotifications = [
  {
    sender: {
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      name: "John Doe",
    },
    _id: "1",
  },
  {
    sender: {
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      name: "Om",
    },
    _id: "2",
  },
];

export const SampleMessage = [
  {
    attachments: [
      {
        public_id: "xcidncio",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],

    content: "Message from Prachi",
    _id: "dbycbficfchrw",
    sender: {
      _id: "user._id",
      name: "Prachi",
    },
    chat: "chatId",
    createdAt: "2024-02-12T10:41:30.630Z",
  },

  {
    attachments: [
      {
        public_id: "xcidncio",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],

    content: "Message from Prachi",
    _id: "dbycbrw",
    sender: {
      _id: "user._id",
      name: "Prachi",
    },
    chat: "chatId",
    createdAt: "2024-02-12T10:41:30.630Z",
  },
];
