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

export const dashboardData = {
  users: [
    {
      name: "John Doe",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "1",
      username: "john_doe",
      friends: 20,
      groups: 5,
    },
    {
      name: "John Boi",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "2",
      username: "john_boi",
      friends: 28,
      groups: 12,
    },
    {
      name: "John Goa",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "3",
      username: "goa",
      friends: 60,
      groups: 21,
    },
  ],

  chats: [
    {
      name: "Faltus",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "1",
      groupChat: false,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "Faltus",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
    {
      name: "huhu",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "2",
      groupChat: false,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "Om",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
    {
      name: "Oops",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "3",
      groupChat: false,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "Hulaf",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
  ],

  messages: [
    {
      attachments: [],
      content: "Prachi ka msg",
      _id: "hcbaisrd",
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "Om",
      },
      chat: "chatId",
      groupChat: false,
      createdAt: "2024-02-12T10",
    },

    {
      attachments: [
        {
          url: "https://www.w3schools.com/howto/img_avatar.png",
        },
      ],
      content: "Prachi ka msg",
      _id: "iebfdu",
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "Om",
      },
      chat: "chatId",
      groupChat: false,
      createdAt: "2024-02-12T10",
    },
  ],
};
