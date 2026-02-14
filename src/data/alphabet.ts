export type LetterExample = {
  id: string;
  word: string;
  pronunciation: string;
  meaning: string;
  image: string;
};

export type LetterData = {
  letter: string;
  examples: LetterExample[];
};

export const alphabet: Record<string, LetterData> = {
  A: {
    letter: "A",
    examples: [
      {
        id: "a1",
        word: "áo khoác",
        pronunciation: "[ao khoac]",
        meaning: "jacket",
        image: "/img/a1.svg",
      },
      {
        id: "a2",
        word: "áo mưa",
        pronunciation: "[ao mua]",
        meaning: "raincoat",
        image: "/img/a2.svg",
      },
      {
        id: "a3",
        word: "áo thun",
        pronunciation: "[ao thun]",
        meaning: "T-shirt",
        image: "/img/a3.svg",
      },
      {
        id: "a4",
        word: "ảnh",
        pronunciation: "[anh]",
        meaning: "photo",
        image: "/img/a4.svg",
      },
      {
        id: "a5",
        word: "an ninh",
        pronunciation: "[an ninh]",
        meaning: "peace/ safety / security",
        image: "/img/a5.svg",
      },
    ],
  },

  Ă: {
    letter: "Ă",
    examples: [
      {
        id: "aw1",
        word: "ăn sáng",
        pronunciation: "[an sang]",
        meaning: "breakfast",
        image: "/img/aw1.svg",
      },
      {
        id: "aw2",
        word: "ăn trưa",
        pronunciation: "[an trua]",
        meaning: "lunch",
        image: "/img/aw2.svg",
      },
      {
        id: "aw3",
        word: "ăn tối",
        pronunciation: "[an toi]",
        meaning: "dinner",
        image: "/img/aw3.svg",
      },
      {
        id: "aw4",
        word: "ăn vặt",
        pronunciation: "[an vat]",
        meaning: "snack(s)",
        image: "/img/aw4.svg",
      },
      {
        id: "aw5",
        word: "ắc quy",
        pronunciation: "[ac quy]",
        meaning: "battery (vehicle battery)",
        image: "/img/aw5.svg",
      },
    ],
  },

  Â: {
    letter: "Â",
    examples: [
      {
        id: "aa1",
        word: "ẩm thực",
        pronunciation: "[am thuc]",
        meaning: "cuisine",
        image: "/img/aa1.svg",
      },
      {
        id: "aa2",
        word: "âm nhạc",
        pronunciation: "[am nhac]",
        meaning: "music",
        image: "/img/aa2.svg",
      },
      {
        id: "aa3",
        word: "âm lượng",
        pronunciation: "[am luong]",
        meaning: "volume",
        image: "/img/aa3.svg",
      },
      {
        id: "aa4",
        word: "âm thanh",
        pronunciation: "[am thanh]",
        meaning: "sound",
        image: "/img/aa4.svg",
      },
      {
        id: "aa5",
        word: "ấn tượng",
        pronunciation: "[an tuong]",
        meaning: "impression",
        image: "/img/aa5.svg",
      },
    ],
  },

  B: {
    letter: "B",
    examples: [
      {
        id: "b1",
        word: "ba lô",
        pronunciation: "[ba lo]",
        meaning: "backpack",
        image: "/img/b1.svg",
      },
      {
        id: "b2",
        word: "bản đồ",
        pronunciation: "[ban do]",
        meaning: "map",
        image: "/img/b2.svg",
      },
      {
        id: "b3",
        word: "bãi biển",
        pronunciation: "[bai bien]",
        meaning: "beach",
        image: "/img/b3.svg",
      },
      {
        id: "b4",
        word: "bàn chải đánh răng",
        pronunciation: "[ban chai danh rang]",
        meaning: "toothbrush",
        image: "/img/b4.svg",
      },
      {
        id: "b5",
        word: "bánh mì",
        pronunciation: "[banh mi]",
        meaning: "bánh mì (sandwich)",
        image: "/img/b5.svg",
      },
    ],
  },

  C: {
    letter: "C",
    examples: [
      {
        id: "c1",
        word: "cà phê",
        pronunciation: "[ca phe]",
        meaning: "coffee",
        image: "/img/c1.svg",
      },
      {
        id: "c2",
        word: "chợ",
        pronunciation: "[cho]",
        meaning: "market",
        image: "/img/c2.svg",
      },
      {
        id: "c3",
        word: "chìa khóa",
        pronunciation: "[chia khoa]",
        meaning: "key",
        image: "/img/c3.svg",
      },
      {
        id: "c4",
        word: "chuyến bay",
        pronunciation: "[chuyen bay]",
        meaning: "flight",
        image: "/img/c4.svg",
      },
      {
        id: "c5",
        word: "chỗ ở",
        pronunciation: "[cho o]",
        meaning: "accommodation",
        image: "/img/c5.svg",
      },
    ],
  },

  D: {
    letter: "D",
    examples: [
      {
        id: "d1",
        word: "du lịch",
        pronunciation: "[du lich]",
        meaning: "travel / tourism",
        image: "/img/d1.svg",
      },
      {
        id: "d2",
        word: "dịch vụ",
        pronunciation: "[dich vu]",
        meaning: "service",
        image: "/img/d2.svg",
      },
      {
        id: "d3",
        word: "dầu gội",
        pronunciation: "[dau goi]",
        meaning: "shampoo",
        image: "/img/d3.svg",
      },
      {
        id: "d4",
        word: "dây sạc",
        pronunciation: "[day sac]",
        meaning: "charging cable",
        image: "/img/d4.svg",
      },
      {
        id: "d5",
        word: "dép",
        pronunciation: "[dep]",
        meaning: "sandals / flip-flops",
        image: "/img/d5.svg",
      },
    ],
  },

  Đ: {
    letter: "Đ",
    examples: [
      {
        id: "dd1",
        word: "điện thoại",
        pronunciation: "[dien thoai]",
        meaning: "phone",
        image: "/img/dd1.svg",
      },
      {
        id: "dd2",
        word: "đồ ăn",
        pronunciation: "[do an]",
        meaning: "food",
        image: "/img/dd2.svg",
      },
      {
        id: "dd3",
        word: "đường",
        pronunciation: "[duong]",
        meaning: "road / street",
        image: "/img/dd3.svg",
      },
      {
        id: "dd4",
        word: "đèn pin",
        pronunciation: "[den pin]",
        meaning: "flashlight",
        image: "/img/dd4.svg",
      },
      {
        id: "dd5",
        word: "đồng",
        pronunciation: "[dong]",
        meaning: "Vietnamese đồng (currency)",
        image: "/img/dd5.svg",
      },
    ],
  },

  E: {
    letter: "E",
    examples: [
      {
        id: "e1",
        word: "email",
        pronunciation: "[email]",
        meaning: "email",
        image: "/img/e1.svg",
      },
      {
        id: "e2",
        word: "eSIM",
        pronunciation: "[esim]",
        meaning: "eSIM",
        image: "/img/e2.svg",
      },
      {
        id: "e3",
        word: "e-ticket",
        pronunciation: "[e-ticket]",
        meaning: "e-ticket",
        image: "/img/e3.svg",
      },
      {
        id: "e4",
        word: "espresso",
        pronunciation: "[espresso]",
        meaning: "espresso",
        image: "/img/e4.svg",
      },
      {
        id: "e5",
        word: "eo biển",
        pronunciation: "[eo bien]",
        meaning: "strait",
        image: "/img/e5.svg",
      },
    ],
  },

  Ê: {
    letter: "Ê",
    examples: [
      {
        id: "ee1",
        word: "ê-kíp",
        pronunciation: "[e-kip]",
        meaning: "crew / team",
        image: "/img/ee1.svg",
      },
      {
        id: "ee2",
        word: "ê-cu",
        pronunciation: "[e-cu]",
        meaning: "nut (hardware)",
        image: "/img/ee2.svg",
      },
      {
        id: "ee3",
        word: "ếch",
        pronunciation: "[ech]",
        meaning: "frog",
        image: "/img/ee3.svg",
      },
      {
        id: "ee4",
        word: "ếch đồng",
        pronunciation: "[ech dong]",
        meaning: "field frog",
        image: "/img/ee4.svg",
      },
      {
        id: "ee5",
        word: "Ê Đê",
        pronunciation: "[e de]",
        meaning: "Ê Đê (Ede) people",
        image: "/img/ee5.svg",
      },
    ],
  },

  G: {
    letter: "G",
    examples: [
      {
        id: "g1",
        word: "ga",
        pronunciation: "[ga]",
        meaning: "station (train/bus)",
        image: "/img/g1.svg",
      },
      {
        id: "g2",
        word: "gạo",
        pronunciation: "[gao]",
        meaning: "rice",
        image: "/img/g2.svg",
      },
      {
        id: "g3",
        word: "ghế",
        pronunciation: "[ghe]",
        meaning: "seat / chair",
        image: "/img/g3.svg",
      },
      {
        id: "g4",
        word: "giấy tờ",
        pronunciation: "[giay to]",
        meaning: "documents / papers",
        image: "/img/g4.svg",
      },
      {
        id: "g5",
        word: "gối",
        pronunciation: "[goi]",
        meaning: "pillow",
        image: "/img/g5.svg",
      },
    ],
  },

  H: {
    letter: "H",
    examples: [
      {
        id: "h1",
        word: "hộ chiếu",
        pronunciation: "[ho chieu]",
        meaning: "passport",
        image: "/img/h1.svg",
      },
      {
        id: "h2",
        word: "hành lý",
        pronunciation: "[hanh ly]",
        meaning: "luggage",
        image: "/img/h2.svg",
      },
      {
        id: "h3",
        word: "hóa đơn",
        pronunciation: "[hoa don]",
        meaning: "bill / receipt",
        image: "/img/h3.svg",
      },
      {
        id: "h4",
        word: "hải sản",
        pronunciation: "[hai san]",
        meaning: "seafood",
        image: "/img/h4.svg",
      },
      {
        id: "h5",
        word: "hướng dẫn viên",
        pronunciation: "[huong dan vien]",
        meaning: "tour guide",
        image: "/img/h5.svg",
      },
    ],
  },

  I: {
    letter: "I",
    examples: [
      {
        id: "i1",
        word: "internet",
        pronunciation: "[internet]",
        meaning: "internet",
        image: "/img/i1.svg",
      },
      {
        id: "i2",
        word: "in ấn",
        pronunciation: "[in an]",
        meaning: "printing",
        image: "/img/i2.svg",
      },
      {
        id: "i3",
        word: "iPhone",
        pronunciation: "[iphone]",
        meaning: "iPhone",
        image: "/img/i3.svg",
      },
      {
        id: "i4",
        word: "iPad",
        pronunciation: "[ipad]",
        meaning: "iPad",
        image: "/img/i4.svg",
      },
      {
        id: "i5",
        word: "Instagram",
        pronunciation: "[instagram]",
        meaning: "Instagram",
        image: "/img/i5.svg",
      },
    ],
  },

  K: {
    letter: "K",
    examples: [
      {
        id: "k1",
        word: "khách sạn",
        pronunciation: "[khach san]",
        meaning: "hotel",
        image: "/img/k1.svg",
      },
      {
        id: "k2",
        word: "kem chống nắng",
        pronunciation: "[kem chong nang]",
        meaning: "sunscreen",
        image: "/img/k2.svg",
      },
      {
        id: "k3",
        word: "khóa",
        pronunciation: "[khoa]",
        meaning: "lock / key",
        image: "/img/k3.svg",
      },
      {
        id: "k4",
        word: "khẩu trang",
        pronunciation: "[khau trang]",
        meaning: "face mask",
        image: "/img/k4.svg",
      },
      {
        id: "k5",
        word: "kilômét",
        pronunciation: "[kilomet]",
        meaning: "kilometer",
        image: "/img/k5.svg",
      },
    ],
  },

  L: {
    letter: "L",
    examples: [
      {
        id: "l1",
        word: "lều",
        pronunciation: "[leu]",
        meaning: "tent",
        image: "/img/l1.svg",
      },
      {
        id: "l2",
        word: "lịch trình",
        pronunciation: "[lich trinh]",
        meaning: "itinerary / schedule",
        image: "/img/l2.svg",
      },
      {
        id: "l3",
        word: "lễ tân",
        pronunciation: "[le tan]",
        meaning: "reception (front desk)",
        image: "/img/l3.svg",
      },
      {
        id: "l4",
        word: "lối đi",
        pronunciation: "[loi di]",
        meaning: "path / walkway",
        image: "/img/l4.svg",
      },
      {
        id: "l5",
        word: "ly",
        pronunciation: "[ly]",
        meaning: "cup / glass",
        image: "/img/l5.svg",
      },
    ],
  },

  M: {
    letter: "M",
    examples: [
      {
        id: "m1",
        word: "máy bay",
        pronunciation: "[may bay]",
        meaning: "airplane",
        image: "/img/m1.svg",
      },
      {
        id: "m2",
        word: "mũ bảo hiểm",
        pronunciation: "[mu bao hiem]",
        meaning: "helmet",
        image: "/img/m2.svg",
      },
      {
        id: "m3",
        word: "mưa",
        pronunciation: "[mua]",
        meaning: "rain",
        image: "/img/m3.svg",
      },
      {
        id: "m4",
        word: "món ăn",
        pronunciation: "[mon an]",
        meaning: "dish / food item",
        image: "/img/m4.svg",
      },
      {
        id: "m5",
        word: "mì",
        pronunciation: "[mi]",
        meaning: "noodles",
        image: "/img/m5.svg",
      },
    ],
  },

  N: {
    letter: "N",
    examples: [
      {
        id: "n1",
        word: "nước",
        pronunciation: "[nuoc]",
        meaning: "water",
        image: "/img/n1.svg",
      },
      {
        id: "n2",
        word: "nhà nghỉ",
        pronunciation: "[nha nghi]",
        meaning: "guesthouse",
        image: "/img/n2.svg",
      },
      {
        id: "n3",
        word: "nhà vệ sinh",
        pronunciation: "[nha ve sinh]",
        meaning: "toilet / restroom",
        image: "/img/n3.svg",
      },
      {
        id: "n4",
        word: "núi",
        pronunciation: "[nui]",
        meaning: "mountain",
        image: "/img/n4.svg",
      },
      {
        id: "n5",
        word: "ngân hàng",
        pronunciation: "[ngan hang]",
        meaning: "bank",
        image: "/img/n5.svg",
      },
    ],
  },

  O: {
    letter: "O",
    examples: [
      {
        id: "o1",
        word: "online",
        pronunciation: "[online]",
        meaning: "online",
        image: "/img/o1.svg",
      },
      {
        id: "o2",
        word: "order",
        pronunciation: "[order]",
        meaning: "order (food order)",
        image: "/img/o2.svg",
      },
      {
        id: "o3",
        word: "ong",
        pronunciation: "[ong]",
        meaning: "bee",
        image: "/img/o3.svg",
      },
      {
        id: "o4",
        word: "óc",
        pronunciation: "[oc]",
        meaning: "brain",
        image: "/img/o4.svg",
      },
      {
        id: "o5",
        word: "oải hương",
        pronunciation: "[oai huong]",
        meaning: "lavender",
        image: "/img/o5.svg",
      },
    ],
  },

  Ô: {
    letter: "Ô",
    examples: [
      {
        id: "oo1",
        word: "ô tô",
        pronunciation: "[o to]",
        meaning: "car",
        image: "/img/oo1.svg",
      },
      {
        id: "oo2",
        word: "ô dù",
        pronunciation: "[o du]",
        meaning: "umbrella",
        image: "/img/oo2.svg",
      },
      {
        id: "oo3",
        word: "ổ cắm",
        pronunciation: "[o cam]",
        meaning: "power outlet / socket",
        image: "/img/oo3.svg",
      },
      {
        id: "oo4",
        word: "ốc",
        pronunciation: "[oc]",
        meaning: "snail",
        image: "/img/oo4.svg",
      },
      {
        id: "oo5",
        word: "ô cửa",
        pronunciation: "[o cua]",
        meaning: "window (pane/opening)",
        image: "/img/oo5.svg",
      },
    ],
  },

  Ơ: {
    letter: "Ơ",
    examples: [
      {
        id: "ow1",
        word: "ớt",
        pronunciation: "[ot]",
        meaning: "chili pepper",
        image: "/img/ow1.svg",
      },
      {
        id: "ow2",
        word: "ớt hiểm",
        pronunciation: "[ot hiem]",
        meaning: "bird’s eye chili",
        image: "/img/ow2.svg",
      },
      {
        id: "ow3",
        word: "ớt chuông",
        pronunciation: "[ot chuong]",
        meaning: "bell pepper",
        image: "/img/ow3.svg",
      },
      {
        id: "ow4",
        word: "ớt bột",
        pronunciation: "[ot bot]",
        meaning: "chili powder",
        image: "/img/ow4.svg",
      },
      {
        id: "ow5",
        word: "ơn",
        pronunciation: "[on]",
        meaning: "gratitude / thanks",
        image: "/img/ow5.svg",
      },
    ],
  },

  P: {
    letter: "P",
    examples: [
      {
        id: "p1",
        word: "phòng",
        pronunciation: "[phong]",
        meaning: "room",
        image: "/img/p1.svg",
      },
      {
        id: "p2",
        word: "phở",
        pronunciation: "[pho]",
        meaning: "phở (noodle soup)",
        image: "/img/p2.svg",
      },
      {
        id: "p3",
        word: "phà",
        pronunciation: "[pha]",
        meaning: "ferry",
        image: "/img/p3.svg",
      },
      {
        id: "p4",
        word: "pin",
        pronunciation: "[pin]",
        meaning: "battery",
        image: "/img/p4.svg",
      },
      {
        id: "p5",
        word: "phượt",
        pronunciation: "[phuot]",
        meaning: "backpacking road trip",
        image: "/img/p5.svg",
      },
    ],
  },

  Q: {
    letter: "Q",
    examples: [
      {
        id: "q1",
        word: "quán",
        pronunciation: "[quan]",
        meaning: "eatery / small restaurant",
        image: "/img/q1.svg",
      },
      {
        id: "q2",
        word: "quần",
        pronunciation: "[quan]",
        meaning: "pants",
        image: "/img/q2.svg",
      },
      {
        id: "q3",
        word: "quốc lộ",
        pronunciation: "[quoc lo]",
        meaning: "national highway",
        image: "/img/q3.svg",
      },
      {
        id: "q4",
        word: "quầy vé",
        pronunciation: "[quay ve]",
        meaning: "ticket counter",
        image: "/img/q4.svg",
      },
      {
        id: "q5",
        word: "quà",
        pronunciation: "[qua]",
        meaning: "gift / souvenir",
        image: "/img/q5.svg",
      },
    ],
  },

  R: {
    letter: "R",
    examples: [
      {
        id: "r1",
        word: "rừng",
        pronunciation: "[rung]",
        meaning: "forest / jungle",
        image: "/img/r1.svg",
      },
      {
        id: "r2",
        word: "rau",
        pronunciation: "[rau]",
        meaning: "vegetables",
        image: "/img/r2.svg",
      },
      {
        id: "r3",
        word: "rác",
        pronunciation: "[rac]",
        meaning: "trash",
        image: "/img/r3.svg",
      },
      {
        id: "r4",
        word: "rạp phim",
        pronunciation: "[rap phim]",
        meaning: "cinema",
        image: "/img/r4.svg",
      },
      {
        id: "r5",
        word: "rủi ro",
        pronunciation: "[rui ro]",
        meaning: "risk",
        image: "/img/r5.svg",
      },
    ],
  },

  S: {
    letter: "S",
    examples: [
      {
        id: "s1",
        word: "sân bay",
        pronunciation: "[san bay]",
        meaning: "airport",
        image: "/img/s1.svg",
      },
      {
        id: "s2",
        word: "sim",
        pronunciation: "[sim]",
        meaning: "SIM card",
        image: "/img/s2.svg",
      },
      {
        id: "s3",
        word: "sóng",
        pronunciation: "[song]",
        meaning: "signal (reception)",
        image: "/img/s3.svg",
      },
      {
        id: "s4",
        word: "sạc dự phòng",
        pronunciation: "[sac du phong]",
        meaning: "power bank",
        image: "/img/s4.svg",
      },
      {
        id: "s5",
        word: "số",
        pronunciation: "[so]",
        meaning: "number",
        image: "/img/s5.svg",
      },
    ],
  },

  T: {
    letter: "T",
    examples: [
      {
        id: "t1",
        word: "taxi",
        pronunciation: "[taxi]",
        meaning: "taxi",
        image: "/img/t1.svg",
      },
      {
        id: "t2",
        word: "tiền",
        pronunciation: "[tien]",
        meaning: "money",
        image: "/img/t2.svg",
      },
      {
        id: "t3",
        word: "tàu",
        pronunciation: "[tau]",
        meaning: "train / boat",
        image: "/img/t3.svg",
      },
      {
        id: "t4",
        word: "thẻ",
        pronunciation: "[the]",
        meaning: "card",
        image: "/img/t4.svg",
      },
      {
        id: "t5",
        word: "thuốc",
        pronunciation: "[thuoc]",
        meaning: "medicine",
        image: "/img/t5.svg",
      },
    ],
  },

  U: {
    letter: "U",
    examples: [
      {
        id: "u1",
        word: "Uber",
        pronunciation: "[uber]",
        meaning: "Uber",
        image: "/img/u1.svg",
      },
      {
        id: "u2",
        word: "USB",
        pronunciation: "[usb]",
        meaning: "USB",
        image: "/img/u2.svg",
      },
      {
        id: "u3",
        word: "USD",
        pronunciation: "[usd]",
        meaning: "US dollars",
        image: "/img/u3.svg",
      },
      {
        id: "u4",
        word: "ủng",
        pronunciation: "[ung]",
        meaning: "boots",
        image: "/img/u4.svg",
      },
      {
        id: "u5",
        word: "ùn tắc",
        pronunciation: "[un tac]",
        meaning: "traffic jam",
        image: "/img/u5.svg",
      },
    ],
  },

  Ư: {
    letter: "Ư",
    examples: [
      {
        id: "uw1",
        word: "ứng dụng",
        pronunciation: "[ung dung]",
        meaning: "app / application",
        image: "/img/uw1.svg",
      },
      {
        id: "uw2",
        word: "ưu đãi",
        pronunciation: "[uu dai]",
        meaning: "discount / promotion",
        image: "/img/uw2.svg",
      },
      {
        id: "uw3",
        word: "ưu tiên",
        pronunciation: "[uu tien]",
        meaning: "priority",
        image: "/img/uw3.svg",
      },
      {
        id: "uw4",
        word: "ưu điểm",
        pronunciation: "[uu diem]",
        meaning: "advantage",
        image: "/img/uw4.svg",
      },
      {
        id: "uw5",
        word: "ước lượng",
        pronunciation: "[uoc luong]",
        meaning: "estimate",
        image: "/img/uw5.svg",
      },
    ],
  },

  V: {
    letter: "V",
    examples: [
      {
        id: "v1",
        word: "vé",
        pronunciation: "[ve]",
        meaning: "ticket",
        image: "/img/v1.svg",
      },
      {
        id: "v2",
        word: "vali",
        pronunciation: "[vali]",
        meaning: "suitcase",
        image: "/img/v2.svg",
      },
      {
        id: "v3",
        word: "ví",
        pronunciation: "[vi]",
        meaning: "wallet",
        image: "/img/v3.svg",
      },
      {
        id: "v4",
        word: "visa",
        pronunciation: "[visa]",
        meaning: "visa",
        image: "/img/v4.svg",
      },
      {
        id: "v5",
        word: "vỉa hè",
        pronunciation: "[via he]",
        meaning: "sidewalk",
        image: "/img/v5.svg",
      },
    ],
  },

  X: {
    letter: "X",
    examples: [
      {
        id: "x1",
        word: "xe máy",
        pronunciation: "[xe may]",
        meaning: "motorcycle",
        image: "/img/x1.svg",
      },
      {
        id: "x2",
        word: "xăng",
        pronunciation: "[xang]",
        meaning: "gasoline",
        image: "/img/x2.svg",
      },
      {
        id: "x3",
        word: "xe buýt",
        pronunciation: "[xe buyt]",
        meaning: "bus",
        image: "/img/x3.svg",
      },
      {
        id: "x4",
        word: "xe ôm",
        pronunciation: "[xe om]",
        meaning: "motorbike taxi",
        image: "/img/x4.svg",
      },
      {
        id: "x5",
        word: "xà phòng",
        pronunciation: "[xa phong]",
        meaning: "soap",
        image: "/img/x5.svg",
      },
    ],
  },

  Y: {
    letter: "Y",
    examples: [
      {
        id: "y1",
        word: "y tế",
        pronunciation: "[y te]",
        meaning: "healthcare / medical",
        image: "/img/y1.svg",
      },
      {
        id: "y2",
        word: "yên xe",
        pronunciation: "[yen xe]",
        meaning: "motorbike seat",
        image: "/img/y2.svg",
      },
      {
        id: "y3",
        word: "ý tưởng",
        pronunciation: "[y tuong]",
        meaning: "idea",
        image: "/img/y3.svg",
      },
      {
        id: "y4",
        word: "ý kiến",
        pronunciation: "[y kien]",
        meaning: "opinion",
        image: "/img/y4.svg",
      },
      {
        id: "y5",
        word: "yêu cầu",
        pronunciation: "[yeu cau]",
        meaning: "request",
        image: "/img/y5.svg",
      },
    ],
  },
};
