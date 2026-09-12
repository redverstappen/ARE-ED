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
      "You have the potential to work in technology, but your biggest challenge may be starting before the deadline.",
      "Your career is heading toward something creative, especially if you stop opening new tabs every time work gets difficult.",
      "You are surprisingly good at solving problems, especially the ones you accidentally created yourself.",
      "A new project may appear in your future, and you will probably say yes before fully understanding what you agreed to.",
      "You have the potential to become an important person in your team, mainly because you know where all the files are.",
      "Your career looks promising, although your productivity seems to activate only when the deadline becomes dangerous.",
      "You may discover that you are better at your job than you originally thought, probably after making several questionable decisions.",
      "Your future career involves creativity, technology, and at least one moment where you ask yourself what you are doing with your life.",
      "You are likely to work on something you genuinely enjoy, but you may complain about it anyway because that is part of the process.",
      "Your professional life will improve dramatically once you stop saying “I will do it later.”",
      "You have leadership potential, but first you need to learn how to lead yourself away from distractions.",
      "A future opportunity may look intimidating at first, but accepting it could turn out to be one of your better decisions.",
      "You are capable of doing impressive things, provided that you actually finish the things you start.",
      "Your career path may not be perfectly planned, but somehow you will keep finding your way forward.",
      "You may become the person everyone asks for help, despite secretly searching for the answer yourself.",
      "Your work life will contain many unexpected problems, but solving them will make you considerably better at what you do.",
      "You have a strong chance of building something you can be proud of, especially if you stop comparing your progress with everyone else.",
      "Your future job may involve computers, creativity, or both. Either way, you will probably spend too much time staring at a screen.",
      "You will eventually find work that fits you better, but getting there may require a few failed attempts first.",
      "Your biggest career advantage is your ability to keep going even after something completely refuses to work.",
      "You are entering a period where learning new skills could open more doors than you expect.",
      "Your career will probably improve after you realize that perfection is just another form of procrastination.",
      "A surprisingly useful skill you learn casually today may become important to your career later.",
      "You may change your career direction more than once, and that does not necessarily mean you are lost.",
      "Your future contains at least one project that starts as “just for fun” and becomes much more serious than expected.",
      "You have the potential to do great work, but your future self would appreciate you starting now.",
      "Your career may move slowly at first, but consistency will eventually become your biggest advantage.",
      "Someone may notice your work sooner than you expect, so perhaps finish it before they arrive.",
      "Your professional future looks better than your current motivation suggests.",
      "You are probably closer to becoming good at something than you think. Keep practicing.",
    ],

    money: [
      "Your finances are currently stable enough to survive, but perhaps not stable enough to justify another online purchase.",
      "You have money, but somehow it keeps disappearing whenever you say, “This is the last thing I am buying.”",
      "A little extra money may come your way, and you will immediately discover several excellent ways to spend it.",
      "Your financial situation is not terrible. Your bank account simply has a different opinion.",
      "You may save some money this month, assuming you can resist anything labeled “limited-time offer.”",
      "Money will come into your life regularly, but unfortunately it appears to enjoy leaving just as quickly.",
      "Your future contains a financial opportunity, but you will need to notice it before spending everything on snacks.",
      "You are capable of becoming financially comfortable, but your current shopping habits are conducting an investigation against you.",
      "Your wallet may feel lighter than usual, mostly because you keep buying things you absolutely did not need.",
      "A future version of you will be grateful if you start saving a little money now.",
      "Your finances may improve soon, especially if you stop treating every discount as a personal invitation.",
      "You will probably receive some unexpected money, followed shortly by an unexpected reason to spend it.",
      "Your financial future looks promising, although your ability to keep money is still under development.",
      "You may reach a point where you have enough money to relax, but you will probably find something new to worry about.",
      "Your income has potential to grow, but so does your talent for spending it.",
      "The universe suggests saving money. Your online shopping history suggests otherwise.",
      "You are not broke. You are simply participating in an advanced form of temporary wealth redistribution.",
      "Your financial life will become more stable once you stop buying things just because they are slightly cheaper.",
      "There is a good chance you will earn more in the future, but please do not immediately upgrade your entire lifestyle.",
      "Your bank account may recover soon, provided you stop checking the same expensive product page every night.",
      "You have enough financial potential to do well, but discipline will matter more than luck.",
      "Your future includes a moment when you look at your balance and wonder where everything went. Again.",
      "You may become surprisingly good at managing money once you finally decide that future-you also deserves some money.",
      "A better financial period is possible, but it may begin with one very simple decision: do not buy it.",
      "Your money situation will improve when your wants stop pretending to be needs.",
      "You are likely to earn enough to enjoy life, but saving some of it would be a revolutionary idea.",
      "Financial stability is within reach, although your cart currently contains several obstacles.",
      "You may have more money than expected one day, but keeping it will be the real challenge.",
      "Your future wallet looks healthier than your current one. Please try not to sabotage it.",
      "The financial forecast is cautiously optimistic, with a high probability of unnecessary purchases.",
    ],

    love: [
      "Your love life is currently unclear, but someone's online status seems extremely clear.",
      "Someone may be interested in you, although both of you appear to be waiting for the other person to text first.",
      "A new relationship may appear in your future, but you will probably need to send the first message.",
      "Your love life is like Wi-Fi: sometimes there is a strong signal, sometimes there is absolutely nothing.",
      "You may meet someone you really like, but overthinking could become your greatest romantic enemy.",
      "Someone from your past may return, but you will have to decide whether you miss the person or just the memories.",
      "Your love life is not broken. It is simply loading more slowly than expected.",
      "A meaningful conversation may happen soon, assuming you do not reply with “lol” and disappear.",
      "Your heart is available, but it appears to be waiting for someone who knows what they are doing.",
      "You may develop feelings for someone unexpectedly, which is exactly the kind of thing your brain did not schedule.",
      "A future relationship could start from a completely ordinary conversation.",
      "You have romantic potential, but your ability to communicate feelings is currently receiving mixed reviews.",
      "Someone may enter your life at the most unexpected time, probably when you are not looking for anyone.",
      "Your next relationship may begin slowly, but that could make it more meaningful.",
      "You are likely to experience a romantic plot twist. The system refuses to reveal whether it is good or terrible.",
      "There may be someone you want to talk to right now, but your courage seems to be experiencing a temporary outage.",
      "Your love life could improve dramatically if you stop assuming that every unanswered message means the end of the world.",
      "You may find someone who understands your weirdness, which is either romantic or slightly concerning.",
      "Your future contains affection, awkward conversations, and at least one moment of pretending you are not nervous.",
      "You might fall for someone who makes ordinary days feel unexpectedly interesting.",
      "A relationship may appear when you finally stop trying to force one to happen.",
      "Your heart is not late. It is simply following a different schedule.",
      "There is a possibility that someone already likes you more than you realize.",
      "Your romantic future looks better than your current message history suggests.",
      "You may soon have a reason to check your phone more often than usual.",
      "Someone could become important to you through a friendship that slowly turns into something more.",
      "Your next romantic chapter may begin with a simple message that you almost decided not to send.",
      "You are emotionally available in theory. In practice, the system is still running diagnostics.",
      "Love is probably coming. Unfortunately, it did not provide an exact delivery date.",
      "Your future relationship may be unexpectedly healthy, which might initially feel suspicious.",
    ],

    endings: [
      "Your life is not going badly. It is simply running a slightly unstable beta version.",
      "Everything looks fine. Suspiciously fine. The system recommends staying alert.",
      "You have plenty of potential. The only remaining problem is actually using it.",
      "Your life needs a software update, but the owner keeps clicking “Remind me later.”",
      "The system detected a promising future with several unnecessary side quests.",
      "Congratulations. You are now responsible for whatever build this turns into.",
      "This build somehow passed QA. Nobody knows how, including QA.",
      "Honestly, this is not the worst possible timeline.",
      "Your future looks surprisingly expensive, but at least it looks interesting.",
      "At least your website will probably look good.",
      "The future is uncertain, but your ability to procrastinate appears extremely reliable.",
      "Your life has a strong storyline. Unfortunately, the developer forgot to write the instructions.",
      "The system predicts success, confusion, and several moments of saying “why did I do that?”",
      "You may not become successful overnight, but you will definitely collect some excellent stories along the way.",
      "Your future contains opportunities. Whether you notice them is currently classified information.",
      "Life appears to be moving forward. The direction is still being calculated.",
      "Your build has a few bugs, but removing all of them would probably make the game less interesting.",
      "You are closer to your goals than you think, although your loading screen has been unusually long.",
      "The system cannot guarantee success, but it can guarantee that giving up will not help.",
      "Your future looks chaotic, but somehow the chaos seems to work for you.",
      "You are entering a new chapter. Please save your progress before doing anything questionable.",
      "The prediction is optimistic, but your sleep schedule may disagree.",
      "Your life is becoming more interesting. Whether that is a good thing remains unresolved.",
      "The system found no major problems. Minor problems are currently being ignored.",
      "Your future has potential, personality, and a suspicious amount of unfinished projects.",
      "You are not behind in life. You are simply taking a route with more unnecessary loading screens.",
      "The next chapter may surprise you, especially if you stop trying to predict every possible outcome.",
      "Your future self is probably proud of you. They would also appreciate it if you finished that project.",
      "The system recommends confidence, patience, and slightly fewer questionable decisions.",
      "Your life may not follow the original plan, but the alternative route could be better.",
      "There is no perfect build. Yours just happens to be unusually entertaining.",
      "The future is still editable. Please use this feature responsibly.",
      "You have survived every bad day so far. Statistically, that is a pretty good record.",
      "Your story is still being written. Try not to delete the whole project when one thing goes wrong.",
      "The system predicts progress, provided that you continue moving instead of refreshing the page.",
      "Your future is uncertain, but there is definitely more waiting for you than you can currently see.",
      "This life build has potential. A few upgrades and some sleep should probably help.",
      "You may not know exactly where you are going yet, but at least you are no longer standing still.",
      "Final verdict: questionable decisions, decent potential, surprisingly promising future.",
      "The simulation is complete. Somehow, you are still the main character.",
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
      "คุณมีแววจะได้ทำงานด้านเทคโนโลยี แต่สิ่งที่ยากที่สุดอาจไม่ใช่งาน แต่อาจเป็นการเริ่มงานก่อนถึง deadline",
      "เส้นทางการงานของคุณกำลังไปทางสายสร้างสรรค์ โดยเฉพาะถ้าคุณเลิกเปิดแท็บใหม่ทุกครั้งที่เจองานยาก",
      "คุณมีความสามารถในการแก้ปัญหาอยู่พอตัว โดยเฉพาะปัญหาที่บางครั้งคุณเป็นคนสร้างขึ้นมาเอง",
      "มีเกณฑ์จะได้เจอโปรเจกต์ใหม่ในอนาคต และคุณอาจตอบตกลงไปก่อนที่จะเข้าใจด้วยซ้ำว่าตัวเองรับอะไรมา",
      "คุณมีโอกาสกลายเป็นคนสำคัญของทีม เพราะคุณเป็นคนเดียวที่รู้ว่าไฟล์นั้นถูกเก็บไว้ตรงไหน",
      "การงานของคุณดูมีอนาคตดี แม้ว่าความขยันจะทำงานเต็มประสิทธิภาพเฉพาะตอน deadline ใกล้หมดก็ตาม",
      "คุณอาจค้นพบว่าตัวเองเก่งกว่าที่คิด หลังจากผ่านการตัดสินใจที่น่าสงสัยมาอีกหลายครั้ง",
      "อนาคตการงานของคุณมีทั้งความคิดสร้างสรรค์ เทคโนโลยี และช่วงเวลาที่คุณถามตัวเองว่า “นี่เรากำลังทำอะไรอยู่วะ”",
      "คุณมีโอกาสได้ทำงานที่ตัวเองชอบจริง ๆ แต่สุดท้ายก็อาจบ่นอยู่ดี เพราะนั่นคงเป็นส่วนหนึ่งของกระบวนการ",
      "ชีวิตการทำงานของคุณจะดีขึ้นอย่างเห็นได้ชัด หลังจากเลิกพูดว่า “เดี๋ยวค่อยทำ”",
      "คุณมีแววเป็นผู้นำ แต่ก่อนจะนำคนอื่นได้ อาจต้องฝึกนำตัวเองออกจากสิ่งที่ทำให้เสียสมาธิก่อน",
      "โอกาสใหม่ในอนาคตอาจดูน่ากลัวในตอนแรก แต่ถ้าคุณลองรับมันไว้ อาจกลายเป็นหนึ่งในการตัดสินใจที่ดีที่สุด",
      "คุณสามารถสร้างผลงานที่น่าภูมิใจได้ เพียงแต่ต้องเริ่มทำสิ่งที่เริ่มไว้ให้เสร็จบ้าง",
      "เส้นทางการงานของคุณอาจไม่ได้วางแผนไว้อย่างสมบูรณ์ แต่แปลกดีที่คุณจะค่อย ๆ หาทางไปต่อได้เอง",
      "มีโอกาสที่ทุกคนจะเริ่มมาขอความช่วยเหลือจากคุณ แม้ในใจคุณเองก็ยังแอบเปิด Google หาคำตอบอยู่",
      "ชีวิตการทำงานจะมีปัญหาให้แก้อยู่เรื่อย ๆ แต่ทุกปัญหาจะทำให้คุณเก่งขึ้นแบบที่ไม่รู้ตัว",
      "คุณมีโอกาสสร้างอะไรบางอย่างที่ตัวเองภูมิใจได้ โดยเฉพาะถ้าเลิกเอาความเร็วของตัวเองไปเทียบกับคนอื่น",
      "งานในอนาคตของคุณอาจเกี่ยวข้องกับคอมพิวเตอร์ ความคิดสร้างสรรค์ หรือทั้งสองอย่าง และแน่นอนว่าคุณจะใช้เวลาอยู่หน้าจอเยอะมาก",
      "วันหนึ่งคุณจะเจองานที่เหมาะกับตัวเองมากขึ้น แต่ก่อนจะถึงตรงนั้นอาจต้องลองผิดลองถูกอีกสักพัก",
      "จุดแข็งด้านการงานของคุณคือการไม่ยอมแพ้ง่าย ๆ แม้สิ่งที่กำลังทำจะพังแบบไม่มีเหตุผลก็ตาม",
      "ช่วงต่อจากนี้เหมาะกับการเรียนรู้ทักษะใหม่ ๆ เพราะทักษะเล็ก ๆ วันนี้อาจกลายเป็นโอกาสใหญ่ในอนาคต",
      "การงานของคุณจะดีขึ้นเมื่อเข้าใจว่า ความสมบูรณ์แบบบางครั้งก็คือการผัดวันประกันพรุ่งในอีกรูปแบบหนึ่ง",
      "ทักษะบางอย่างที่คุณเรียนเล่น ๆ วันนี้ อาจกลายเป็นทักษะสำคัญที่ช่วยเรื่องงานในอนาคต",
      "คุณอาจเปลี่ยนเส้นทางการงานมากกว่าหนึ่งครั้ง และนั่นไม่ได้แปลว่าคุณกำลังหลงทาง",
      "อนาคตของคุณมีโปรเจกต์อย่างน้อยหนึ่งอย่างที่เริ่มจากคำว่า “ทำเล่น ๆ” แล้วกลายเป็นเรื่องจริงจังกว่าที่คิด",
      "คุณมีศักยภาพที่จะทำงานดี ๆ ได้ แต่ตัวคุณในอนาคตอยากให้คุณเริ่มตั้งแต่ตอนนี้",
      "การงานอาจค่อย ๆ ดีขึ้นในช่วงแรก แต่ความสม่ำเสมอจะกลายเป็นข้อได้เปรียบที่สำคัญที่สุดของคุณ",
      "มีโอกาสที่ใครบางคนจะสังเกตเห็นผลงานของคุณเร็วกว่าที่คิด เพราะฉะนั้นทำมันให้เสร็จก่อนเขาจะมาเห็นก็ดี",
      "อนาคตการงานของคุณดูดีกว่าระดับแรงจูงใจในปัจจุบันอยู่พอสมควร",
      "คุณอาจเก่งในสิ่งที่กำลังฝึกมากกว่าที่คิด ขอแค่ฝึกต่อและอย่าเพิ่งเลิกกลางทาง",
    ],

    money: [
      "การเงินของคุณตอนนี้ยังพอเอาตัวรอดได้ แต่ยังไม่ถึงขั้นที่จะซื้อของออนไลน์เพิ่มแบบไม่คิดอะไร",
      "คุณมีเงินอยู่ แต่เงินมักหายไปทุกครั้งที่คุณพูดว่า “อันนี้ชิ้นสุดท้ายแล้วจริง ๆ”",
      "มีเกณฑ์จะได้เงินเพิ่ม และคุณจะค้นพบวิธีใช้เงินก้อนนั้นอย่างรวดเร็วอย่างน่าประหลาด",
      "การเงินของคุณไม่ได้แย่ เพียงแต่ยอดในบัญชีธนาคารอาจมีความคิดเห็นที่แตกต่างออกไป",
      "เดือนนี้มีโอกาสเก็บเงินได้ ถ้าคุณสามารถต้านทานคำว่า “ลดเวลาจำกัด” ได้",
      "เงินจะเข้ามาในชีวิตคุณเรื่อย ๆ แต่ดูเหมือนมันจะชอบออกไปเร็วพอ ๆ กัน",
      "อนาคตมีโอกาสทางการเงินรออยู่ แต่คุณต้องสังเกตมันให้ทันก่อนเอาเงินไปซื้อของกินหมด",
      "คุณมีโอกาสสร้างฐานะได้ดี เพียงแต่นิสัยการซื้อของตอนนี้กำลังทำหน้าที่ขัดขวางอย่างเต็มที่",
      "กระเป๋าเงินของคุณอาจเบาลงกว่าปกติ เพราะของหลายอย่างที่ซื้อมาไม่ได้จำเป็นเท่าไร",
      "ตัวคุณในอนาคตจะขอบคุณตัวเอง ถ้าคุณเริ่มเก็บเงินสักนิดตั้งแต่วันนี้",
      "การเงินมีแนวโน้มจะดีขึ้น โดยเฉพาะถ้าคุณเลิกมองทุกโปรโมชั่นเหมือนเป็นคำเชิญส่วนตัว",
      "มีโอกาสได้เงินแบบไม่คาดคิด และไม่นานหลังจากนั้นก็จะมีเหตุผลแบบไม่คาดคิดให้ใช้มัน",
      "อนาคตการเงินดูมีหวัง แต่ความสามารถในการเก็บเงินยังอยู่ในช่วงพัฒนา",
      "วันหนึ่งคุณอาจมีเงินมากพอที่จะสบายใจ แต่สุดท้ายคุณก็น่าจะหาเรื่องใหม่ให้ตัวเองกังวลอยู่ดี",
      "รายได้ของคุณมีโอกาสเพิ่มขึ้น แต่ความสามารถในการใช้เงินก็มีแนวโน้มเพิ่มขึ้นเหมือนกัน",
      "จักรวาลแนะนำให้คุณเก็บเงิน ส่วนประวัติการสั่งซื้อของคุณแนะนำตรงกันข้าม",
      "คุณไม่ได้ถังแตก คุณเพียงกำลังอยู่ในช่วงกระจายความมั่งคั่งออกจากบัญชีตัวเองอย่างมีระบบ",
      "การเงินจะเริ่มมั่นคงขึ้นเมื่อคุณหยุดซื้อของเพียงเพราะมันราคาถูกลงนิดหน่อย",
      "มีโอกาสที่คุณจะหาเงินได้มากขึ้นในอนาคต แต่ขอร้องว่าอย่าเพิ่งเพิ่มค่าใช้จ่ายตามทันที",
      "บัญชีธนาคารอาจฟื้นตัวในเร็ว ๆ นี้ ถ้าคุณหยุดเปิดหน้าสินค้าราคาแพงดูทุกคืน",
      "คุณมีศักยภาพด้านการเงินที่ดี แต่ความมีวินัยจะสำคัญกว่าโชค",
      "อนาคตอาจมีวันที่คุณมองยอดเงินแล้วถามตัวเองว่า “เงินหายไปไหนหมดวะ” อีกครั้ง",
      "คุณจะจัดการเงินเก่งขึ้นเมื่อเข้าใจว่าตัวคุณในอนาคตก็สมควรมีเงินเหลือเหมือนกัน",
      "การเงินที่ดีขึ้นเป็นไปได้ และอาจเริ่มจากการตัดสินใจง่าย ๆ ว่า “ไม่ซื้อก็ได้”",
      "สถานะการเงินจะดีขึ้นเมื่อความอยากเริ่มเลิกปลอมตัวเป็นความจำเป็น",
      "คุณมีโอกาสหาเงินได้พอใช้ชีวิตสบาย ๆ แต่การเก็บเงินไว้บ้างก็คงเป็นความคิดที่แปลกใหม่ดี",
      "ความมั่นคงทางการเงินอยู่ไม่ไกล เพียงแต่ในตะกร้าสินค้าของคุณมีอุปสรรคอยู่หลายชิ้น",
      "วันหนึ่งคุณอาจมีเงินมากกว่าที่คิด แต่บททดสอบจริง ๆ คือการไม่ใช้มันจนหมด",
      "อนาคตกระเป๋าเงินของคุณดูสุขภาพดีกว่าปัจจุบันพอสมควร กรุณาอย่าทำลายมันเอง",
      "คำทำนายการเงินค่อนข้างเป็นบวก แต่มีความเสี่ยงสูงที่จะเสียเงินกับของที่ไม่จำเป็น",
    ],

    love: [
      "ความรักของคุณตอนนี้ยังไม่ชัดเจน แต่สถานะออนไลน์ของอีกฝ่ายดูชัดเจนมาก",
      "มีโอกาสที่ใครบางคนจะสนใจคุณ แต่ทั้งสองฝ่ายกำลังรอให้อีกคนเป็นฝ่ายทักก่อน",
      "มีเกณฑ์เริ่มความสัมพันธ์ใหม่ แต่คุณอาจต้องเป็นฝ่ายส่งข้อความก่อน",
      "ความรักของคุณเหมือน Wi-Fi บางครั้งสัญญาณแรง บางครั้งหายไปแบบไม่มีคำอธิบาย",
      "คุณอาจเจอคนที่ชอบมาก ๆ แต่การคิดมากอาจกลายเป็นศัตรูตัวฉกาจของความรักครั้งนี้",
      "คนจากอดีตอาจกลับมา แต่คุณต้องตอบตัวเองให้ได้ว่าคิดถึงเขาหรือแค่คิดถึงความทรงจำ",
      "ความรักของคุณไม่ได้พัง แค่กำลังโหลดช้ากว่าปกติ",
      "มีโอกาสได้คุยกันแบบจริงจังเร็ว ๆ นี้ ถ้าคุณไม่ตอบแค่ “555” แล้วหายไป",
      "หัวใจของคุณยังว่าง แต่เหมือนกำลังรอใครสักคนที่รู้ว่าตัวเองกำลังทำอะไรอยู่",
      "คุณอาจรู้สึกดีกับใครบางคนแบบไม่ทันตั้งตัว ซึ่งเป็นสิ่งที่สมองไม่ได้วางแผนเอาไว้",
      "ความสัมพันธ์ในอนาคตอาจเริ่มต้นจากบทสนทนาธรรมดา ๆ ที่ตอนแรกคุณไม่ได้คิดอะไร",
      "คุณมีศักยภาพด้านความรัก แต่ความสามารถในการพูดความรู้สึกกำลังได้รับคะแนนแบบก้ำกึ่ง",
      "ใครบางคนอาจเข้ามาในชีวิตในเวลาที่คาดไม่ถึง ซึ่งน่าจะเป็นตอนที่คุณไม่ได้กำลังมองหาใคร",
      "ความสัมพันธ์ครั้งต่อไปอาจเริ่มอย่างช้า ๆ แต่ความช้านั้นอาจทำให้มันมีความหมายมากขึ้น",
      "มีเกณฑ์เกิด Plot Twist ด้านความรัก แต่ระบบขอไม่เปิดเผยว่าเป็นเรื่องดีหรือเรื่องปวดหัว",
      "อาจมีใครบางคนที่คุณอยากคุยด้วยมาก แต่ความกล้าของคุณกำลังอยู่ในช่วงระบบขัดข้อง",
      "ความรักของคุณอาจดีขึ้นมาก ถ้าคุณเลิกคิดว่าการไม่ตอบข้อความหนึ่งครั้งคือจุดจบของทุกอย่าง",
      "คุณอาจเจอคนที่เข้าใจความแปลกของคุณ ซึ่งฟังดูโรแมนติกหรือก็น่ากังวลนิดหน่อย",
      "อนาคตมีทั้งความรัก บทสนทนาที่น่าเขิน และช่วงเวลาที่คุณพยายามทำเหมือนไม่ได้รู้สึกอะไร",
      "คุณอาจตกหลุมรักใครบางคนที่ทำให้วันธรรมดากลายเป็นวันที่น่าสนใจขึ้นมาเฉย ๆ",
      "ความสัมพันธ์อาจเกิดขึ้นในวันที่คุณเลิกพยายามบังคับให้มันเกิด",
      "หัวใจของคุณไม่ได้มาช้า แค่กำลังเดินตามเวลาของตัวเอง",
      "มีความเป็นไปได้ว่าตอนนี้มีใครบางคนชอบคุณมากกว่าที่คุณคิด",
      "อนาคตด้านความรักดูดีกว่าประวัติแชตในโทรศัพท์ของคุณอยู่พอสมควร",
      "เร็ว ๆ นี้อาจมีเหตุผลให้คุณเช็กโทรศัพท์บ่อยกว่าปกติ",
      "ใครบางคนอาจเริ่มจากการเป็นเพื่อน แล้วค่อย ๆ กลายเป็นคนสำคัญมากขึ้น",
      "บทต่อไปของความรักอาจเริ่มจากข้อความสั้น ๆ ที่คุณเกือบตัดสินใจว่าจะไม่ส่ง",
      "ในทางทฤษฎีคุณพร้อมเปิดใจ แต่ในทางปฏิบัติระบบยังคงตรวจสอบสถานะอยู่",
      "ความรักกำลังมา เพียงแต่ระบบขอไม่ระบุวันจัดส่ง",
      "ความสัมพันธ์ครั้งต่อไปอาจดีต่อใจอย่างผิดปกติ จนตอนแรกคุณอาจรู้สึกว่าน่าสงสัย",
    ],

    endings: [
      "ชีวิตคุณไม่ได้แย่ แค่กำลังรันอยู่บน Beta Version ที่ยังมีบั๊กนิดหน่อย",
      "ทุกอย่างดูปกติดี... ซึ่งน่าสงสัยมาก ระบบแนะนำให้เตรียมตัวไว้ก่อน",
      "คุณมีศักยภาพอยู่เยอะมาก ปัญหาเดียวที่เหลือคือคุณต้องเริ่มใช้มัน",
      "ชีวิตคุณต้องการ Software Update แต่เจ้าของเครื่องกด “เตือนฉันภายหลัง” มาหลายรอบแล้ว",
      "ระบบตรวจพบอนาคตที่มีโอกาสดี พร้อม Side Quest ที่ไม่จำเป็นอีกจำนวนหนึ่ง",
      "ยินดีด้วย คุณได้รับสิทธิ์รับผิดชอบชีวิต Build นี้ด้วยตัวเอง",
      "Build นี้ผ่าน QA มาได้อย่างไรยังไม่มีใครรู้ รวมถึงทีม QA ด้วย",
      "เอาจริง ๆ แล้ว นี่ก็ไม่ใช่ Timeline ที่แย่ที่สุด",
      "อนาคตของคุณดูแพงอย่างน่าสงสัย แต่ก็ดูน่าสนใจไม่แพ้กัน",
      "อย่างน้อยเว็บไซต์ของคุณน่าจะออกมาดูดี",
      "อนาคตยังไม่แน่นอน แต่ความสามารถในการผัดวันประกันพรุ่งของคุณค่อนข้างแน่นอน",
      "ชีวิตคุณมี Storyline ที่น่าสนใจ เพียงแต่ Developer ลืมเขียนคู่มือมาให้",
      "ระบบคาดการณ์ว่าจะมีทั้งความสำเร็จ ความวุ่นวาย และคำถามว่า “กูทำอะไรลงไปวะ”",
      "คุณอาจไม่ได้ประสบความสำเร็จในชั่วข้ามคืน แต่ระหว่างทางจะมีเรื่องให้เล่าเยอะมาก",
      "อนาคตมีโอกาสดี ๆ รออยู่ เพียงแต่ระบบยังไม่สามารถยืนยันว่าคุณจะสังเกตเห็นมันหรือไม่",
      "ชีวิตกำลังเดินหน้าต่อไป ส่วนจะเดินไปทางไหน ระบบกำลังคำนวณอยู่",
      "Build ของคุณมีบั๊กอยู่บ้าง แต่ถ้าแก้หมดชีวิตก็คงไม่น่าสนุกเท่านี้",
      "คุณอาจอยู่ใกล้เป้าหมายมากกว่าที่คิด เพียงแต่ Loading Screen รอบนี้นานเป็นพิเศษ",
      "ระบบไม่สามารถรับประกันความสำเร็จได้ แต่รับประกันได้ว่าการยอมแพ้ไม่ช่วยอะไร",
      "อนาคตของคุณดูวุ่นวาย แต่แปลกดีที่ความวุ่นวายนั้นอาจเข้ากับคุณได้ดี",
      "คุณกำลังเข้าสู่ Chapter ใหม่ของชีวิต กรุณา Save Progress ก่อนตัดสินใจอะไรแปลก ๆ",
      "คำทำนายค่อนข้างเป็นบวก แต่ตารางเวลานอนของคุณอาจไม่เห็นด้วย",
      "ชีวิตกำลังน่าสนใจขึ้นเรื่อย ๆ ว่าจะเป็นเรื่องดีหรือไม่นั้นยังอยู่ระหว่างการตรวจสอบ",
      "ระบบไม่พบปัญหาใหญ่ ๆ ส่วนปัญหาเล็ก ๆ ขอแกล้งทำเป็นไม่เห็นก่อน",
      "อนาคตของคุณมีทั้งศักยภาพ บุคลิก และโปรเจกต์ที่ยังทำไม่เสร็จจำนวนหนึ่ง",
      "คุณไม่ได้ตามหลังใครในชีวิต แค่เลือกเส้นทางที่มี Loading Screen เยอะกว่าคนอื่น",
      "บทต่อไปของชีวิตอาจทำให้คุณประหลาดใจ โดยเฉพาะถ้าคุณหยุดพยายามคาดเดาทุกอย่าง",
      "ตัวคุณในอนาคตน่าจะภูมิใจในตัวคุณตอนนี้ และน่าจะอยากให้คุณทำโปรเจกต์นั้นให้เสร็จด้วย",
      "ระบบแนะนำให้ใช้ความมั่นใจ ความอดทน และลดจำนวนการตัดสินใจที่น่าสงสัยลงเล็กน้อย",
      "ชีวิตอาจไม่ได้เป็นไปตามแผนเดิม แต่เส้นทางใหม่อาจดีกว่าที่คิด",
      "ไม่มี Build ไหนสมบูรณ์แบบ และของคุณแค่มีความบันเทิงมากกว่าปกติ",
      "อนาคตยังสามารถแก้ไขได้ กรุณาใช้ฟีเจอร์นี้อย่างมีความรับผิดชอบ",
      "คุณผ่านวันแย่ ๆ มาได้ทุกครั้งจนถึงตอนนี้ ซึ่งถือว่าเป็นสถิติที่ดีพอสมควร",
      "เรื่องราวของคุณยังเขียนต่อได้ อย่าเพิ่งลบทั้งโปรเจกต์เพียงเพราะมีอะไรพังหนึ่งอย่าง",
      "ระบบคาดการณ์ว่าจะมีความก้าวหน้า ถ้าคุณยังเดินหน้าต่อแทนที่จะกด Refresh อยู่เรื่อย ๆ",
      "อนาคตยังไม่แน่นอน แต่มีอะไรอีกเยอะที่รอคุณอยู่และตอนนี้คุณยังมองไม่เห็น",
      "ชีวิต Build นี้มีศักยภาพ อัปเกรดอีกนิดและนอนให้พอ น่าจะช่วยได้",
      "คุณอาจยังไม่รู้ว่าตัวเองกำลังไปไหน แต่ตอนนี้อย่างน้อยคุณก็ไม่ได้ยืนอยู่ที่เดิม",
      "คำตัดสินสุดท้าย: การตัดสินใจน่าสงสัย ศักยภาพใช้ได้ และอนาคตดูมีแวว",
      "Simulation เสร็จสมบูรณ์ และด้วยเหตุผลบางอย่าง คุณยังเป็นตัวละครหลักของเรื่องนี้",
    ],
  },
};

export default function LifeGenerator({
  language,
  onBack,
}: Props) {
  const data = DATA[language];

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
          />

          <LifeSlot
            number="02"
            label={data.labels.money}
            value={displayMoney}
            active={loading}
          />

          <LifeSlot
            number="03"
            label={data.labels.love}
            value={displayLove}
            active={loading}
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
}: {
  number: string;
  label: string;
  value: string;
  active: boolean;
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
      className="
        life-slot
        relative
        min-h-0
        p-3
        sm:p-4
      "
    >
      {/* TOP */}

      <div className="relative z-10 flex min-w-0 items-center justify-between gap-2">
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
          h-[calc(100%-35px)]
          min-h-0
          min-w-0
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
          absolute
          bottom-2
          left-2.5
          right-2.5
          flex
          min-w-0
          items-center
          gap-2
          sm:left-3
          sm:right-3
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