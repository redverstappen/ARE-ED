"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Language = "EN" | "TH";

type Props = {
  language: Language;
  onBack: () => void;
};

type ResultIndices = {
  job: number;
  money: number;
  love: number;
  ending: number;
};

const DATA = {
  EN: {
    eyebrow: "ARE_ED // FORTUNE TELLER 'RED'",

    title: "Let Me Cook, Trust Me Bro",

    subtitle:
      "Three predictions. Zero guarantees.",

    labels: {
      job: "CAREER",
      money: "FINANCE",
      love: "LOVE",
    },

    button: "SHOW ME WHAT RED SEES",
    again: "SHOW ME AGAIN",

    building: "READING YOUR FUTURE...",
    final: "HERE'S WHAT I SEE",

    ready: "SYSTEM READY",
    running: "RUNNING",
    idle: "IDLE",

    resultTitle: "SYSTEM VERDICT",

    disclaimer:
      "Results are randomly generated. Your future is probably safe.",

    jobs: [
      "Your boss may praise you soon. Enjoy it before they ask for more work.",
      "Your career is going well. You just need to stop saying 'I'll do it tomorrow.'",
      "You may get a new task. Nobody knows why, including the person who gave it to you.",
      "Your work will improve when you stop checking your phone every five minutes.",
      "You have a good chance of getting noticed. Please don't panic when everyone looks at you.",
      "A big opportunity may come. Try not to answer 'sure' before hearing the whole question.",
      "You may become the person everyone asks for help. You may regret being good at things.",
      "Your next project looks promising. Your sleep schedule does not.",
      "A meeting may appear on your calendar for absolutely no reason.",
      "Your career is moving forward. Your motivation is waiting for a deadline.",
      "You are more capable than you think. Your procrastination is also more capable than you think.",
      "A compliment from your boss may be followed by 'Can you do one more thing?'",
      "You could be a great leader. First, please remember where you put your own stuff.",
      "A simple task may take all day because you somehow made it complicated.",
      "Success is likely if you open the work file before opening YouTube.",
      "You may spend today fixing a problem that started with 'I thought this would be easy.'",
      "A fun project may become serious. This is how 'just one hour' becomes 2 AM.",
      "You will learn something useful and immediately wonder why you didn't learn it sooner.",
      "You may finally get work you enjoy. You will still complain about it. That's normal.",
      "Your productivity is strong when the deadline is close enough to scare you.",
      "You have leadership potential. Your bed remains your strongest opponent.",
      "Work may find you even when you are trying very hard not to find work.",
      "Someone may ask how you did something. Just smile and don't mention the Google search.",
      "Your career improves the moment you stop making tomorrow do today's work.",
      "You could make something impressive. First, stop reorganizing your desk to avoid starting.",
      "Your career looks good. Your motivation will arrive approximately 30 minutes before the deadline.",
      "People may remember something you create. Please give them a good reason.",
      "You may change your plan again. At least this time, pretend it was intentional.",
      "You are getting better. Please don't quit just because you are not good at it yet.",
      "Career verdict: you have potential. Now do the thing you keep saying you'll do later.",
    ],

    money: [
      "Money is coming in. It is also preparing to leave.",
      "Your money is very active. It refuses to sit still in your bank account.",
      "You could get richer soon. Your shopping habits are already waiting.",
      "Payday may make you feel rich for about six hours.",
      "Your money luck is excellent, especially when someone else is paying.",
      "The universe says 'save money.' The sale says 'buy now.'",
      "You may receive extra money. Please don't immediately give it back to the internet.",
      "You are not broke. You simply have expensive taste.",
      "Your finances are recovering. Please stop ordering things to celebrate.",
      "You may earn more money and spend more money at exactly the same speed.",
      "Your wallet is doing its best. Please cooperate.",
      "Money will last longer if you stop saying 'It's only a little bit.'",
      "A great deal may appear. Your wallet would like you to walk away.",
      "Your bank account is alive. It just needs some peace and quiet.",
      "Your financial future looks bright. Your delivery app history looks suspicious.",
      "You can save money. You just need to stop buying things because they are cute.",
      "Your income may increase. So will the number of things you suddenly 'need.'",
      "You may find money you forgot about. Then you will remember where you spent it.",
      "You are good at making money. You are equally good at making it disappear.",
      "This is a good month to save money. Revolutionary idea, we know.",
      "Extra money may arrive right after you say, 'Fine, I'll eat instant noodles.'",
      "You may become rich. First, defeat the final boss: late-night shopping.",
      "Your bank balance is not hiding from you. It is just taking emotional damage.",
      "You don't spend money badly. You spend it with confidence.",
      "You could save a lot this month, unless your wishlist has other plans.",
      "Future you may have more money. Please leave some for them.",
      "Think before you buy. The discount is not going to think for you.",
      "Money is on the way. Please don't spend it before it arrives.",
      "Your wallet has a simple request: please stop saying 'future me can deal with it.'",
      "Money verdict: earning is going well. Saving is still under construction.",
    ],

    love: [
      "You may get a partner soon. The system is still looking for them.",
      "Someone may like you. They are also waiting for you to make the first move.",
      "Your love life is going well, except for the part where you are still single.",
      "You may start talking to someone new and end up liking each other's stories for six months.",
      "The right person may be coming. Please wake up first.",
      "Someone is coming into your life. Whether they bring love or problems is still unclear.",
      "Your heart is available. Your overthinking is fully booked.",
      "You may get the message you are waiting for. Stop checking your phone every ten seconds.",
      "The person you like may like you back. Neither of you is brave enough to say it.",
      "Your love life is like a Wi-Fi signal: you know it exists, but it won't connect.",
      "You may start as friends and eventually ask, 'Wait, are we actually dating?'",
      "Someone new may appear. Their GPS is clearly having issues.",
      "You may fall in love. Please try to land safely.",
      "Your heart is ready. Your brain is still saying, 'Let's think about it.'",
      "Someone may make you smile soon. Reply speed may vary.",
      "Your love life would improve if you actually sent the message you already typed.",
      "Someone may be interested in you. They are just being extremely quiet about it.",
      "You have a chance of getting a partner. Leaving your room would increase the odds.",
      "Your next relationship may begin with the very romantic question: 'Have you eaten?'",
      "You may get flirted with soon. Please do not reply with 'haha.'",
      "Love is going somewhere. It may just be taking the long route.",
      "You may meet someone on the exact day you decide to dress like you just woke up.",
      "Someone from the past may return. Please check whether they miss you or just miss having someone.",
      "You may have a cute romantic moment and tell your friends about it for the next three weeks.",
      "This could become a good relationship if both of you stop pretending you don't care.",
      "You are not single because you have no charm. You are single because you keep waiting.",
      "You may meet someone exactly your type. Your type may change again next Tuesday.",
      "Your heart has plenty of room. Applications are currently being reviewed.",
      "A good relationship may appear. Your first reaction will probably be, 'What's the catch?'",
      "Love verdict: someone could be out there. Please stop spectating and join the game.",
    ],

    endings: [
      "Overall: your luck is good. Your decisions are the wild card.",
      "Everything will probably be fine. We are choosing to be optimistic.",
      "Don't worry. This result was literally random.",
      "Life is unpredictable. Your empty bank account is not.",
      "Your future looks bright. Your present wants a nap.",
      "You have main-character energy. Please use it for something productive.",
      "Prediction complete. You still have unfinished business with your bed.",
      "You are not lost. You are just taking the scenic route.",
      "A plot twist is coming. Hopefully it is funny.",
      "No disaster detected. Minor nonsense detected.",
      "Your future has potential. Your current plan needs a little work.",
      "You have plenty of potential. Please stop leaving it unused.",
      "You will probably be fine. That is the official professional opinion.",
      "You will survive. Looking cool while doing it is optional.",
      "Things are falling into place. Some may fall onto your head first.",
      "Be confident. Just don't make important decisions at 3 AM.",
      "Your future looks good. Please stop making choices with 'whatever, YOLO.'",
      "You could go far. Your bed may try to stop you.",
      "Life is moving forward. You are allowed to take a snack break.",
      "This prediction is about 50% luck and 50% us making things up.",
      "Success is ahead. Unfortunately, you still have to walk there.",
      "The future is not scary. Your unfinished tasks are.",
      "You have good luck. Your timing just likes to arrive late.",
      "Life is an open-world game. Somehow you still forgot where you parked.",
      "Please rest before your brain starts writing a resignation letter.",
      "You are not slow. You are just taking your time professionally.",
      "Everything has a solution except 'What should I eat today?'",
      "You will get better. Please stop skipping the tutorial.",
      "You have time. Your deadline strongly disagrees.",
      "Your future looks great. Please don't ruin it by overthinking everything.",
      "System estimate: 10% luck, 90% actually doing something.",
      "Life may not follow the plan. To be fair, the plan was questionable.",
      "You are about to experience something good and something mildly embarrassing.",
      "The future can change. Your screenshot folder will remember everything.",
      "You have the potential to be very good. Step one: get out of bed.",
      "Chaos detected. Initial investigation points toward you.",
      "You do not need to know your whole future. Tomorrow is already enough.",
      "Prediction result: surprisingly promising.",
      "Simulation complete. Good luck out there. Try not to make it weird.",
      "Final verdict: your future is looking good. Your alarm clock may disagree.",
    ],
  },

  TH: {
    eyebrow: "ARE_ED // FORTUNE TELLER 'RED'",

    title: "ให้ผมปรุง เชื่อผมสิ",

    subtitle:
      "คำทำนาย 3 เรื่อง มั่วทุกเรื่อง",

    labels: {
      job: "การงาน",
      money: "การเงิน",
      love: "ความรัก",
    },

    button: "ดูสิว่าเรดเห็นอะไร",
    again: "อะไรนะ อีกทีดิ๊",

    building: "กำลังมองอนาคต...",
    final: "นึ่คือสิ่งที่เห็น",

    ready: "ระบบพร้อม",
    running: "กำลังทำงาน",
    idle: "รอการทำนาย",

    resultTitle: "ผลการวิเคราะห์",

    disclaimer:
      "คำทำนายนี้สุ่มขึ้นมา อนาคตจริง ๆ อาจไม่เหมือนกัน",

    jobs: [
      "หัวหน้าอาจชมคุณเร็ว ๆ นี้ รีบมีความสุขก่อนจะตามด้วยงานเพิ่ม",
      "การงานกำลังไปได้ดี แค่เลิกพูดว่า “พรุ่งนี้ค่อยทำ” ก่อน",
      "คุณอาจได้งานใหม่ ไม่มีใครรู้ว่าทำไม แม้แต่คนที่โยนงานให้คุณ",
      "งานจะดีขึ้นถ้าคุณเลิกหยิบมือถือขึ้นมาเช็กทุก 5 นาที",
      "มีโอกาสได้เด่นในที่ทำงาน แต่พอทุกคนมองก็อย่าเพิ่งตกใจ",
      "โอกาสดี ๆ อาจมา พยายามอย่าเพิ่งตอบ “ได้ครับ” ก่อนฟังคำถามจบ",
      "คุณอาจกลายเป็นคนที่ทุกคนมาขอความช่วยเหลือ แล้วจะเริ่มเสียดายที่ตัวเองเก่ง",
      "โปรเจกต์ต่อไปดูมีอนาคต ส่วนเวลานอนของคุณไม่ค่อยมี",
      "อาจมีประชุมโผล่ในปฏิทินแบบไม่มีเหตุผล",
      "การงานกำลังเดินหน้า ส่วนแรงจูงใจกำลังรอ deadline",
      "คุณเก่งกว่าที่คิด และการผัดวันประกันพรุ่งก็เก่งกว่าที่คิดเหมือนกัน",
      "คำชมจากหัวหน้าอาจมา ตามด้วยประโยค “ช่วยทำอีกอย่างได้ไหม?”",
      "คุณมีแววเป็นผู้นำ แต่ก่อนอื่นช่วยจำก่อนว่าของตัวเองวางไว้ไหน",
      "งานง่าย ๆ อาจกินเวลาทั้งวัน เพราะคุณทำมันให้ยากเอง",
      "มีโอกาสสำเร็จสูง ถ้าคุณเปิดไฟล์งานก่อนเปิด YouTube",
      "วันนี้อาจได้แก้ปัญหาที่เริ่มต้นจากคำว่า “น่าจะง่ายนะ”",
      "งานเล่น ๆ อาจกลายเป็นงานจริง นี่แหละที่มาของคำว่า “ทำแค่ชั่วโมงเดียว” แล้วตี 2",
      "คุณจะได้เรียนรู้อะไรใหม่ ๆ แล้วถามตัวเองว่า “ทำไมไม่เรียนตั้งนานแล้ว?”",
      "อาจได้งานที่ชอบจริง ๆ แต่สุดท้ายก็บ่นอยู่ดี เพราะคุณเป็นมนุษย์",
      "Productivity ของคุณดีมากเมื่อ deadline ใกล้พอให้กลัว",
      "คุณมีแววเป็นผู้นำ แต่เตียงนอนยังเป็นคู่แข่งที่ชนะคุณบ่อยที่สุด",
      "งานอาจตามหาคุณ แม้คุณจะพยายามไม่ตามหางาน",
      "มีคนอาจถามว่าทำอันนี้ยังไง ยิ้มไว้ก่อน อย่าบอกว่าเพิ่งกูเกิลมา",
      "การงานจะดีขึ้นทันทีที่คุณเลิกเอางานวันนี้ไปฝากพรุ่งนี้",
      "คุณอาจสร้างอะไรเจ๋ง ๆ ได้ แต่เลิกจัดโต๊ะเพื่อหนีงานก่อน",
      "การงานดูดี แรงจูงใจจะมาประมาณ 30 นาทีก่อน deadline",
      "สิ่งที่คุณทำอาจมีคนจำได้ ขอให้จำในทางที่ดีด้วยนะ",
      "คุณอาจเปลี่ยนแผนอีกแล้ว อย่างน้อยรอบนี้ทำเหมือนตั้งใจไว้ก็พอ",
      "คุณกำลังเก่งขึ้นเรื่อย ๆ อย่าเพิ่งเลิกเพราะยังไม่เก่งตอนนี้",
      "คำตัดสินการงาน: มีศักยภาพแน่นอน ทีนี้ไปทำสิ่งที่บอกว่าจะทำทีหลังได้แล้ว",
    ],

    money: [
      "เงินกำลังเข้า และกำลังเตรียมตัวออกเหมือนกัน",
      "เงินของคุณขยันมาก ไม่ยอมอยู่นิ่งในบัญชีเลย",
      "คุณมีโอกาสรวยขึ้นเร็ว ๆ นี้ แต่นิสัยช้อปของคุณรออยู่แล้ว",
      "วันเงินเดือนออกอาจทำให้รู้สึกรวยประมาณ 6 ชั่วโมง",
      "ดวงการเงินดีมาก โดยเฉพาะตอนมีคนอื่นเป็นคนจ่าย",
      "จักรวาลบอกว่า “เก็บเงิน” ส่วนป้ายลดราคาบอกว่า “ซื้อเลย”",
      "อาจได้เงินเพิ่ม กรุณาอย่ารีบคืนเงินให้ร้านค้าออนไลน์ทันที",
      "คุณไม่ได้ถังแตก แค่รสนิยมค่อนข้างแพง",
      "การเงินกำลังฟื้นตัว กรุณาอย่าฉลองด้วยการกดสั่งของ",
      "คุณอาจหาเงินได้มากขึ้น และใช้เงินได้เร็วขึ้นพอดี",
      "กระเป๋าเงินกำลังพยายามอยู่ กรุณาให้ความร่วมมือด้วย",
      "เงินจะอยู่นานขึ้นถ้าคุณเลิกพูดว่า “อันนี้นิดเดียวเอง”",
      "ดีลดี ๆ อาจมา กระเป๋าเงินขอร้องให้คุณเดินหนี",
      "บัญชีธนาคารยังมีชีวิตอยู่ แค่อยากได้ความสงบ",
      "อนาคตการเงินสดใส แต่ประวัติสั่งเดลิเวอรีดูน่าสงสัย",
      "คุณเก็บเงินได้แน่นอน แค่เลิกซื้อของเพราะคำว่า “น่ารัก”",
      "รายได้อาจเพิ่มขึ้น จำนวนของที่คุณรู้สึกว่า “ต้องมี” ก็เช่นกัน",
      "อาจเจอเงินที่ลืมไว้ แล้วค่อยนึกได้ว่าใช้ไปแล้ว",
      "คุณเก่งเรื่องหาเงิน และเก่งไม่แพ้กันเรื่องทำให้มันหาย",
      "เดือนนี้เหมาะกับการเก็บเงิน ฟังดูเป็นไอเดียใหม่มาก",
      "เงินพิเศษอาจเข้าหลังจากคุณพูดว่า “เอาวะ กินมาม่าก็ได้”",
      "คุณอาจรวยได้ แต่ต้องชนะบอส “ช้อปตอนดึก” ก่อน",
      "ยอดเงินไม่ได้หนีคุณไปไหน แค่กำลังรับดาเมจอยู่",
      "คุณไม่ได้ใช้เงินแย่ คุณแค่ใช้มันอย่างมั่นใจ",
      "คุณอาจเก็บเงินได้เยอะ ถ้าวิชลิสต์ยอมด้วย",
      "ตัวคุณในอนาคตอาจมีเงินมากขึ้น กรุณาเหลือไว้ให้เขาบ้าง",
      "คิดก่อนซื้อ ป้ายลดราคาไม่ได้คิดแทนคุณ",
      "เงินกำลังมา กรุณาอย่าใช้มันก่อนที่มันจะมาถึง",
      "กระเป๋าเงินมีคำขอเดียว: กรุณาเลิกพูดว่า “ไว้ให้ตัวเราในอนาคตจัดการ”",
      "คำตัดสินการเงิน: หาเงินได้ดี ส่วนเก็บเงินยังอยู่ระหว่างก่อสร้าง",
    ],

    love: [
      "คุณอาจมีแฟนเร็ว ๆ นี้ ระบบกำลังตามหาตัวเขาอยู่",
      "อาจมีคนชอบคุณอยู่ เขาก็กำลังรอให้คุณเริ่มก่อนเหมือนกัน",
      "ชีวิตรักกำลังไปได้ดี ถ้าไม่นับตรงที่คุณยังโสด",
      "อาจได้คุยกับคนใหม่ แล้วสุดท้ายกลายเป็นดูสตอรี่กันไปอีก 6 เดือน",
      "คนที่ใช่อาจกำลังมา กรุณาตื่นก่อน",
      "มีคนกำลังเข้ามาในชีวิต ส่วนจะเอาความรักหรือปัญหามาด้วยยังไม่ทราบ",
      "หัวใจคุณว่าง แต่คิวคิดมากเต็มแล้ว",
      "อาจได้รับข้อความที่รออยู่ เลิกเช็กมือถือทุก 10 วินาทีก่อน",
      "คนที่คุณชอบอาจชอบคุณกลับ แต่น่าเสียดายที่ไม่มีใครกล้าพูด",
      "ชีวิตรักเหมือน Wi-Fi มีสัญญาณ แต่เชื่อมต่อไม่ได้",
      "อาจเริ่มจากเพื่อน แล้ววันหนึ่งถามกันว่า “เดี๋ยวนะ เราคบกันอยู่เหรอ?”",
      "คนใหม่อาจโผล่มา GPS ของเขาน่าจะมีปัญหา",
      "คุณอาจตกหลุมรัก กรุณาลงให้ปลอดภัย",
      "หัวใจพร้อมแล้ว สมองยังบอกว่า “ขอคิดดูก่อน”",
      "อาจมีคนทำให้คุณยิ้มเร็ว ๆ นี้ แต่ความเร็วในการตอบแชตไม่รับประกัน",
      "ความรักจะดีขึ้นมากถ้าคุณส่งข้อความที่พิมพ์ค้างไว้จริง ๆ",
      "อาจมีคนสนใจคุณอยู่ เขาแค่เงียบเกินไปหน่อย",
      "มีโอกาสมีแฟน แต่ถ้าออกจากห้องบ้างโอกาสจะเพิ่ม",
      "ความสัมพันธ์ครั้งต่อไปอาจเริ่มด้วยประโยคสุดโรแมนติกว่า “กินข้าวยัง?”",
      "คุณอาจโดนจีบเร็ว ๆ นี้ กรุณาอย่าตอบกลับแค่ “555”",
      "ความรักกำลังไปไหนสักแห่ง แค่เลือกเส้นทางอ้อมมาก",
      "อาจเจอคนที่ชอบในวันที่แต่งตัวเหมือนเพิ่งตื่น ชีวิตชอบแบบนี้",
      "คนจากอดีตอาจกลับมา เช็กก่อนว่าเขาคิดถึงคุณหรือแค่เหงา",
      "อาจมีโมเมนต์น่ารัก ๆ แล้วคุณจะเล่าให้เพื่อนฟังอีกสามอาทิตย์",
      "ความสัมพันธ์นี้อาจไปได้ดี ถ้าทั้งคู่เลิกแกล้งทำเป็นไม่รู้สึก",
      "คุณไม่ได้โสดเพราะไม่มีเสน่ห์ คุณโสดเพราะรอให้อีกฝ่ายเริ่ม",
      "อาจเจอคนตรงสเปกเป๊ะ แต่สเปกคุณอาจเปลี่ยนวันอังคารหน้า",
      "หัวใจมีพื้นที่เยอะ ตอนนี้แค่กำลังตรวจใบสมัคร",
      "ความสัมพันธ์ดี ๆ อาจเข้ามา แล้วคุณจะถามว่า “เดี๋ยวนะ มีอะไรแอบแฝงไหม?”",
      "คำตัดสินความรัก: มีคนอยู่ที่ไหนสักแห่ง กรุณาเลิกเป็นคนดูแล้วลงสนาม",
    ],

    endings: [
      "โดยรวมดวงดี คนที่ต้องระวังคือคุณตอนตัดสินใจเอง",
      "ทุกอย่างน่าจะโอเค เราขอเลือกมองโลกในแง่ดีไว้ก่อน",
      "ไม่ต้องกังวล ผลนี้สุ่มมาจริง ๆ",
      "ชีวิตเดาไม่ได้ แต่บัญชีที่ว่างเดาได้",
      "อนาคตสดใส ส่วนปัจจุบันอยากงีบ",
      "คุณมีพลังพระเอกนางเอก กรุณาเอาไปใช้ทำอะไรที่มีประโยชน์ด้วย",
      "ทำนายเสร็จแล้ว แต่ภารกิจกับเตียงยังไม่จบ",
      "คุณไม่ได้หลงทาง แค่เลือกเส้นทางชมวิว",
      "Plot Twist กำลังมา หวังว่าจะเป็นเรื่องขำ ๆ",
      "ไม่พบหายนะ พบเรื่องวุ่นวายเล็กน้อย",
      "อนาคตมีแววดี แผนปัจจุบันขอปรับนิดหนึ่ง",
      "คุณมีศักยภาพเยอะ กรุณาอย่าปล่อยให้นอนเฉย ๆ",
      "คุณน่าจะรอด นี่คือความเห็นจากผู้เชี่ยวชาญที่ไม่มีใบประกาศ",
      "คุณจะรอดแน่นอน จะรอดแบบเท่ไหมอีกเรื่อง",
      "ทุกอย่างกำลังเข้าที่ บางอย่างอาจตกใส่หัวก่อน",
      "มั่นใจไว้ แต่อย่าตัดสินใจเรื่องใหญ่ตอนตี 3",
      "อนาคตดูดี กรุณาหยุดใช้คำว่า “เออ YOLO” กับทุกเรื่อง",
      "คุณไปได้ไกลแน่ ถ้าเตียงไม่รั้งคุณไว้ก่อน",
      "ชีวิตกำลังเดินหน้า พักกินขนมได้ ไม่ผิด",
      "คำทำนายนี้แม่นประมาณ 50% อีก 50% เรามั่ว",
      "ความสำเร็จอยู่ข้างหน้า แต่ระบบยังเดินแทนคุณไม่ได้",
      "อนาคตไม่น่ากลัว งานที่ยังไม่ทำต่างหากที่น่ากลัว",
      "คุณมีโชคดีอยู่บ้าง แค่ชอบมาสาย",
      "ชีวิตเป็นเกม Open World และคุณยังหารถตัวเองไม่เจอ",
      "พักก่อนที่สมองจะเขียนใบลาออกให้ตัวเอง",
      "คุณไม่ได้ช้า คุณแค่ใช้เวลาของตัวเองอย่างมีคุณภาพ",
      "ทุกอย่างมีทางแก้ ยกเว้นคำถามว่า “วันนี้กินอะไรดี?”",
      "คุณจะเก่งขึ้นแน่นอน กรุณาอย่าข้าม Tutorial",
      "คุณมีเวลา Deadline ของคุณไม่เห็นด้วยอย่างแรง",
      "อนาคตดูดีมาก กรุณาอย่าพังด้วยการคิดมาก",
      "ระบบประเมิน: โชค 10% ลงมือทำจริง 90%",
      "ชีวิตอาจไม่ตามแผน เพราะแผนนั้นก็ดูน่าสงสัยตั้งแต่แรก",
      "กำลังจะเจอเรื่องดี ๆ และเรื่องน่าอายเล็กน้อย",
      "อนาคตเปลี่ยนได้ แต่โฟลเดอร์รูปในเครื่องจำทุกอย่าง",
      "คุณมีแววเก่งมาก ขั้นแรกคือลุกจากเตียง",
      "ตรวจพบความวุ่นวาย ผลการสอบสวนชี้มาที่คุณ",
      "ไม่ต้องรู้อนาคตทั้งหมด แค่พรุ่งนี้จะทำอะไรได้ก็นับว่าเก่งแล้ว",
      "ผลการทำนาย: น่าจะรอดอย่างน่าสงสัย",
      "Simulation เสร็จแล้ว โชคดีครับ พยายามอย่าทำอะไรให้มันแปลกเกินไป",
      "คำตัดสินสุดท้าย: อนาคตดูดีครับ นาฬิกาปลุกอาจไม่เห็นด้วย",
    ],
  },
};

export default function LifeGenerator({
  language,
  onBack,
}: Props) {
  const data = DATA[language];

  const langCode = language === "TH" ? "th" : "en";

  const [result, setResult] =
    useState<ResultIndices | null>(null);

  const [loading, setLoading] =
    useState(false);

  const [done, setDone] =
    useState(false);

  const [displayJob, setDisplayJob] =
    useState("—");

  const [displayMoney, setDisplayMoney] =
    useState("—");

  const [displayLove, setDisplayLove] =
    useState("—");

  useEffect(() => {
    if (!result) {
      setDisplayJob("—");
      setDisplayMoney("—");
      setDisplayLove("—");
      return;
    }

    setDisplayJob(data.jobs[result.job]);
    setDisplayMoney(data.money[result.money]);
    setDisplayLove(data.love[result.love]);
  }, [language, result, data.jobs, data.money, data.love]);

  const randomIndex = (length: number) => {
    return Math.floor(Math.random() * length);
  };

  const generateLife = () => {
    if (loading) return;

    setLoading(true);
    setDone(false);
    setResult(null);

    setDisplayJob("...");
    setDisplayMoney("...");
    setDisplayLove("...");

    const jobIndex = randomIndex(DATA.EN.jobs.length);
    const moneyIndex = randomIndex(DATA.EN.money.length);
    const loveIndex = randomIndex(DATA.EN.love.length);
    const endingIndex = randomIndex(DATA.EN.endings.length);

    setTimeout(() => {
      setDisplayJob(data.jobs[jobIndex]);
    }, 450);

    setTimeout(() => {
      setDisplayMoney(data.money[moneyIndex]);
    }, 900);

    setTimeout(() => {
      setDisplayLove(data.love[loveIndex]);
    }, 1350);

    setTimeout(() => {
      setResult({
        job: jobIndex,
        money: moneyIndex,
        love: loveIndex,
        ending: endingIndex,
      });

      setDone(true);
      setLoading(false);
    }, 1750);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      lang={langCode}
      className="flex h-full min-h-0 w-full max-w-full min-w-0 flex-col overflow-hidden"
    >
      {/* BACK */}

      <button
        onClick={onBack}
        className="
          flex
          w-fit
          max-w-full
          shrink-0
          items-center
          gap-2
          text-sm
          font-medium
          text-black/70
          transition-colors
          hover:text-black
        "
      >
        <span className="text-lg">←</span>

        {language === "EN"
          ? "Back to Mini Games"
          : "กลับไปหน้า Mini Games"}
      </button>

      {/* HEADER */}

      <div className="mt-4 min-w-0 shrink-0 sm:mt-7">
        <div className="mini-micro mb-2 sm:mb-3">
          {data.eyebrow}
        </div>

        <h1
          className="
            mini-page-title
            text-3xl
            leading-tight
            sm:text-6xl
          "
        >
          {data.title}
        </h1>

        <p
          className="
            mini-readable
            mt-1
            max-w-2xl
            break-words
            break-words
            text-sm
            leading-5
            sm:text-base
          "
        >
          {data.subtitle}
        </p>
      </div>

      {/* GAME */}

      <div
        className="
          life-generator
          mt-3
          min-h-0
          w-full
          max-w-full
          min-w-0
          flex-1
          overflow-hidden
          border
          p-2.5
          sm:mt-5
          sm:p-5
        "
      >
        <div className="mini-corners" />

        {/* SLOTS */}

        <div
          className="
            grid
            min-h-0
            gap-1.5
            sm:grid-cols-3
            sm:gap-3
          "
          style={{
            height: done
              ? "48%"
              : "56%",
          }}
        >
          <LifeSlot
            number="01"
            label={data.labels.job}
            value={displayJob}
            active={loading}
            lang={langCode}
          />

          <LifeSlot
            number="02"
            label={data.labels.money}
            value={displayMoney}
            active={loading}
            lang={langCode}
          />

          <LifeSlot
            number="03"
            label={data.labels.love}
            value={displayLove}
            active={loading}
            lang={langCode}
          />
        </div>

        {/* STATUS */}

        <div
          className="
            mt-2
            flex
            min-w-0
            items-center
            justify-between
            gap-2
            border-t
            border-black/10
            pt-2
            sm:mt-3
            sm:pt-3
          "
        >
          <span className="mini-micro min-w-0 truncate">
            {loading
              ? data.building
              : done
                ? data.final
                : data.ready}
          </span>

          <span className="mini-micro shrink-0">
            {loading
              ? data.running
              : data.idle}
          </span>
        </div>

        {/* BUTTON */}

        <button
          onClick={generateLife}
          disabled={loading}
          className="
            mini-primary-button
            mt-2
            flex
            w-full
            max-w-full
            min-w-0
            items-center
            justify-center
            gap-3
            overflow-hidden
            py-3
            text-sm
            font-medium
            sm:py-4
          "
        >
          <span className="relative z-10 truncate">
            {loading
              ? data.building
              : done
                ? data.again
                : data.button}
          </span>

          {!loading && (
            <span className="relative z-10 text-lg">
              →
            </span>
          )}
        </button>

        {/* RESULT */}

        {done && result && (
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="
              mini-result
              mt-3
              border
              p-3
              sm:p-4
            "
          >
            <div className="mini-micro mb-1.5">
              {data.resultTitle}
            </div>

            <p
              className="
                break-words
                text-sm
                font-medium
                leading-6
                text-black
                sm:text-base
              "
            >
              “{data.endings[result.ending]}”
            </p>
          </motion.div>
        )}
      </div>

      {/* DISCLAIMER */}

      <div
        className="
          mt-1
          min-w-0
          shrink-0
          overflow-hidden
          text-right
          text-[10px]
          leading-5
          text-black/35
        "
      >
        <span className="block truncate">
          {data.disclaimer}
        </span>
      </div>
    </motion.div>
  );
}

/* =========================================================
   LIFE SLOT
========================================================= */

function LifeSlot({
  number,
  label,
  value,
  active,
  lang,
}: {
  number: string;
  label: string;
  value: string;
  active: boolean;
  lang: "th" | "en";
}) {
  return (
    <motion.div
      animate={
        active
          ? {
              scale: [1, 1.008, 1],
            }
          : {}
      }
      transition={{
        duration: 0.22,
        repeat: active ? Infinity : 0,
      }}
      lang={lang}
      className="
        life-slot
        relative
        flex
        min-h-0
        flex-col
        p-3
        sm:p-4
      "
    >
      {/* TOP */}

      <div className="relative z-10 flex min-w-0 shrink-0 items-center justify-between gap-2">
        <span
          className="
            min-w-0
            truncate
            text-sm
            font-medium
            tracking-[-0.02em]
            text-black/75
            sm:text-base
          "
        >
          {label}
        </span>

        <span className="mini-micro shrink-0">
          {number}
        </span>
      </div>

      {/* VALUE */}

      <div
        className="
          flex
          min-h-0
          min-w-0
          flex-1
          items-center
          justify-center
          overflow-hidden
          px-1
          text-center
        "
      >
        <span
          className={`
            life-slot-value
            max-w-full
            text-sm
            leading-6
            sm:text-base
            sm:leading-7
            ${
              value === "..."
                ? "animate-pulse text-black/35"
                : ""
            }
          `}
        >
          {value}
        </span>
      </div>

      {/* BOTTOM */}

      <div
        className="
          mt-2
          flex
          min-w-0
          shrink-0
          items-center
          gap-2
        "
      >
        <span className="mini-micro shrink-0 text-[7px]">
          {label}.EXE
        </span>

        <div className="h-px min-w-0 flex-1 bg-black/10" />

        <span className="mini-micro shrink-0 text-[7px]">
          RNG
        </span>
      </div>
    </motion.div>
  );
}