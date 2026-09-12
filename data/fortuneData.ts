export type FortuneLanguage = "EN" | "TH";

export type FortuneCardData = {
  id: number;
  rank: string;
  suit: string;

  title: {
    EN: string;
    TH: string;
  };

  prediction: {
    EN: string;
    TH: string;
  };

  finance: {
    EN: string;
    TH: string;
  };

  love: {
    EN: string;
    TH: string;
  };

  work: {
    EN: string;
    TH: string;
  };

  advice: {
    EN: string;
    TH: string;
  };

  symbol: string;
};

const cards: FortuneCardData[] = [
  {
    id: 1,
    rank: "A",
    suit: "HEARTS",
    symbol: "♡",
    title: {
      EN: "The Main Character",
      TH: "ช่วงนี้คุณคือพระเอก",
    },
    prediction: {
      EN: "Something is quietly moving in your favor. You might not notice it immediately because you are too busy worrying about something that probably isn't worth worrying about. Keep going. Your life is not falling apart. Your brain is simply doing overtime.",
      TH: "ช่วงนี้มีบางอย่างกำลังเข้าข้างคุณแบบเงียบ ๆ แต่คุณอาจไม่ทันสังเกต เพราะมัวแต่กังวลเรื่องที่จริง ๆ แล้วอาจไม่ได้สำคัญขนาดนั้น ชีวิตไม่ได้พังครับ สมองคุณแค่ทำงาน OT เกินจำเป็น",
    },
    finance: {
      EN: "Money exists. Your ability to keep it is the real question.",
      TH: "มีเงินเข้ามา แต่ความสามารถในการเก็บคืออีกเรื่อง",
    },
    love: {
      EN: "Someone may be interested. Yes, even if you keep pretending you don't notice.",
      TH: "มีคนอาจกำลังสนใจคุณอยู่ ใช่ครับ ถึงคุณจะทำเป็นไม่รู้ก็เถอะ",
    },
    work: {
      EN: "You are capable. You are also procrastinating.",
      TH: "คุณทำได้ แต่ตอนนี้กำลังผัดวันประกันพรุ่งอยู่",
    },
    advice: {
      EN: "Do one important thing before opening another app.",
      TH: "ทำเรื่องสำคัญให้เสร็จหนึ่งอย่าง ก่อนเปิดอีกแอป",
    },
  },

  {
    id: 2,
    rank: "2",
    suit: "HEARTS",
    symbol: "♡",
    title: {
      EN: "The Almost",
      TH: "เกือบแล้วครับ",
    },
    prediction: {
      EN: "You are closer than you think. The annoying part is that the final 10% may require 50% of your motivation. Don't quit just because the finish line finally became visible.",
      TH: "คุณใกล้กว่าที่คิด ปัญหาคือ 10% สุดท้ายอาจใช้พลังใจไป 50% อย่าเพิ่งเลิกตอนที่เส้นชัยเริ่มมองเห็นแล้ว",
    },
    finance: {
      EN: "Almost saving money. Almost.",
      TH: "เกือบจะเก็บเงินได้แล้วครับ เกือบจริง ๆ",
    },
    love: {
      EN: "Almost sending the message. Still staring at the chat.",
      TH: "เกือบส่งข้อความแล้ว แต่ยังนั่งจ้องแชตอยู่",
    },
    work: {
      EN: "Almost productive. Your tabs disagree.",
      TH: "เกือบ productive แล้ว แต่จำนวนแท็บใน browser ไม่เห็นด้วย",
    },
    advice: {
      EN: "Finish what you started.",
      TH: "ทำสิ่งที่เริ่มไว้ให้จบ",
    },
  },

  {
    id: 3,
    rank: "3",
    suit: "HEARTS",
    symbol: "♡",
    title: {
      EN: "The Overthinker",
      TH: "นักคิดแห่งปี",
    },
    prediction: {
      EN: "Your biggest enemy right now is not another person. It is the imaginary conversation you have already had 17 times in your head.",
      TH: "ศัตรูตัวจริงช่วงนี้ไม่ใช่คนอื่น แต่คือบทสนทนาในหัวที่คุณซ้อมไปแล้วประมาณ 17 รอบ",
    },
    finance: {
      EN: "You calculate everything, then buy it anyway.",
      TH: "คำนวณทุกอย่างแล้ว สุดท้ายก็ซื้ออยู่ดี",
    },
    love: {
      EN: "You are reading too much into a single emoji.",
      TH: "คุณกำลังวิเคราะห์ emoji หนึ่งตัวเกินเหตุ",
    },
    work: {
      EN: "Planning is not the same as doing.",
      TH: "การวางแผนไม่เท่ากับการลงมือทำ",
    },
    advice: {
      EN: "Stop writing imaginary scenarios.",
      TH: "หยุดแต่งสถานการณ์ในหัว แล้วลองทำจริง",
    },
  },

  {
    id: 4,
    rank: "4",
    suit: "HEARTS",
    symbol: "♡",
    title: {
      EN: "Soft Reset",
      TH: "รีเซ็ตก่อน",
    },
    prediction: {
      EN: "You don't need to fix your entire life today. You probably just need sleep, food, a shower, and to stop doom-scrolling for 45 minutes.",
      TH: "คุณไม่จำเป็นต้องแก้ชีวิตทั้งหมดวันนี้ บางทีคุณแค่ต้องนอน กินข้าว อาบน้ำ และหยุดไถอะไรเรื่อยเปื่อยสัก 45 นาที",
    },
    finance: {
      EN: "Don't buy things because you're bored.",
      TH: "อย่าซื้อของเพราะเบื่อ",
    },
    love: {
      EN: "Take it easy. Nobody needs a 3-hour relationship analysis.",
      TH: "ใจเย็น ๆ ไม่ต้องวิเคราะห์ความสัมพันธ์ 3 ชั่วโมง",
    },
    work: {
      EN: "Restart tomorrow with a clean list.",
      TH: "พรุ่งนี้เริ่มใหม่ด้วยลิสต์สั้น ๆ",
    },
    advice: {
      EN: "Touch grass. Literally.",
      TH: "ออกไปแตะหญ้าจริง ๆ บ้าง",
    },
  },

  {
    id: 5,
    rank: "5",
    suit: "HEARTS",
    symbol: "♡",
    title: {
      EN: "The Plot Twist",
      TH: "เดี๋ยวมีหักมุม",
    },
    prediction: {
      EN: "Something you didn't expect may actually work out better than your original plan. Life occasionally has better writers than you.",
      TH: "บางอย่างที่คุณไม่ได้วางแผนไว้อาจกลับออกมาดีกว่าแผนเดิม ชีวิตบางทีก็เขียนบทเก่งกว่าคุณ",
    },
    finance: {
      EN: "Unexpected expense incoming. Act surprised.",
      TH: "มีค่าใช้จ่ายไม่คาดคิดกำลังมา ทำหน้าตกใจไว้เลย",
    },
    love: {
      EN: "The person you least expect may become interesting.",
      TH: "คนที่คุณไม่คิดอะไรด้วยอาจเริ่มน่าสนใจ",
    },
    work: {
      EN: "A random idea might become useful.",
      TH: "ไอเดียเล่น ๆ อาจกลายเป็นของจริง",
    },
    advice: {
      EN: "Leave some room for accidents.",
      TH: "เหลือพื้นที่ให้ความบังเอิญบ้าง",
    },
  },

  {
    id: 6,
    rank: "6",
    suit: "HEARTS",
    symbol: "♡",
    title: {
      EN: "Low Battery",
      TH: "แบตใกล้หมด",
    },
    prediction: {
      EN: "You are trying to solve problems with a brain that has approximately 12% battery left. Rest first. Decisions later.",
      TH: "คุณกำลังพยายามแก้ปัญหาด้วยสมองที่เหลือแบตประมาณ 12% พักก่อนครับ เรื่องสำคัญค่อยตัดสินใจ",
    },
    finance: {
      EN: "Your wallet is fine. Your impulse control isn't.",
      TH: "กระเป๋าตังค์ยังโอเค แต่การควบคุมตัวเองไม่ค่อยโอเค",
    },
    love: {
      EN: "Reply when you have energy. Don't force it.",
      TH: "มีแรงค่อยตอบ ไม่ต้องฝืน",
    },
    work: {
      EN: "You need a break more than another productivity video.",
      TH: "คุณต้องพัก มากกว่าดูคลิป productivity อีกหนึ่งคลิป",
    },
    advice: {
      EN: "Charge yourself before charging your phone.",
      TH: "ชาร์จตัวเองก่อน แล้วค่อยชาร์จมือถือ",
    },
  },

  {
    id: 7,
    rank: "7",
    suit: "HEARTS",
    symbol: "♡",
    title: {
      EN: "Good Enough",
      TH: "ดีพอแล้ว",
    },
    prediction: {
      EN: "Perfection is currently slowing you down more than helping you. Make the thing. Improve it later.",
      TH: "ความสมบูรณ์แบบกำลังทำให้คุณช้ากว่าที่ควรจะเป็น ทำมันออกมาก่อน แล้วค่อยปรับ",
    },
    finance: {
      EN: "Buy the thing only if you still want it tomorrow.",
      TH: "ถ้าพรุ่งนี้ยังอยากได้ ค่อยซื้อ",
    },
    love: {
      EN: "You don't need the perfect line. Just say something.",
      TH: "ไม่ต้องคิดประโยคสมบูรณ์แบบ แค่พูดอะไรสักอย่าง",
    },
    work: {
      EN: "Version one is allowed to be ugly.",
      TH: "เวอร์ชันแรกจะกากบ้างก็ได้",
    },
    advice: {
      EN: "Done beats perfect.",
      TH: "เสร็จดีกว่าสมบูรณ์แบบ",
    },
  },

  {
    id: 8,
    rank: "8",
    suit: "HEARTS",
    symbol: "♡",
    title: {
      EN: "The Notification",
      TH: "แจ้งเตือน",
    },
    prediction: {
      EN: "A message or opportunity may arrive when you stop checking for it every five minutes. The universe has terrible timing, apparently.",
      TH: "อาจมีข้อความหรือโอกาสเข้ามาตอนที่คุณเลิกเช็กทุก 5 นาที จักรวาลเลือกเวลาห่วยนิดหน่อย แต่ก็ประมาณนี้",
    },
    finance: {
      EN: "Check your bank account before saying yes.",
      TH: "เช็กยอดเงินก่อนตอบตกลงอะไร",
    },
    love: {
      EN: "Someone might finally reply.",
      TH: "มีโอกาสที่ใครบางคนจะตอบแชตสักที",
    },
    work: {
      EN: "Watch your inbox. Something useful may appear.",
      TH: "เช็ก inbox ไว้ อาจมีอะไรดี ๆ โผล่มา",
    },
    advice: {
      EN: "Put your phone down for ten minutes.",
      TH: "วางมือถือสัก 10 นาที",
    },
  },

  {
    id: 9,
    rank: "9",
    suit: "HEARTS",
    symbol: "♡",
    title: {
      EN: "Main Quest",
      TH: "ภารกิจหลัก",
    },
    prediction: {
      EN: "You have too many side quests. Pick the one thing that actually matters and give it your attention.",
      TH: "คุณมี side quest เยอะเกินไป เลือกสิ่งที่สำคัญจริง ๆ สักอย่างแล้วโฟกัส",
    },
    finance: {
      EN: "Stop funding side quests.",
      TH: "หยุดเติมเงินให้ side quest",
    },
    love: {
      EN: "Focus on the person you actually like.",
      TH: "โฟกัสคนที่คุณชอบจริง ๆ สักที",
    },
    work: {
      EN: "One finished task beats seven half-finished ones.",
      TH: "งานเสร็จหนึ่งอย่าง ดีกว่างานครึ่ง ๆ เจ็ดอย่าง",
    },
    advice: {
      EN: "Choose your main quest.",
      TH: "เลือกภารกิจหลักของตัวเอง",
    },
  },

  {
    id: 10,
    rank: "10",
    suit: "HEARTS",
    symbol: "♡",
    title: {
      EN: "Lucky Accident",
      TH: "ฟลุคเฉย",
    },
    prediction: {
      EN: "A small mistake may lead to something surprisingly useful. Don't panic when things go slightly wrong.",
      TH: "ความผิดพลาดเล็ก ๆ อาจพาคุณไปเจออะไรที่มีประโยชน์กว่าที่คิด อย่าเพิ่งตกใจเวลาทุกอย่างไม่เป็นตามแผน",
    },
    finance: {
      EN: "You may accidentally save money. Rare event.",
      TH: "อาจมีจังหวะเก็บเงินได้แบบไม่ได้ตั้งใจ เหตุการณ์หายาก",
    },
    love: {
      EN: "An awkward moment could become a good memory.",
      TH: "โมเมนต์เขิน ๆ อาจกลายเป็นความทรงจำดี ๆ",
    },
    work: {
      EN: "A bug might reveal a better solution.",
      TH: "บั๊กอาจทำให้เจอวิธีที่ดีกว่า",
    },
    advice: {
      EN: "Don't panic at the first mistake.",
      TH: "อย่าเพิ่งแตกตื่นกับความผิดพลาดครั้งแรก",
    },
  },

  {
    id: 11,
    rank: "J",
    suit: "HEARTS",
    symbol: "♡",
    title: {
      EN: "The Side Character",
      TH: "ตัวประกอบที่เด่นเกิน",
    },
    prediction: {
      EN: "You may unexpectedly become important in someone else's story. Be helpful, but remember you have your own plot too.",
      TH: "คุณอาจกลายเป็นคนสำคัญในเรื่องของใครบางคนโดยไม่รู้ตัว ช่วยคนอื่นได้ แต่อย่าลืมว่าคุณก็มีเรื่องของตัวเอง",
    },
    finance: {
      EN: "Someone may ask you for money. Think first.",
      TH: "อาจมีคนมายืมเงิน คิดก่อนให้",
    },
    love: {
      EN: "Someone sees you as more important than you realize.",
      TH: "มีคนมองว่าคุณสำคัญกว่าที่คุณคิด",
    },
    work: {
      EN: "Your help may be remembered.",
      TH: "สิ่งที่คุณช่วยอาจถูกจำได้",
    },
    advice: {
      EN: "Help others without abandoning yourself.",
      TH: "ช่วยคนอื่น แต่อย่าทิ้งตัวเอง",
    },
  },

  {
    id: 12,
    rank: "Q",
    suit: "HEARTS",
    symbol: "♡",
    title: {
      EN: "The Confidence Patch",
      TH: "แพตช์ความมั่นใจ",
    },
    prediction: {
      EN: "You are underestimating yourself. Not everything needs another tutorial, another review, or another person's permission.",
      TH: "คุณกำลังประเมินตัวเองต่ำไป ไม่ใช่ทุกอย่างต้องดู tutorial เพิ่ม ขอความเห็นเพิ่ม หรือรอให้ใครอนุญาต",
    },
    finance: {
      EN: "Don't confuse confidence with buying expensive stuff.",
      TH: "อย่าเอาความมั่นใจไปแปลงเป็นการซื้อของแพง",
    },
    love: {
      EN: "Confidence is attractive. Desperation is not.",
      TH: "ความมั่นใจดูดี ความพยายามเกินไปไม่ค่อย",
    },
    work: {
      EN: "Trust your own solution sometimes.",
      TH: "บางครั้งเชื่อวิธีของตัวเองบ้าง",
    },
    advice: {
      EN: "Stop asking for permission to start.",
      TH: "หยุดรออนุญาต แล้วเริ่มเลย",
    },
  },

  {
    id: 13,
    rank: "K",
    suit: "HEARTS",
    symbol: "♡",
    title: {
      EN: "Final Boss",
      TH: "บอสใหญ่",
    },
    prediction: {
      EN: "A difficult challenge is coming, but you're more prepared than you think. Unfortunately, preparation does not remove the boss fight.",
      TH: "มีเรื่องยากกำลังเข้ามา แต่คุณพร้อมกว่าที่คิด น่าเสียดายที่การเตรียมตัวไม่ได้ทำให้บอสหายไป",
    },
    finance: {
      EN: "Big expense energy. Plan before panic.",
      TH: "พลังงานค่าใช้จ่ายก้อนใหญ่ วางแผนก่อนตกใจ",
    },
    love: {
      EN: "Be direct. Mind games are exhausting.",
      TH: "พูดตรง ๆ เถอะ เกมเดาใจกันเหนื่อย",
    },
    work: {
      EN: "The hard task is the important task.",
      TH: "งานที่ยากมักเป็นงานที่สำคัญ",
    },
    advice: {
      EN: "Fight the boss, don't fight yourself.",
      TH: "สู้กับปัญหา อย่าสู้กับตัวเอง",
    },
  },

  {
    id: 14,
    rank: "A",
    suit: "DIAMONDS",
    symbol: "◇",
    title: {
      EN: "Money Has Entered",
      TH: "เงินเข้าครับ",
    },
    prediction: {
      EN: "Your financial situation has potential to improve, provided you don't immediately celebrate by spending everything.",
      TH: "การเงินมีโอกาสดีขึ้น ขอแค่อย่าเพิ่งฉลองด้วยการใช้หมดทันที",
    },
    finance: {
      EN: "Money comes in. Money mysteriously leaves.",
      TH: "มีเงิน แต่ไม่รู้หายไปไหน",
    },
    love: {
      EN: "Romance is currently cheaper than dinner.",
      TH: "ความรักช่วงนี้ถูกกว่ามื้อเย็น",
    },
    work: {
      EN: "A useful opportunity may appear.",
      TH: "มีโอกาสดี ๆ เรื่องงาน",
    },
    advice: {
      EN: "Save first. Celebrate later.",
      TH: "เก็บก่อน ฉลองทีหลัง",
    },
  },

  {
    id: 15,
    rank: "2",
    suit: "DIAMONDS",
    symbol: "◇",
    title: {
      EN: "Budget Boss",
      TH: "เจ้าแห่งงบ",
    },
    prediction: {
      EN: "You know exactly where your money should go. Whether you will actually do that is a completely different story.",
      TH: "คุณรู้ว่าเงินควรไปไหน แต่จะทำตามนั้นจริงหรือเปล่า เป็นอีกเรื่องหนึ่ง",
    },
    finance: {
      EN: "Make a budget before your cart becomes a lifestyle.",
      TH: "ทำงบก่อนที่ตะกร้าจะกลายเป็นไลฟ์สไตล์",
    },
    love: {
      EN: "Someone wants your attention, not your money.",
      TH: "มีคนต้องการความสนใจ ไม่ได้ต้องการเงินคุณ",
    },
    work: {
      EN: "Your practical thinking will help.",
      TH: "ความคิดแบบ practical จะช่วยคุณ",
    },
    advice: {
      EN: "Track your spending for one week.",
      TH: "ลองจดรายจ่ายหนึ่งสัปดาห์",
    },
  },

  {
    id: 16,
    rank: "3",
    suit: "DIAMONDS",
    symbol: "◇",
    title: {
      EN: "The Upgrade",
      TH: "อัปเกรด",
    },
    prediction: {
      EN: "You are entering a period where improving one small thing can make everything else easier. Upgrade the system, not just the output.",
      TH: "กำลังเข้าสู่ช่วงที่การปรับอะไรเล็ก ๆ จะทำให้หลายอย่างง่ายขึ้น อัปเกรดระบบ ไม่ใช่แค่ผลลัพธ์",
    },
    finance: {
      EN: "Spend on tools that actually save time.",
      TH: "ใช้เงินกับเครื่องมือที่ช่วยประหยัดเวลา",
    },
    love: {
      EN: "Better communication beats better flirting.",
      TH: "สื่อสารให้ดี สำคัญกว่าจีบให้เก่ง",
    },
    work: {
      EN: "Improve your workflow.",
      TH: "ปรับ workflow ของตัวเอง",
    },
    advice: {
      EN: "Fix the system causing the problem.",
      TH: "แก้ระบบที่ทำให้เกิดปัญหา",
    },
  },

  {
    id: 17,
    rank: "4",
    suit: "DIAMONDS",
    symbol: "◇",
    title: {
      EN: "Impulse Control",
      TH: "เบรกก่อน",
    },
    prediction: {
      EN: "You will see something you want. The universe asks one simple question: do you actually need it?",
      TH: "คุณกำลังจะเจอของที่อยากได้ จักรวาลถามคำถามง่าย ๆ ว่า จำเป็นจริงไหม",
    },
    finance: {
      EN: "Your cart is not a financial plan.",
      TH: "ตะกร้าสินค้าไม่ใช่แผนการเงิน",
    },
    love: {
      EN: "Don't impulse-text either.",
      TH: "อย่าส่งข้อความด้วยอารมณ์เหมือนกัน",
    },
    work: {
      EN: "Don't impulsively change the whole project.",
      TH: "อย่าเพิ่งเปลี่ยนโปรเจกต์ทั้งหมดเพราะอารมณ์",
    },
    advice: {
      EN: "Wait 24 hours before big decisions.",
      TH: "เรื่องใหญ่รอ 24 ชั่วโมงก่อน",
    },
  },

  {
    id: 18,
    rank: "5",
    suit: "DIAMONDS",
    symbol: "◇",
    title: {
      EN: "Unexpected Cash",
      TH: "เงินหล่น",
    },
    prediction: {
      EN: "A small financial win may appear. It probably won't make you rich, but it might buy you something nice and that's enough.",
      TH: "มีโอกาสได้เงินเล็ก ๆ แบบไม่คาดคิด ไม่ได้ทำให้รวย แต่พอซื้อของที่อยากได้",
    },
    finance: {
      EN: "Small win. Don't immediately multiply your spending.",
      TH: "ได้เงินเพิ่มนิดหน่อย อย่าเพิ่มรายจ่ายตาม",
    },
    love: {
      EN: "Someone may treat you.",
      TH: "มีโอกาสมีคนเลี้ยง",
    },
    work: {
      EN: "A small opportunity may pay off later.",
      TH: "โอกาสเล็ก ๆ อาจมีผลดีทีหลัง",
    },
    advice: {
      EN: "Keep part of every unexpected gain.",
      TH: "เงินที่ได้เพิ่ม เก็บไว้บางส่วน",
    },
  },

  {
    id: 19,
    rank: "6",
    suit: "DIAMONDS",
    symbol: "◇",
    title: {
      EN: "The Spreadsheet",
      TH: "ตาราง Excel",
    },
    prediction: {
      EN: "This is a good time to organize something you've been avoiding. Yes, that folder exists. Yes, you know which one.",
      TH: "ช่วงนี้เหมาะกับการจัดระเบียบสิ่งที่คุณหนีมาตลอด ใช่ครับ โฟลเดอร์นั้นมีอยู่ และคุณรู้ว่าอันไหน",
    },
    finance: {
      EN: "Know where your money goes.",
      TH: "รู้ว่าเงินตัวเองไปไหน",
    },
    love: {
      EN: "Don't turn feelings into a spreadsheet.",
      TH: "อย่าเอาความรู้สึกมาทำเป็น Excel",
    },
    work: {
      EN: "Organize your files.",
      TH: "จัดไฟล์บ้างครับ",
    },
    advice: {
      EN: "Clean one messy thing today.",
      TH: "วันนี้จัดของรกหนึ่งอย่าง",
    },
  },

  {
    id: 20,
    rank: "7",
    suit: "DIAMONDS",
    symbol: "◇",
    title: {
      EN: "The Side Income",
      TH: "เงินเสริม",
    },
    prediction: {
      EN: "An old skill or hobby could become useful again. Don't dismiss something just because you stopped doing it.",
      TH: "ทักษะเก่าหรืองานอดิเรกบางอย่างอาจกลับมามีประโยชน์ อย่าคิดว่ามันไม่มีค่าเพียงเพราะหยุดทำไป",
    },
    finance: {
      EN: "An old skill might make new money.",
      TH: "ทักษะเก่าอาจสร้างเงินใหม่",
    },
    love: {
      EN: "Your personality is worth more than a pickup line.",
      TH: "ตัวตนคุณสำคัญกว่าประโยคจีบ",
    },
    work: {
      EN: "Reuse something you've already learned.",
      TH: "เอาของที่เคยเรียนมาใช้ใหม่",
    },
    advice: {
      EN: "Look at your old skills again.",
      TH: "ลองกลับไปดูสิ่งที่เคยทำได้",
    },
  },

  {
    id: 21,
    rank: "8",
    suit: "DIAMONDS",
    symbol: "◇",
    title: {
      EN: "Stable-ish",
      TH: "เกือบนิ่ง",
    },
    prediction: {
      EN: "Things are becoming more stable, although your brain may continue behaving like there's a national emergency.",
      TH: "หลายอย่างกำลังนิ่งขึ้น ถึงสมองคุณจะยังทำเหมือนเกิดเหตุฉุกเฉินระดับประเทศก็ตาม",
    },
    finance: {
      EN: "Stable enough. Don't test it.",
      TH: "เริ่มนิ่งแล้ว อย่าเพิ่งลองของ",
    },
    love: {
      EN: "Calm is not boring.",
      TH: "ความสัมพันธ์นิ่งไม่ได้แปลว่าน่าเบื่อ",
    },
    work: {
      EN: "Keep your current rhythm.",
      TH: "รักษาจังหวะการทำงานไว้",
    },
    advice: {
      EN: "Don't create problems just to solve them.",
      TH: "อย่าสร้างปัญหาเพื่อให้ตัวเองมีอะไรแก้",
    },
  },

  {
    id: 22,
    rank: "9",
    suit: "DIAMONDS",
    symbol: "◇",
    title: {
      EN: "Treat Yourself",
      TH: "ให้รางวัลตัวเอง",
    },
    prediction: {
      EN: "You've worked harder than you admit. A small reward is fine. Just don't turn a small reward into a monthly subscription.",
      TH: "คุณเหนื่อยกว่าที่ตัวเองยอมรับ ให้รางวัลตัวเองได้ แต่อย่าเปลี่ยนรางวัลเล็ก ๆ เป็น subscription รายเดือน",
    },
    finance: {
      EN: "A small treat is allowed.",
      TH: "ซื้อของให้ตัวเองนิดหน่อยได้",
    },
    love: {
      EN: "Treat yourself before waiting for someone else.",
      TH: "ดูแลตัวเองก่อนรอให้คนอื่นมาดูแล",
    },
    work: {
      EN: "You deserve a small break.",
      TH: "พักบ้าง คุณสมควรพัก",
    },
    advice: {
      EN: "Reward progress, not perfection.",
      TH: "ให้รางวัลกับความก้าวหน้า",
    },
  },

  {
    id: 23,
    rank: "10",
    suit: "DIAMONDS",
    symbol: "◇",
    title: {
      EN: "Big Purchase Energy",
      TH: "พลังของของชิ้นใหญ่",
    },
    prediction: {
      EN: "Something expensive may catch your attention. Your wallet would like you to think about this for a little longer.",
      TH: "ของแพงบางอย่างกำลังจะเรียกชื่อคุณ กระเป๋าตังค์อยากให้คิดอีกนิด",
    },
    finance: {
      EN: "Research before buying.",
      TH: "หาข้อมูลก่อนซื้อ",
    },
    love: {
      EN: "Don't flex to impress someone.",
      TH: "อย่าซื้อของเพื่อเอาไว้ impress คนอื่น",
    },
    work: {
      EN: "Invest in useful equipment, not shiny toys.",
      TH: "ลงทุนกับของที่ใช้จริง",
    },
    advice: {
      EN: "Sleep on expensive decisions.",
      TH: "ของแพงคิดข้ามคืน",
    },
  },

  {
    id: 24,
    rank: "J",
    suit: "DIAMONDS",
    symbol: "◇",
    title: {
      EN: "Wallet Warrior",
      TH: "นักรบกระเป๋าตังค์",
    },
    prediction: {
      EN: "You are entering a period where discipline will matter more than luck. Good news: discipline is cheaper.",
      TH: "ช่วงนี้วินัยสำคัญกว่าโชค ข่าวดีคือวินัยฟรี",
    },
    finance: {
      EN: "Your wallet needs boundaries.",
      TH: "กระเป๋าตังค์ต้องมีขอบเขต",
    },
    love: {
      EN: "Set boundaries there too.",
      TH: "เรื่องความรักก็เหมือนกัน",
    },
    work: {
      EN: "Consistency will beat motivation.",
      TH: "ความสม่ำเสมอจะชนะ motivation",
    },
    advice: {
      EN: "Make a rule and follow it.",
      TH: "ตั้งกฎให้ตัวเองแล้วทำตาม",
    },
  },

  {
    id: 25,
    rank: "Q",
    suit: "DIAMONDS",
    symbol: "◇",
    title: {
      EN: "Financial Adult",
      TH: "ผู้ใหญ่ทางการเงิน",
    },
    prediction: {
      EN: "You are slowly becoming the person who checks prices before buying things. Character development.",
      TH: "คุณกำลังกลายเป็นคนที่เช็กราคาก่อนซื้อของ นี่คือ character development",
    },
    finance: {
      EN: "Responsible money energy.",
      TH: "พลังงานการเงินเริ่มมีความรับผิดชอบ",
    },
    love: {
      EN: "Maturity looks good on you.",
      TH: "ความเป็นผู้ใหญ่ดูดีบนตัวคุณ",
    },
    work: {
      EN: "Take ownership.",
      TH: "รับผิดชอบงานของตัวเองให้เต็มที่",
    },
    advice: {
      EN: "Future-you will appreciate this.",
      TH: "ตัวคุณในอนาคตจะขอบคุณ",
    },
  },

  {
    id: 26,
    rank: "K",
    suit: "DIAMONDS",
    symbol: "◇",
    title: {
      EN: "CEO of Yourself",
      TH: "CEO ของชีวิต",
    },
    prediction: {
      EN: "Take control of the things you can control. Everything else can wait in the queue.",
      TH: "ควบคุมสิ่งที่ควบคุมได้ก่อน ส่วนที่เหลือรอคิวไป",
    },
    finance: {
      EN: "Build stability before flexing.",
      TH: "สร้างความมั่นคงก่อนโชว์",
    },
    love: {
      EN: "Know what you want.",
      TH: "รู้ว่าตัวเองต้องการอะไร",
    },
    work: {
      EN: "Act like your work matters.",
      TH: "ทำเหมือนงานตัวเองมีความหมาย",
    },
    advice: {
      EN: "Lead yourself first.",
      TH: "นำตัวเองให้ได้ก่อน",
    },
  },

  {
    id: 27,
    rank: "A",
    suit: "CLUBS",
    symbol: "♧",
    title: {
      EN: "New Tab",
      TH: "เปิดแท็บใหม่",
    },
    prediction: {
      EN: "A new idea is coming. The danger is opening 14 more ideas before finishing the first one.",
      TH: "ไอเดียใหม่กำลังมา ปัญหาคือคุณอาจเปิดไอเดียใหม่อีก 14 อันก่อนทำอันแรกเสร็จ",
    },
    finance: {
      EN: "New opportunity, new temptation.",
      TH: "โอกาสใหม่มาพร้อมของให้อยากซื้อ",
    },
    love: {
      EN: "Fresh energy. Don't rush.",
      TH: "พลังใหม่ ๆ มาแล้ว แต่อย่ารีบ",
    },
    work: {
      EN: "Start the project.",
      TH: "เริ่มโปรเจกต์ได้แล้ว",
    },
    advice: {
      EN: "One tab at a time.",
      TH: "ทำทีละแท็บ",
    },
  },

  {
    id: 28,
    rank: "2",
    suit: "CLUBS",
    symbol: "♧",
    title: {
      EN: "Teamwork",
      TH: "รวมทีม",
    },
    prediction: {
      EN: "You don't have to do everything alone. Someone else might actually be good at the thing you're struggling with.",
      TH: "คุณไม่จำเป็นต้องทำทุกอย่างคนเดียว บางทีคนอื่นอาจเก่งเรื่องที่คุณกำลังปวดหัวอยู่",
    },
    finance: {
      EN: "Sharing costs might help.",
      TH: "แชร์ค่าใช้จ่ายอาจช่วยได้",
    },
    love: {
      EN: "Let someone help.",
      TH: "เปิดโอกาสให้ใครช่วยบ้าง",
    },
    work: {
      EN: "Ask for help sooner.",
      TH: "ขอความช่วยเหลือเร็วขึ้น",
    },
    advice: {
      EN: "You are allowed to delegate.",
      TH: "แบ่งงานได้ ไม่ต้องแบกทุกอย่าง",
    },
  },

  {
    id: 29,
    rank: "3",
    suit: "CLUBS",
    symbol: "♧",
    title: {
      EN: "Tiny Win",
      TH: "ชนะเล็ก ๆ",
    },
    prediction: {
      EN: "Don't underestimate small progress. One completed task can create enough momentum to change the entire day.",
      TH: "อย่าดูถูกความก้าวหน้าเล็ก ๆ งานที่เสร็จหนึ่งอย่างอาจทำให้ทั้งวันเปลี่ยน",
    },
    finance: {
      EN: "Small savings add up.",
      TH: "เงินเก็บเล็ก ๆ รวมกันเป็นเงินก้อน",
    },
    love: {
      EN: "Small gestures matter.",
      TH: "เรื่องเล็ก ๆ สำคัญ",
    },
    work: {
      EN: "Finish one easy task.",
      TH: "ปิดงานง่าย ๆ หนึ่งงาน",
    },
    advice: {
      EN: "Collect small wins.",
      TH: "เก็บชัยชนะเล็ก ๆ ไปเรื่อย ๆ",
    },
  },

  {
    id: 30,
    rank: "4",
    suit: "CLUBS",
    symbol: "♧",
    title: {
      EN: "Productivity Cosplay",
      TH: "เล่นเป็นคน productive",
    },
    prediction: {
      EN: "You have mastered the art of looking busy. Now comes the difficult part: actually doing the thing.",
      TH: "คุณเก่งเรื่องทำให้ดูเหมือนยุ่งแล้ว เหลือขั้นตอนยากคือทำงานจริง",
    },
    finance: {
      EN: "Stop researching purchases you won't make.",
      TH: "หยุดรีวิวของที่ยังไงก็ไม่ซื้อ",
    },
    love: {
      EN: "Stop checking their profile.",
      TH: "หยุดส่องโปรไฟล์เขา",
    },
    work: {
      EN: "Work for 25 minutes. Seriously.",
      TH: "ทำงาน 25 นาทีจริง ๆ",
    },
    advice: {
      EN: "Close the productivity video.",
      TH: "ปิดคลิป productivity แล้วทำงาน",
    },
  },

  {
    id: 31,
    rank: "5",
    suit: "CLUBS",
    symbol: "♧",
    title: {
      EN: "Creative Damage",
      TH: "ความคิดสร้างสรรค์ทำงาน",
    },
    prediction: {
      EN: "Your weird idea deserves at least one prototype. It doesn't have to make sense yet. That's what prototypes are for.",
      TH: "ไอเดียแปลก ๆ ของคุณควรได้ลองทำต้นแบบสักครั้ง ไม่ต้องสมเหตุสมผลตอนนี้ก็ได้",
    },
    finance: {
      EN: "Creative ideas may become useful later.",
      TH: "ไอเดียสร้างสรรค์อาจกลายเป็นเงินในอนาคต",
    },
    love: {
      EN: "Your weirdness is part of the charm.",
      TH: "ความแปลกของคุณก็เป็นเสน่ห์",
    },
    work: {
      EN: "Prototype before judging.",
      TH: "ทำต้นแบบก่อนตัดสิน",
    },
    advice: {
      EN: "Make the weird thing.",
      TH: "ทำของแปลก ๆ นั่นแหละ",
    },
  },

  {
    id: 32,
    rank: "6",
    suit: "CLUBS",
    symbol: "♧",
    title: {
      EN: "Bug Hunter",
      TH: "นักล่าบั๊ก",
    },
    prediction: {
      EN: "Something isn't working because you missed one tiny detail. You will find it. You will also be slightly angry when you do.",
      TH: "บางอย่างไม่ทำงานเพราะคุณพลาดรายละเอียดเล็ก ๆ และคุณจะเจอในที่สุด พร้อมความรู้สึกว่า 'แค่นี้เนี่ยนะ'",
    },
    finance: {
      EN: "Check the small charges.",
      TH: "เช็กค่าใช้จ่ายเล็ก ๆ",
    },
    love: {
      EN: "Don't overanalyze tiny details.",
      TH: "อย่าวิเคราะห์เรื่องเล็กเกินไป",
    },
    work: {
      EN: "Check the obvious thing first.",
      TH: "เช็กจุดง่าย ๆ ก่อน",
    },
    advice: {
      EN: "Read the error message.",
      TH: "อ่าน error ก่อนครับ",
    },
  },

  {
    id: 33,
    rank: "7",
    suit: "CLUBS",
    symbol: "♧",
    title: {
      EN: "Lucky Timing",
      TH: "จังหวะดี",
    },
    prediction: {
      EN: "Timing may work in your favor. An opportunity can appear shortly after you decide to finally stop waiting.",
      TH: "จังหวะกำลังเข้าข้างคุณ โอกาสอาจมาไม่นานหลังจากที่คุณตัดสินใจเลิกนั่งรอ",
    },
    finance: {
      EN: "Good time to compare options.",
      TH: "เหมาะกับการเปรียบเทียบตัวเลือก",
    },
    love: {
      EN: "Say it when the moment feels right.",
      TH: "พูดตอนจังหวะเหมาะ",
    },
    work: {
      EN: "Good timing for a launch.",
      TH: "เหมาะกับการปล่อยงาน",
    },
    advice: {
      EN: "Stop waiting for perfect timing.",
      TH: "อย่ารอจังหวะสมบูรณ์แบบ",
    },
  },

  {
    id: 34,
    rank: "8",
    suit: "CLUBS",
    symbol: "♧",
    title: {
      EN: "Deep Focus",
      TH: "เข้าโหมด",
    },
    prediction: {
      EN: "You can get a lot done when you stop switching between twelve things. Your attention is powerful. Please stop donating it to notifications.",
      TH: "คุณทำอะไรได้เยอะมากเมื่อหยุดสลับไปมา 12 อย่าง สมาธิคุณมีพลังมาก อย่าแจกให้ notification",
    },
    finance: {
      EN: "Focus on earning before optimizing tiny savings.",
      TH: "โฟกัสการสร้างรายได้ก่อน",
    },
    love: {
      EN: "Give someone your full attention.",
      TH: "ให้ความสนใจกับใครสักคนเต็มที่",
    },
    work: {
      EN: "One task. No switching.",
      TH: "งานเดียว ห้ามสลับ",
    },
    advice: {
      EN: "Turn notifications off.",
      TH: "ปิด notification",
    },
  },

  {
    id: 35,
    rank: "9",
    suit: "CLUBS",
    symbol: "♧",
    title: {
      EN: "The Grind",
      TH: "ถึงเวลาทำ",
    },
    prediction: {
      EN: "Motivation may not show up. That's fine. Start anyway. Motivation is often a guest who arrives after the work begins.",
      TH: "แรงบันดาลใจอาจไม่มา ไม่เป็นไร เริ่มก่อน เพราะบางทีมันจะมาตอนที่คุณเริ่มทำแล้ว",
    },
    finance: {
      EN: "Consistent income beats random luck.",
      TH: "รายได้สม่ำเสมอดีกว่าโชค",
    },
    love: {
      EN: "Consistency matters.",
      TH: "ความสม่ำเสมอสำคัญ",
    },
    work: {
      EN: "Do the boring part.",
      TH: "ทำส่วนที่น่าเบื่อ",
    },
    advice: {
      EN: "Start before you feel ready.",
      TH: "เริ่มก่อนพร้อม",
    },
  },

  {
    id: 36,
    rank: "10",
    suit: "CLUBS",
    symbol: "♧",
    title: {
      EN: "Achievement Unlocked",
      TH: "ปลดล็อก achievement",
    },
    prediction: {
      EN: "You are about to finish something you've been dragging around for too long. The relief will be better than the achievement itself.",
      TH: "คุณกำลังจะปิดงานที่ลากมานาน และความโล่งหลังเสร็จอาจดีกว่ารางวัลเสียอีก",
    },
    finance: {
      EN: "Finishing things can create value.",
      TH: "งานที่เสร็จสร้างมูลค่า",
    },
    love: {
      EN: "Closure is also progress.",
      TH: "การปิดเรื่องค้างคาก็ถือว่าก้าวหน้า",
    },
    work: {
      EN: "Finish the old task.",
      TH: "ปิดงานเก่า",
    },
    advice: {
      EN: "Remove one thing from your backlog.",
      TH: "ลบหนึ่งอย่างออกจาก backlog",
    },
  },

  {
    id: 37,
    rank: "J",
    suit: "CLUBS",
    symbol: "♧",
    title: {
      EN: "Chaos Engineer",
      TH: "วิศวกรความวุ่นวาย",
    },
    prediction: {
      EN: "Your process is questionable but somehow effective. Don't break it just because it doesn't look normal.",
      TH: "วิธีทำงานของคุณอาจดูแปลก แต่ดันได้ผล อย่าเปลี่ยนเพียงเพราะมันไม่เหมือนคนอื่น",
    },
    finance: {
      EN: "Weird ideas can make money.",
      TH: "ไอเดียแปลก ๆ ทำเงินได้",
    },
    love: {
      EN: "Being yourself works surprisingly well.",
      TH: "เป็นตัวเองก็เวิร์กกว่าที่คิด",
    },
    work: {
      EN: "Your unconventional method might work.",
      TH: "วิธีแปลก ๆ ของคุณอาจใช้ได้",
    },
    advice: {
      EN: "Don't optimize what already works.",
      TH: "อย่า optimize ของที่ใช้ได้อยู่แล้ว",
    },
  },

  {
    id: 38,
    rank: "Q",
    suit: "CLUBS",
    symbol: "♧",
    title: {
      EN: "Idea Machine",
      TH: "เครื่องผลิตไอเดีย",
    },
    prediction: {
      EN: "Your mind is producing more ideas than your schedule can handle. Write them down. You don't need to execute everything immediately.",
      TH: "สมองคุณกำลังผลิตไอเดียเร็วกว่าตารางชีวิตจะรับไหว จดไว้ก่อน ไม่ต้องทำทุกอย่างทันที",
    },
    finance: {
      EN: "One good idea is enough.",
      TH: "ไอเดียดีหนึ่งอันก็พอ",
    },
    love: {
      EN: "Don't overcomplicate simple feelings.",
      TH: "ความรู้สึกง่าย ๆ ไม่ต้องทำให้ซับซ้อน",
    },
    work: {
      EN: "Capture ideas before they disappear.",
      TH: "จดไอเดียก่อนหาย",
    },
    advice: {
      EN: "Keep an idea dump.",
      TH: "มีที่จดไอเดียไว้ที่เดียว",
    },
  },

  {
    id: 39,
    rank: "K",
    suit: "CLUBS",
    symbol: "♧",
    title: {
      EN: "Build Mode",
      TH: "โหมดสร้าง",
    },
    prediction: {
      EN: "This is a good period to build something instead of endlessly consuming other people's work. Make something that didn't exist yesterday.",
      TH: "ช่วงนี้เหมาะกับการสร้างอะไรบางอย่าง แทนที่จะดูผลงานคนอื่นไปเรื่อย ๆ ทำของที่เมื่อวานยังไม่มีให้เกิดขึ้น",
    },
    finance: {
      EN: "Build assets, not just purchases.",
      TH: "สร้างสิ่งที่มีมูลค่า ไม่ใช่แค่ซื้อ",
    },
    love: {
      EN: "Build trust slowly.",
      TH: "สร้างความไว้ใจทีละนิด",
    },
    work: {
      EN: "Ship something.",
      TH: "ปล่อยผลงานออกมา",
    },
    advice: {
      EN: "Create before consuming.",
      TH: "สร้างก่อนเสพ",
    },
  },

  {
    id: 40,
    rank: "A",
    suit: "SPADES",
    symbol: "♤",
    title: {
      EN: "Plot Armor",
      TH: "เกราะบท",
    },
    prediction: {
      EN: "You might escape a situation that looked worse than it actually was. Don't assume disaster before the scene is finished.",
      TH: "คุณอาจรอดจากเรื่องที่ตอนแรกดูแย่กว่าความจริง อย่าเพิ่งคิดว่าพังจนกว่าฉากจะจบ",
    },
    finance: {
      EN: "Avoid unnecessary risk.",
      TH: "เลี่ยงความเสี่ยงที่ไม่จำเป็น",
    },
    love: {
      EN: "Give people a chance before judging.",
      TH: "ให้โอกาสก่อนตัดสิน",
    },
    work: {
      EN: "Don't panic at the first setback.",
      TH: "อย่าแตกตื่นกับอุปสรรคแรก",
    },
    advice: {
      EN: "Wait for the full story.",
      TH: "รอดูเรื่องทั้งหมดก่อน",
    },
  },

  {
    id: 41,
    rank: "2",
    suit: "SPADES",
    symbol: "♤",
    title: {
      EN: "Decision Time",
      TH: "เลือกสักที",
    },
    prediction: {
      EN: "You have been comparing two options for too long. Neither is perfect. Pick one and make it work.",
      TH: "คุณเปรียบเทียบสองทางเลือกมานานเกินไป ไม่มีอันไหนสมบูรณ์แบบ เลือกสักอันแล้วทำให้มันเวิร์ก",
    },
    finance: {
      EN: "Compare prices, then decide.",
      TH: "เปรียบเทียบราคาแล้วตัดสินใจ",
    },
    love: {
      EN: "Stop keeping both doors half-open.",
      TH: "อย่าเปิดสองประตูค้างไว้ครึ่งหนึ่ง",
    },
    work: {
      EN: "Commit to one direction.",
      TH: "เลือกทิศทางแล้วไปต่อ",
    },
    advice: {
      EN: "Decide.",
      TH: "เลือกครับ",
    },
  },

  {
    id: 42,
    rank: "3",
    suit: "SPADES",
    symbol: "♤",
    title: {
      EN: "Reality Check",
      TH: "กลับสู่โลกจริง",
    },
    prediction: {
      EN: "Something needs less imagination and more action. The answer probably isn't another hour of research.",
      TH: "บางเรื่องต้องใช้การลงมือมากกว่าจินตนาการ คำตอบอาจไม่ใช่การหาข้อมูลเพิ่มอีกหนึ่งชั่วโมง",
    },
    finance: {
      EN: "Check the actual numbers.",
      TH: "ดูตัวเลขจริง",
    },
    love: {
      EN: "Ask instead of guessing.",
      TH: "ถามแทนการเดา",
    },
    work: {
      EN: "Test the idea.",
      TH: "ลองทำจริง",
    },
    advice: {
      EN: "Reality beats speculation.",
      TH: "ความจริงดีกว่าการมโน",
    },
  },

  {
    id: 43,
    rank: "4",
    suit: "SPADES",
    symbol: "♤",
    title: {
      EN: "Do Not Disturb",
      TH: "ห้ามรบกวน",
    },
    prediction: {
      EN: "Your next breakthrough may require fewer people, fewer notifications, and fewer opinions. Protect your attention.",
      TH: "ความก้าวหน้าครั้งต่อไปอาจต้องการคนให้น้อยลง notification ให้น้อยลง และความคิดเห็นจากคนอื่นให้น้อยลง",
    },
    finance: {
      EN: "Don't shop when distracted.",
      TH: "อย่าช้อปตอนสมาธิหลุด",
    },
    love: {
      EN: "Take some personal space.",
      TH: "ให้พื้นที่ตัวเองบ้าง",
    },
    work: {
      EN: "Block uninterrupted time.",
      TH: "กันเวลาที่ไม่มีใครรบกวน",
    },
    advice: {
      EN: "Turn on Do Not Disturb.",
      TH: "เปิด Do Not Disturb",
    },
  },

  {
    id: 44,
    rank: "5",
    suit: "SPADES",
    symbol: "♤",
    title: {
      EN: "Tiny Disaster",
      TH: "พังนิดหน่อย",
    },
    prediction: {
      EN: "Something small may go wrong. It will feel dramatic for about twenty minutes and then become a funny story.",
      TH: "อาจมีเรื่องเล็ก ๆ พัง มันจะดูใหญ่ประมาณ 20 นาที แล้วสุดท้ายจะกลายเป็นเรื่องตลก",
    },
    finance: {
      EN: "Keep an emergency buffer.",
      TH: "กันเงินฉุกเฉินไว้",
    },
    love: {
      EN: "Don't turn one bad moment into a whole story.",
      TH: "อย่าเอาโมเมนต์แย่หนึ่งครั้งมาตัดสินทั้งหมด",
    },
    work: {
      EN: "Backup your files.",
      TH: "สำรองไฟล์",
    },
    advice: {
      EN: "Prepare for small problems.",
      TH: "เตรียมรับปัญหาเล็ก ๆ",
    },
  },

  {
    id: 45,
    rank: "6",
    suit: "SPADES",
    symbol: "♤",
    title: {
      EN: "Clean Slate",
      TH: "ล้างกระดาน",
    },
    prediction: {
      EN: "You are allowed to abandon a plan that no longer makes sense. Changing direction isn't failure. Sometimes it's just updating the map.",
      TH: "คุณมีสิทธิ์ทิ้งแผนที่ไม่เวิร์กแล้ว การเปลี่ยนทางไม่ใช่ความล้มเหลว บางครั้งแค่เปลี่ยนแผนที่",
    },
    finance: {
      EN: "Cancel something you don't use.",
      TH: "ยกเลิกสิ่งที่ไม่ได้ใช้",
    },
    love: {
      EN: "Old stories don't need new chapters.",
      TH: "เรื่องเก่าไม่จำเป็นต้องมีตอนใหม่",
    },
    work: {
      EN: "Delete unnecessary work.",
      TH: "ตัดงานที่ไม่จำเป็น",
    },
    advice: {
      EN: "Start lighter.",
      TH: "เริ่มใหม่แบบเบากว่าเดิม",
    },
  },

  {
    id: 46,
    rank: "7",
    suit: "SPADES",
    symbol: "♤",
    title: {
      EN: "The Detective",
      TH: "นักสืบ",
    },
    prediction: {
      EN: "You are about to discover why something has been bothering you. Follow the evidence, not the assumptions.",
      TH: "คุณกำลังจะรู้ว่าทำไมบางอย่างถึงกวนใจ ใช้หลักฐาน ไม่ใช่การเดา",
    },
    finance: {
      EN: "Check the fine print.",
      TH: "อ่านรายละเอียดเล็ก ๆ",
    },
    love: {
      EN: "Ask what they actually mean.",
      TH: "ถามว่าเขาหมายถึงอะไรจริง ๆ",
    },
    work: {
      EN: "Find the root cause.",
      TH: "หาต้นเหตุ",
    },
    advice: {
      EN: "Investigate before reacting.",
      TH: "หาข้อมูลก่อนตอบโต้",
    },
  },

  {
    id: 47,
    rank: "8",
    suit: "SPADES",
    symbol: "♤",
    title: {
      EN: "No More Excuses",
      TH: "ข้ออ้างหมดแล้ว",
    },
    prediction: {
      EN: "You already know what needs to happen next. The only missing ingredient is actually doing it.",
      TH: "คุณรู้อยู่แล้วว่าต้องทำอะไรต่อ เหลือแค่ลงมือ",
    },
    finance: {
      EN: "Make the financial decision.",
      TH: "ตัดสินใจเรื่องเงินได้แล้ว",
    },
    love: {
      EN: "Say what you mean.",
      TH: "พูดสิ่งที่รู้สึก",
    },
    work: {
      EN: "Open the project and start.",
      TH: "เปิดโปรเจกต์แล้วเริ่ม",
    },
    advice: {
      EN: "No more excuses.",
      TH: "ไม่มีข้ออ้างแล้วครับ",
    },
  },

  {
    id: 48,
    rank: "9",
    suit: "SPADES",
    symbol: "♤",
    title: {
      EN: "Almost Burnout",
      TH: "เกือบไหม้",
    },
    prediction: {
      EN: "You can push harder, but that doesn't mean you should. Long-term progress requires knowing when to stop pretending you have infinite energy.",
      TH: "คุณฝืนต่อได้ แต่ไม่ได้แปลว่าควรฝืน ความก้าวหน้าระยะยาวต้องรู้ว่าเมื่อไหร่ควรหยุด",
    },
    finance: {
      EN: "Don't spend to compensate for stress.",
      TH: "อย่าใช้เงินชดเชยความเครียด",
    },
    love: {
      EN: "Tell people when you need space.",
      TH: "บอกคนอื่นเมื่อคุณต้องการพื้นที่",
    },
    work: {
      EN: "Rest before productivity collapses.",
      TH: "พักก่อน productivity พัง",
    },
    advice: {
      EN: "Sleep.",
      TH: "นอนครับ",
    },
  },

  {
    id: 49,
    rank: "10",
    suit: "SPADES",
    symbol: "♤",
    title: {
      EN: "Victory Lap",
      TH: "รอบแห่งชัยชนะ",
    },
    prediction: {
      EN: "Something difficult is finally becoming easier. You earned this. Take a moment to notice how far you've come.",
      TH: "บางอย่างที่เคยยากกำลังง่ายขึ้น คุณทำมันมาไกลแล้ว ลองหยุดดูความก้าวหน้าของตัวเองบ้าง",
    },
    finance: {
      EN: "You're learning to manage money better.",
      TH: "คุณเริ่มจัดการเงินได้ดีขึ้น",
    },
    love: {
      EN: "You are becoming more secure.",
      TH: "คุณเริ่มมั่นคงกับความรู้สึกมากขึ้น",
    },
    work: {
      EN: "Your skills are stacking up.",
      TH: "ทักษะกำลังสะสม",
    },
    advice: {
      EN: "Give yourself credit.",
      TH: "ชมตัวเองบ้าง",
    },
  },

  {
    id: 50,
    rank: "J",
    suit: "SPADES",
    symbol: "♤",
    title: {
      EN: "Wildcard",
      TH: "ตัวแปรลับ",
    },
    prediction: {
      EN: "Something completely outside your current plan may become important. Stay flexible. The best part of the story may not be planned yet.",
      TH: "บางอย่างนอกแผนอาจกลายเป็นเรื่องสำคัญ เปิดใจไว้ เพราะส่วนที่ดีที่สุดของเรื่องอาจยังไม่ได้เขียน",
    },
    finance: {
      EN: "Keep some flexibility in your budget.",
      TH: "เผื่องบไว้สำหรับเรื่องไม่คาดคิด",
    },
    love: {
      EN: "Expect the unexpected.",
      TH: "ความรักอาจมีตัวแปร",
    },
    work: {
      EN: "Stay adaptable.",
      TH: "ปรับตัวให้ไว",
    },
    advice: {
      EN: "Leave room for surprises.",
      TH: "เผื่อพื้นที่ให้เรื่องไม่คาดคิด",
    },
  },

  {
    id: 51,
    rank: "Q",
    suit: "SPADES",
    symbol: "♤",
    title: {
      EN: "CEO of Overthinking",
      TH: "CEO แห่งการคิดเยอะ",
    },
    prediction: {
      EN: "You have analyzed the situation enough to qualify for a PhD. Unfortunately, the answer still requires a decision.",
      TH: "คุณวิเคราะห์เรื่องนี้มากพอจนได้ปริญญาเอกแล้ว แต่สุดท้ายก็ยังต้องตัดสินใจอยู่ดี",
    },
    finance: {
      EN: "You don't need 37 tabs comparing prices.",
      TH: "ไม่ต้องเปิด 37 แท็บเพื่อเทียบราคา",
    },
    love: {
      EN: "Stop decoding every message.",
      TH: "หยุดถอดรหัสทุกข้อความ",
    },
    work: {
      EN: "Make the call.",
      TH: "ตัดสินใจสักที",
    },
    advice: {
      EN: "Think less. Test more.",
      TH: "คิดให้น้อยลง ลองให้มากขึ้น",
    },
  },

  {
    id: 52,
    rank: "K",
    suit: "SPADES",
    symbol: "♤",
    title: {
      EN: "You Got This",
      TH: "เอาอยู่",
    },
    prediction: {
      EN: "You don't need a perfect sign from the universe. You already have enough information to move forward. Trust yourself, take the next step, and figure out the rest along the way.",
      TH: "คุณไม่จำเป็นต้องรอสัญญาณจากจักรวาลแบบชัด ๆ คุณมีข้อมูลมากพอที่จะเดินต่อแล้ว เชื่อตัวเอง ก้าวต่อไป แล้วค่อยแก้สิ่งที่เหลือระหว่างทาง",
    },
    finance: {
      EN: "Be smart, not scared.",
      TH: "รอบคอบได้ แต่อย่ากลัวจนไม่กล้าทำ",
    },
    love: {
      EN: "Be honest about what you want.",
      TH: "ซื่อสัตย์กับสิ่งที่ตัวเองต้องการ",
    },
    work: {
      EN: "You know more than you think.",
      TH: "คุณรู้มากกว่าที่คิด",
    },
    advice: {
      EN: "Take the next step.",
      TH: "ก้าวต่อไปได้เลย",
    },
  },
];

export default cards;