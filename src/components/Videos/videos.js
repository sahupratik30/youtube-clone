const videos = [
  {
    thumbnail:
      "https://i.ytimg.com/vi/0JeJTGjgcco/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLADQ1L3FSUnFpd0chqnyZM3FbRQIA",
    avatar:
      "https://yt3.ggpht.com/ytc/AKedOLRlgc2WX_PlndJ73B8Uv34TZjfzxqTFwLVJIF0l2w=s68-c-k-c0x00ffffff-no-rj",
    description: "50 Free Tools and Resources To Create Awesome UI Designs",
    channel: "Adrian Twarog",
    details: "17K views • 1 year ago",
    id: Math.floor(Math.random() * Date.now()),
  },
  {
    thumbnail:
      "https://i.ytimg.com/vi/mrHNSanmqQ4/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCMPtRb0i0EJd5cOxKYDtybU4Hh5g",
    avatar:
      "https://yt3.ggpht.com/ytc/AKedOLRkU2-RDemsCSaVVsPwc-yxtWruCB1Gr2VIgQKOKg=s68-c-k-c0x00ffffff-no-rj",
    description:
      "MERN Stack Course - ALSO: Convert Backend to Serverless with MongoDB Realm",
    channel: "freeCodeCamp.org",
    details: "123K views • 3 months ago",
    id: Math.floor(Math.random() * Date.now()),
  },
  {
    thumbnail:
      "https://i.ytimg.com/vi/8FlWUa04f2g/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA43Chxni3T0j06ocBIYTY3ySONdw",
    avatar:
      "https://yt3.ggpht.com/ytc/AKedOLS17PyyeccjZ4IjxleuHGt_3OSSgBFAIXCSFf0ecQ=s68-c-k-c0x00ffffff-no-rj",
    description: "Avoid These HTML & CSS Mistakes At All Costs",
    channel: "Aaron Jack",
    details: "27K views • 1 week ago",
    id: Math.floor(Math.random() * Date.now()),
  },
  {
    thumbnail:
      "https://i.ytimg.com/vi/QiTq5WrWoJw/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBisSbcpiCV7vO5vkObC_bXp9vK5g",
    avatar:
      "https://yt3.ggpht.com/FjeN785fVWx0Pr6xCbwPhhq8hHj_gocc3FygDXYDEQgp2gE_FQzRNsFHFAjQ3oE-VJaeGR1a=s68-c-k-c0x00ffffff-no-rj",
    description:
      "🔴 Let's build SLACK 2.0 with REACT.JS! (REDUX, Styled components & Firebase Hooks) by Sonny Sangha Streamed 5 months ago 3 hours, 23 minutes 102,070 views",
    channel: "Sonny Sangha",
    details: "102K views • Streamed 5 months ago",
    id: Math.floor(Math.random() * Date.now()),
  },
  {
    thumbnail:
      "https://i.ytimg.com/vi/CXa0f4-dWi4/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLANhRxfK9dU7Tc9iXqT6d2LrX_kew",
    avatar:
      "https://yt3.ggpht.com/ytc/AKedOLTxiU05Tl0IIyXgg8FF3lxx9oRBmQYwdW_XjCqn=s68-c-k-c0x00ffffff-no-rj",
    description:
      "React Sidebar Navigation Menu Tutorial - Beginner React JS Project Using Hooks & Router by Brian Design 11 months ago 36 minutes 197,210 views",
    channel: "Brian Design",
    details: "197K views • 11 months ago",
    id: Math.floor(Math.random() * Date.now()),
  },
  {
    thumbnail:
      "https://i.ytimg.com/vi/O7WbVj5apxU/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBD9sfn_raif9Vt0UAylmeg-IApnA",
    avatar:
      "https://yt3.ggpht.com/ytc/AKedOLSB-oR-xmvVSZXJ3gbK12uvv0AJUvajwxMie_R_uw=s68-c-k-c0x00ffffff-no-rj",
    description:
      "Build Glass Website with HTML and CSS Tutorial by Dev Ed 6 months ago 43 minutes 513,203 views",
    channel: "Dev Ed",
    details: "513K views • 6 months ago",
    id: Math.floor(Math.random() * Date.now()),
  },
  {
    thumbnail:
      "https://i.ytimg.com/vi/0JeJTGjgcco/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLADQ1L3FSUnFpd0chqnyZM3FbRQIA",
    avatar:
      "https://yt3.ggpht.com/ytc/AKedOLRlgc2WX_PlndJ73B8Uv34TZjfzxqTFwLVJIF0l2w=s68-c-k-c0x00ffffff-no-rj",
    description: "50 Free Tools and Resources To Create Awesome UI Designs",
    channel: "Adrian Twarog",
    details: "17K views • 1 year ago",
    id: Math.floor(Math.random() * Date.now()),
  },
  {
    thumbnail:
      "https://i.ytimg.com/vi/mrHNSanmqQ4/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCMPtRb0i0EJd5cOxKYDtybU4Hh5g",
    avatar:
      "https://yt3.ggpht.com/ytc/AKedOLRkU2-RDemsCSaVVsPwc-yxtWruCB1Gr2VIgQKOKg=s68-c-k-c0x00ffffff-no-rj",
    description:
      "MERN Stack Course - ALSO: Convert Backend to Serverless with MongoDB Realm",
    channel: "freeCodeCamp.org",
    details: "123K views • 3 months ago",
    id: Math.floor(Math.random() * Date.now()),
  },
  {
    thumbnail:
      "https://i.ytimg.com/vi/8FlWUa04f2g/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA43Chxni3T0j06ocBIYTY3ySONdw",
    avatar:
      "https://yt3.ggpht.com/ytc/AKedOLS17PyyeccjZ4IjxleuHGt_3OSSgBFAIXCSFf0ecQ=s68-c-k-c0x00ffffff-no-rj",
    description: "Avoid These HTML & CSS Mistakes At All Costs",
    channel: "Aaron Jack",
    details: "27K views • 1 week ago",
    id: Math.floor(Math.random() * Date.now()),
  },
  {
    thumbnail:
      "https://i.ytimg.com/vi/QiTq5WrWoJw/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBisSbcpiCV7vO5vkObC_bXp9vK5g",
    avatar:
      "https://yt3.ggpht.com/FjeN785fVWx0Pr6xCbwPhhq8hHj_gocc3FygDXYDEQgp2gE_FQzRNsFHFAjQ3oE-VJaeGR1a=s68-c-k-c0x00ffffff-no-rj",
    description:
      "🔴 Let's build SLACK 2.0 with REACT.JS! (REDUX, Styled components & Firebase Hooks) by Sonny Sangha Streamed 5 months ago 3 hours, 23 minutes 102,070 views",
    channel: "Sonny Sangha",
    details: "102K views • Streamed 5 months ago",
    id: Math.floor(Math.random() * Date.now()),
  },
  {
    thumbnail:
      "https://i.ytimg.com/vi/CXa0f4-dWi4/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLANhRxfK9dU7Tc9iXqT6d2LrX_kew",
    avatar:
      "https://yt3.ggpht.com/ytc/AKedOLTxiU05Tl0IIyXgg8FF3lxx9oRBmQYwdW_XjCqn=s68-c-k-c0x00ffffff-no-rj",
    description:
      "React Sidebar Navigation Menu Tutorial - Beginner React JS Project Using Hooks & Router by Brian Design 11 months ago 36 minutes 197,210 views",
    channel: "Brian Design",
    details: "197K views • 11 months ago",
    id: Math.floor(Math.random() * Date.now()),
  },
  {
    thumbnail:
      "https://i.ytimg.com/vi/O7WbVj5apxU/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBD9sfn_raif9Vt0UAylmeg-IApnA",
    avatar:
      "https://yt3.ggpht.com/ytc/AKedOLSB-oR-xmvVSZXJ3gbK12uvv0AJUvajwxMie_R_uw=s68-c-k-c0x00ffffff-no-rj",
    description:
      "Build Glass Website with HTML and CSS Tutorial by Dev Ed 6 months ago 43 minutes 513,203 views",
    channel: "Dev Ed",
    details: "513K views • 6 months ago",
    id: Math.floor(Math.random() * Date.now()),
  },
  {
    thumbnail:
      "https://i.ytimg.com/vi/0JeJTGjgcco/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLADQ1L3FSUnFpd0chqnyZM3FbRQIA",
    avatar:
      "https://yt3.ggpht.com/ytc/AKedOLRlgc2WX_PlndJ73B8Uv34TZjfzxqTFwLVJIF0l2w=s68-c-k-c0x00ffffff-no-rj",
    description: "50 Free Tools and Resources To Create Awesome UI Designs",
    channel: "Adrian Twarog",
    details: "17K views • 1 year ago",
    id: Math.floor(Math.random() * Date.now()),
  },
  {
    thumbnail:
      "https://i.ytimg.com/vi/mrHNSanmqQ4/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCMPtRb0i0EJd5cOxKYDtybU4Hh5g",
    avatar:
      "https://yt3.ggpht.com/ytc/AKedOLRkU2-RDemsCSaVVsPwc-yxtWruCB1Gr2VIgQKOKg=s68-c-k-c0x00ffffff-no-rj",
    description:
      "MERN Stack Course - ALSO: Convert Backend to Serverless with MongoDB Realm",
    channel: "freeCodeCamp.org",
    details: "123K views • 3 months ago",
    id: Math.floor(Math.random() * Date.now()),
  },
  {
    thumbnail:
      "https://i.ytimg.com/vi/8FlWUa04f2g/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA43Chxni3T0j06ocBIYTY3ySONdw",
    avatar:
      "https://yt3.ggpht.com/ytc/AKedOLS17PyyeccjZ4IjxleuHGt_3OSSgBFAIXCSFf0ecQ=s68-c-k-c0x00ffffff-no-rj",
    description: "Avoid These HTML & CSS Mistakes At All Costs",
    channel: "Aaron Jack",
    details: "27K views • 1 week ago",
    id: Math.floor(Math.random() * Date.now()),
  },
  {
    thumbnail:
      "https://i.ytimg.com/vi/QiTq5WrWoJw/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBisSbcpiCV7vO5vkObC_bXp9vK5g",
    avatar:
      "https://yt3.ggpht.com/FjeN785fVWx0Pr6xCbwPhhq8hHj_gocc3FygDXYDEQgp2gE_FQzRNsFHFAjQ3oE-VJaeGR1a=s68-c-k-c0x00ffffff-no-rj",
    description:
      "🔴 Let's build SLACK 2.0 with REACT.JS! (REDUX, Styled components & Firebase Hooks) by Sonny Sangha Streamed 5 months ago 3 hours, 23 minutes 102,070 views",
    channel: "Sonny Sangha",
    details: "102K views • Streamed 5 months ago",
    id: Math.floor(Math.random() * Date.now()),
  },
];
export default videos;
