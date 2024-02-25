import { faker } from "@faker-js/faker";
import {
  Bell,
  ChatCircleDots,
  Gear,
  GearSix,
  Image,
  Info,
  Key,
  Keyboard,
  Lock,
  MagnifyingGlass,
  Note,
  PencilCircle,
  Phone,
  PhoneCall,
  SignOut,
  User,
  Users,
  VideoCamera,
} from "phosphor-react";

const Profile_Menu = [
  {
    title: "Profile",
    icon: <User />,
  },
  {
    title: "Settings",
    icon: <Gear />,
  },
  {
    title: "Profile",
    icon: <SignOut />,
  },
];

const Nav_Buttons = [
  {
    index: 0,
    icon: <ChatCircleDots />,
  },
  {
    index: 1,
    icon: <Users />,
  },
  {
    index: 2,
    icon: <Phone />,
  },
];
export const ChatBar_Button = [
  {
    index: 0,
    icon: <VideoCamera />
  },
  {
    index: 1,
    icon: <Phone />,
  },
  {
    index: 2,
    icon: <MagnifyingGlass />
  },
];

const Nav_Setting = [
  {
    index: 3,
    icon: <GearSix />,
  },
];

export const callHistory=[
  {
    id: 0,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: "yesterday at 12am",
    online: false,
    incoming: false,
    outgoing: true,
  },
  {
    id: 1,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: "yesterday at 5am",
    online: true,
    incoming: true,
    outgoing: false,
  },
  {
    id: 2,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: "yesterday at 1pm",
    online: true,
    incoming: false,
    outgoing: true,
  },
]

const ChatList = [
  {
    id: 1,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "12:02",
    unread: 2,
    pinned: true,
    online: false,
  },
  {
    id: 2,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "10:35",
    unread: 3,
    pinned: false,
    online: true,
  },
  {
    id: 3,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "04:00",
    unread: 0,
    pinned: false,
    online: true,
  },
  {
    id: 4,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 5,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 6,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 7,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
];

const Chat_History = [
  {
    type: "msg",
    message: "Hi 👋🏻, How are u ?",
    incoming: true,
    outgoing: false,
  },
  {
    type: "divider",
    text: "Today",
  },
  {
    type: "msg",
    message: "Hi 👋 Panda, not bad, u ?",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    message: "Can you send me an abstarct image?",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    message: "Ya sure, sending you a pic",
    incoming: true,
    outgoing: false,
  },

  {
    type: "msg",
    subtype: "img",
    message: "Here You Go",
    img: faker.image.abstract(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    message: "Can you please send this in file format?",
    incoming: false,
    outgoing: true,
  },

  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.cats(),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "reply",
    reply: "This is a reply",
    message: "Yep, I can also do that",
    incoming: false,
    outgoing: true,
  },
];

const Message_options = [
  {
    title: "Reply",
  },
  {
    title: "React to message",
  },
  {
    title: "Forward message",
  },
  {
    title: "Star message",
  },
  {
    title: "Report",
  },
  {
    title: "Delete Message",
  },
];
 export const sharedLink=[

  {
    type: "msg",
    subtype: "link",
    preview: faker.image.cats(),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
 ]
 export const sharedDoc=[
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },

 ]

export const SettingList=[
  {
    key:0,
    icon:<Bell size={24}/>,
    title:"Notifications",
    onclick:()=>{}
  },
  {
    key:2,
    icon:<Lock size={24}/>,
    title:"Privacy",
    onclick:()=>{}
  },
  {
    key:3,
    icon:<Key size={24}/>,
    title:"Security",
    onclick:()=>{}
  },

  {
    key:4,
    icon:<Image size={24}/>,
    title:"Chat Wallpaper",
    onclick:()=>{}
  },
  {
    key:5,
    icon:<Note size={24}/>,
    title:"Request Account Info",
    onclick:()=>{}
  },

  {
    key:6,
    icon:<Info size={24}/>,
    title:"Help",
    onclick:()=>{}
  },

 ]


export {
  Profile_Menu,
  Nav_Setting,
  Nav_Buttons,
  ChatList,
  Chat_History,
  Message_options,
 
};
