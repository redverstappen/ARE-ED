"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type Language = "EN" | "TH";

type Props = {
  language: Language;
  onBack: () => void;
};

type Rarity =
  | "COMMON"
  | "UNCOMMON"
  | "RARE"
  | "EPIC"
  | "LEGENDARY"
  | "MYTHIC"
  | "ABSOLUTE";

type RawBoxItem = {
  nameEN: string;
  nameTH: string;

  rarity: Rarity;

  valueEN: string;
  valueTH: string;

  emoji?: string;
  image?: string;

  descriptionEN: string;
  descriptionTH: string;
};

/* =========================================================
   77 ITEMS
========================================================= */

const ITEMS: RawBoxItem[] = [
  {
    nameEN: "ONE SOCK",
    nameTH: "ถุงเท้า 1 ข้าง",
    rarity: "COMMON",
    valueEN: "3 THB",
    valueTH: "3 บาท",
    emoji: "🧦",
    descriptionEN:
      "The other one has disappeared into another dimension.",
    descriptionTH:
      "อีกข้างหายไปไหนไม่รู้ น่าจะถูกดูดเข้าอีกมิติไปแล้ว",
  },

  {
    nameEN: "MYSTERY ROCK",
    nameTH: "ก้อนหินปริศนา",
    rarity: "COMMON",
    valueEN: "0 THB",
    valueTH: "0 บาท",
    emoji: "🪨",
    descriptionEN:
      "It is literally just a rock. Congratulations.",
    descriptionTH:
      "มันคือก้อนหินจริง ๆ ครับ ยินดีด้วย",
  },

  {
    nameEN: "BOTTLE CAP",
    nameTH: "ฝาขวด",
    rarity: "COMMON",
    valueEN: "1 THB",
    valueTH: "1 บาท",
    emoji: "🔘",
    descriptionEN:
      "You opened an entire mystery box for a bottle cap.",
    descriptionTH:
      "คุณเปิดกล่องสุ่มทั้งกล่องเพื่อเจอฝาขวดหนึ่งอัน",
  },

  {
    nameEN: "POTATO",
    nameTH: "มันฝรั่ง",
    rarity: "COMMON",
    valueEN: "12 THB",
    valueTH: "12 บาท",
    emoji: "🥔",
    descriptionEN:
      "Honestly, this could have been worse.",
    descriptionTH:
      "เอาจริง ๆ ก็ยังดีกว่าได้ก้อนหินนะ",
  },

  {
    nameEN: "BANANA",
    nameTH: "กล้วย",
    rarity: "COMMON",
    valueEN: "10 THB",
    valueTH: "10 บาท",
    emoji: "🍌",
    descriptionEN:
      "A completely normal banana. Probably.",
    descriptionTH:
      "กล้วยธรรมดามาก... มั้งนะ",
  },

  {
    nameEN: "CAT HAIR",
    nameTH: "ขนแมว",
    rarity: "COMMON",
    valueEN: "0 THB",
    valueTH: "0 บาท",
    emoji: "🐈",
    descriptionEN:
      "The cat is not included. Obviously.",
    descriptionTH:
      "ไม่มีแมวแถมมาให้ครับ มีแค่ขน",
  },

  {
    nameEN: "USED TISSUE",
    nameTH: "ทิชชู่ใช้แล้ว",
    rarity: "COMMON",
    valueEN: "−5 THB",
    valueTH: "−5 บาท",
    emoji: "🧻",
    descriptionEN:
      "We strongly recommend not asking where it came from.",
    descriptionTH:
      "แนะนำว่าอย่าถามเลยครับว่ามาจากไหน",
  },

  {
    nameEN: "RANDOM BUTTON",
    nameTH: "ปุ่มอะไรไม่รู้",
    rarity: "COMMON",
    valueEN: "5 THB",
    valueTH: "5 บาท",
    emoji: "🔘",
    descriptionEN:
      "You have no idea what it does. Pressing it would be irresponsible.",
    descriptionTH:
      "ไม่รู้ว่ากดแล้วเกิดอะไรขึ้น และผมก็ไม่รับผิดชอบด้วย",
  },

  {
    nameEN: "EMPTY PEN",
    nameTH: "ปากกาหมึกหมด",
    rarity: "COMMON",
    valueEN: "2 THB",
    valueTH: "2 บาท",
    emoji: "🖊️",
    descriptionEN:
      "Looks useful until you actually try using it.",
    descriptionTH:
      "ดูเหมือนมีประโยชน์ จนกระทั่งคุณลองเขียน",
  },

  {
    nameEN: "SINGLE PAPER CLIP",
    nameTH: "ลวดเสียบกระดาษ 1 อัน",
    rarity: "COMMON",
    valueEN: "1 THB",
    valueTH: "1 บาท",
    emoji: "🖇️",
    descriptionEN:
      "One paper clip. Your office career starts here.",
    descriptionTH:
      "ลวดเสียบกระดาษหนึ่งอัน จุดเริ่มต้นของอาชีพออฟฟิศ",
  },

  {
    nameEN: "BROKEN CABLE",
    nameTH: "สายชาร์จพัง",
    rarity: "UNCOMMON",
    valueEN: "7 THB",
    valueTH: "7 บาท",
    emoji: "🔌",
    descriptionEN:
      "Works perfectly if you hold it at exactly the right angle.",
    descriptionTH:
      "ใช้ได้ปกติ ถ้าคุณถือมันในมุมที่ถูกต้องแบบเป๊ะ ๆ",
  },

  {
    nameEN: "COLD COFFEE",
    nameTH: "กาแฟเย็นชืด",
    rarity: "UNCOMMON",
    valueEN: "18 THB",
    valueTH: "18 บาท",
    emoji: "☕",
    descriptionEN:
      "It was supposed to be hot. You got distracted.",
    descriptionTH:
      "ตอนแรกมันควรร้อน แต่คุณมัวทำอะไรไม่รู้อยู่",
  },

  {
    nameEN: "HALF-CHARGED POWER BANK",
    nameTH: "พาวเวอร์แบงก์เหลือครึ่งเดียว",
    rarity: "UNCOMMON",
    valueEN: "120 THB",
    valueTH: "120 บาท",
    emoji: "🔋",
    descriptionEN:
      "Enough to save your phone. Not enough to save your day.",
    descriptionTH:
      "ชาร์จมือถือรอด แต่ช่วยชีวิตคุณไม่ได้",
  },

  {
    nameEN: "MYSTERY KEY",
    nameTH: "กุญแจปริศนา",
    rarity: "UNCOMMON",
    valueEN: "??? THB",
    valueTH: "??? บาท",
    emoji: "🔑",
    descriptionEN:
      "There is a lock somewhere. Nobody knows where.",
    descriptionTH:
      "มีแม่กุญแจที่เข้าคู่กับมันอยู่ที่ไหนสักแห่ง แต่ไม่รู้ที่ไหน",
  },

  {
    nameEN: "OLD RECEIPT",
    nameTH: "ใบเสร็จเก่า",
    rarity: "UNCOMMON",
    valueEN: "0 THB",
    valueTH: "0 บาท",
    emoji: "🧾",
    descriptionEN:
      "You have no idea what you bought, but apparently it mattered.",
    descriptionTH:
      "จำไม่ได้ว่าซื้ออะไร แต่ดูเหมือนตอนนั้นจะคิดว่าจำเป็น",
  },

  {
    nameEN: "MYSTERY USB",
    nameTH: "USB ปริศนา",
    rarity: "UNCOMMON",
    valueEN: "50 THB",
    valueTH: "50 บาท",
    emoji: "💾",
    descriptionEN:
      "Contains 17 folders named FINAL_FINAL_2.",
    descriptionTH:
      "ข้างในมีโฟลเดอร์ชื่อ FINAL_FINAL_2 อยู่ 17 อัน",
  },

  {
    nameEN: "LOST EARPHONE",
    nameTH: "หูฟังที่หายไปข้างหนึ่ง",
    rarity: "UNCOMMON",
    valueEN: "50 THB",
    valueTH: "50 บาท",
    emoji: "🎧",
    descriptionEN:
      "You found one. Unfortunately, you still don't know where the other is.",
    descriptionTH:
      "เจอหนึ่งข้างแล้ว แต่ก็ยังไม่รู้ว่าอีกข้างอยู่ไหน",
  },

  {
    nameEN: "RANDOM SCREW",
    nameTH: "น็อตปริศนา",
    rarity: "UNCOMMON",
    valueEN: "4 THB",
    valueTH: "4 บาท",
    emoji: "🔩",
    descriptionEN:
      "This was definitely holding something important together.",
    descriptionTH:
      "น็อตตัวนี้น่าจะเคยยึดอะไรสำคัญเอาไว้สักอย่าง",
  },

  {
    nameEN: "LUCKY COIN",
    nameTH: "เหรียญนำโชค",
    rarity: "UNCOMMON",
    valueEN: "9 THB",
    valueTH: "9 บาท",
    emoji: "🪙",
    descriptionEN:
      "It may bring luck. Nobody has scientifically confirmed this.",
    descriptionTH:
      "อาจนำโชคให้คุณได้ แต่ยังไม่มีงานวิจัยรองรับ",
  },

  {
    nameEN: "MINI SNACK",
    nameTH: "ขนมชิ้นจิ๋ว",
    rarity: "UNCOMMON",
    valueEN: "15 THB",
    valueTH: "15 บาท",
    emoji: "🍪",
    descriptionEN:
      "You opened a box and somehow got hungry.",
    descriptionTH:
      "เปิดกล่องสุ่มอยู่ดี ๆ กลายเป็นหิวเฉย",
  },

  {
    nameEN: "WORKING PEN",
    nameTH: "ปากกาที่เขียนได้",
    rarity: "RARE",
    valueEN: "15 THB",
    valueTH: "15 บาท",
    emoji: "🖊️",
    descriptionEN:
      "A genuinely useful item. This is getting serious.",
    descriptionTH:
      "ของที่มีประโยชน์จริง ๆ เริ่มจริงจังแล้วนะ",
  },

  {
    nameEN: "TINY CACTUS",
    nameTH: "กระบองเพชรจิ๋ว",
    rarity: "RARE",
    valueEN: "49 THB",
    valueTH: "49 บาท",
    emoji: "🌵",
    descriptionEN:
      "Small, green, and silently judging your life choices.",
    descriptionTH:
      "ตัวเล็ก สีเขียว และกำลังตัดสินการใช้ชีวิตของคุณเงียบ ๆ",
  },

  {
    nameEN: "PERFECTLY ROUND ROCK",
    nameTH: "ก้อนหินกลมเกินไป",
    rarity: "RARE",
    valueEN: "99 THB",
    valueTH: "99 บาท",
    emoji: "⚪",
    descriptionEN:
      "Nature spent way too much time making this.",
    descriptionTH:
      "ธรรมชาติใช้เวลาสร้างมันนานเกินกว่าที่ควรจะเป็น",
  },

  {
    nameEN: "PREMIUM RUBBER DUCK",
    nameTH: "เป็ดยาง Premium",
    rarity: "RARE",
    valueEN: "89 THB",
    valueTH: "89 บาท",
    emoji: "🦆",
    descriptionEN:
      "It knows your code is broken. It refuses to explain.",
    descriptionTH:
      "มันรู้ว่าโค้ดคุณพัง แต่มันเลือกที่จะไม่บอก",
  },

  {
    nameEN: "MYSTERIOUS BUTTON",
    nameTH: "ปุ่มปริศนา",
    rarity: "RARE",
    valueEN: "??? THB",
    valueTH: "??? บาท",
    emoji: "🔴",
    descriptionEN:
      "There is absolutely no documentation for this.",
    descriptionTH:
      "ไม่มี Documentation ใด ๆ ทั้งสิ้นว่าปุ่มนี้ทำอะไร",
  },

  {
    nameEN: "ONE PERFECT FRY",
    nameTH: "เฟรนช์ฟรายส์ที่สมบูรณ์แบบ",
    rarity: "RARE",
    valueEN: "20 THB",
    valueTH: "20 บาท",
    emoji: "🍟",
    descriptionEN:
      "Perfect crunch. Perfect shape. You ate it immediately.",
    descriptionTH:
      "กรอบพอดี ทรงพอดี และคุณกินมันไปแล้วเรียบร้อย",
  },

  {
    nameEN: "INFINITE BATTERY",
    nameTH: "แบตเตอรี่ไม่มีวันหมด",
    rarity: "RARE",
    valueEN: "500 THB",
    valueTH: "500 บาท",
    emoji: "🔋",
    descriptionEN:
      "Unfortunately, it only works with a device that does not exist.",
    descriptionTH:
      "น่าเสียดายที่มันใช้ได้กับอุปกรณ์ที่ไม่มีอยู่จริงเท่านั้น",
  },

  {
    nameEN: "TIME MACHINE RECEIPT",
    nameTH: "ใบเสร็จจากอนาคต",
    rarity: "RARE",
    valueEN: "88 THB",
    valueTH: "88 บาท",
    emoji: "🧾",
    descriptionEN:
      "The date says tomorrow. That is mildly concerning.",
    descriptionTH:
      "วันที่บนใบเสร็จเขียนว่า “พรุ่งนี้” เริ่มน่ากังวลแล้ว",
  },

  {
    nameEN: "INVISIBLE STRING",
    nameTH: "เชือกที่มองไม่เห็น",
    rarity: "RARE",
    valueEN: "??? THB",
    valueTH: "??? บาท",
    emoji: "🧵",
    descriptionEN:
      "You cannot see it. You also cannot prove it exists.",
    descriptionTH:
      "มองไม่เห็น และคุณก็พิสูจน์ไม่ได้ว่ามันมีอยู่จริง",
  },

  {
    nameEN: "VERY IMPORTANT ROCK",
    nameTH: "ก้อนหินที่สำคัญมาก",
    rarity: "RARE",
    valueEN: "420 THB",
    valueTH: "420 บาท",
    emoji: "🪨",
    descriptionEN:
      "Why is it important? Nobody knows. It just is.",
    descriptionTH:
      "สำคัญยังไงไม่รู้ แต่ระบบบอกว่าสำคัญ",
  },

  {
    nameEN: "COFFEE OF DESTINY",
    nameTH: "กาแฟแห่งโชคชะตา",
    rarity: "EPIC",
    valueEN: "65 THB",
    valueTH: "65 บาท",
    emoji: "☕",
    descriptionEN:
      "You were supposed to drink water. You chose this instead.",
    descriptionTH:
      "คุณควรดื่มน้ำ แต่สุดท้ายเลือกกาแฟเหมือนเดิม",
  },

  {
    nameEN: "BRAIN CELL",
    nameTH: "เซลล์สมอง 1 เซลล์",
    rarity: "EPIC",
    valueEN: "1,000 THB",
    valueTH: "1,000 บาท",
    emoji: "🧠",
    descriptionEN:
      "Handle with care. This is apparently your last one.",
    descriptionTH:
      "โปรดดูแลอย่างดี เพราะนี่อาจเป็นเซลล์สุดท้ายของคุณแล้ว",
  },

  {
    nameEN: "CONFIDENCE AT 2 AM",
    nameTH: "ความมั่นใจตอนตี 2",
    rarity: "EPIC",
    valueEN: "∞ THB",
    valueTH: "∞ บาท",
    emoji: "🌙",
    descriptionEN:
      "At 2 AM you believe you can accomplish literally anything.",
    descriptionTH:
      "ตอนตี 2 คุณเชื่อว่าตัวเองทำได้ทุกอย่าง พรุ่งนี้ค่อยว่ากัน",
  },

  {
    nameEN: "MOTIVATION",
    nameTH: "แรงจูงใจ",
    rarity: "EPIC",
    valueEN: "999 THB",
    valueTH: "999 บาท",
    emoji: "🔥",
    descriptionEN:
      "Use it before it disappears in approximately 12 minutes.",
    descriptionTH:
      "กรุณาใช้ก่อนมันจะหายไปภายในประมาณ 12 นาที",
  },

  {
    nameEN: "MYSTERY ENERGY DRINK",
    nameTH: "เครื่องดื่มชูกำลังปริศนา",
    rarity: "EPIC",
    valueEN: "45 THB",
    valueTH: "45 บาท",
    emoji: "🥤",
    descriptionEN:
      "The label says: DO NOT ASK.",
    descriptionTH:
      "ฉลากเขียนไว้ว่า: อย่าถาม",
  },

  {
    nameEN: "UNFINISHED PROJECT",
    nameTH: "โปรเจกต์ที่ทำไม่เสร็จ",
    rarity: "EPIC",
    valueEN: "∞ HOURS",
    valueTH: "∞ ชั่วโมง",
    emoji: "💻",
    descriptionEN:
      "Started three months ago. Last edited yesterday.",
    descriptionTH:
      "เริ่มทำมา 3 เดือนแล้ว และแก้ล่าสุดเมื่อวาน",
  },

  {
    nameEN: "INFINITE TODO LIST",
    nameTH: "To-do List ไม่มีวันหมด",
    rarity: "EPIC",
    valueEN: "∞ TASKS",
    valueTH: "∞ งาน",
    emoji: "📝",
    descriptionEN:
      "Every time you finish one task, three more appear.",
    descriptionTH:
      "ทุกครั้งที่ทำเสร็จหนึ่งงาน จะมีอีกสามงานโผล่มา",
  },

  {
    nameEN: "SECRET PASSWORD",
    nameTH: "รหัสผ่านลับ",
    rarity: "EPIC",
    valueEN: "???",
    valueTH: "???",
    emoji: "🔐",
    descriptionEN:
      "You immediately forgot it after reading it.",
    descriptionTH:
      "คุณลืมรหัสนี้ทันทีหลังจากอ่านมันจบ",
  },

  {
    nameEN: "DEBUGGING SPIRIT",
    nameTH: "วิญญาณนัก Debug",
    rarity: "EPIC",
    valueEN: "777 THB",
    valueTH: "777 บาท",
    emoji: "👻",
    descriptionEN:
      "It appears whenever your code breaks five minutes before submission.",
    descriptionTH:
      "จะปรากฏตัวทุกครั้งที่โค้ดพังก่อนส่งงาน 5 นาที",
  },

  {
    nameEN: "THE LAST BRAIN CELL",
    nameTH: "เซลล์สมองอันสุดท้าย",
    rarity: "EPIC",
    valueEN: "2,000 THB",
    valueTH: "2,000 บาท",
    emoji: "🧠",
    descriptionEN:
      "Please return it when you are done making bad decisions.",
    descriptionTH:
      "ใช้เสร็จแล้วกรุณาคืนด้วย เพราะคุณกำลังจะตัดสินใจอะไรแปลก ๆ",
  },

  {
    nameEN: "LOST AIRPOD",
    nameTH: "AirPod ที่หายไป",
    rarity: "LEGENDARY",
    valueEN: "1,999 THB",
    valueTH: "1,999 บาท",
    emoji: "🎧",
    descriptionEN:
      "You found the legendary earbud everyone else has been looking for.",
    descriptionTH:
      "คุณพบ AirPod ในตำนานที่ทุกคนตามหากันมานาน",
  },

  {
    nameEN: "MINI CROWN",
    nameTH: "มงกุฎจิ๋ว",
    rarity: "LEGENDARY",
    valueEN: "420 THB",
    valueTH: "420 บาท",
    emoji: "👑",
    descriptionEN:
      "Congratulations. You are officially important now.",
    descriptionTH:
      "ยินดีด้วย ตอนนี้คุณได้รับการแต่งตั้งให้เป็นคนสำคัญแล้ว",
  },

  {
    nameEN: "GOLDEN SPOON",
    nameTH: "ช้อนทอง",
    rarity: "LEGENDARY",
    valueEN: "4,999 THB",
    valueTH: "4,999 บาท",
    emoji: "🥄",
    descriptionEN:
      "Completely unnecessary, but incredibly shiny.",
    descriptionTH:
      "ไม่มีประโยชน์อะไรเลย แต่เงามาก",
  },

  {
    nameEN: "PREMIUM WIFI SIGNAL",
    nameTH: "สัญญาณ Wi-Fi ระดับเทพ",
    rarity: "LEGENDARY",
    valueEN: "9,999 THB",
    valueTH: "9,999 บาท",
    emoji: "📶",
    descriptionEN:
      "Ping is 1ms. Your happiness is now 100%.",
    descriptionTH:
      "Ping เหลือ 1ms ความสุขของคุณเพิ่มขึ้น 100%",
  },

  {
    nameEN: "THE PERFECT CABLE",
    nameTH: "สายชาร์จในตำนาน",
    rarity: "LEGENDARY",
    valueEN: "1,337 THB",
    valueTH: "1,337 บาท",
    emoji: "🔌",
    descriptionEN:
      "It works from every angle. Civilization has peaked.",
    descriptionTH:
      "เสียบมุมไหนก็เข้า ใช้ได้ทุกครั้ง นี่คือจุดสูงสุดของอารยธรรม",
  },

  {
    nameEN: "FORGOTTEN LOGIN",
    nameTH: "บัญชีที่คุณลืมว่ามี",
    rarity: "LEGENDARY",
    valueEN: "??? THB",
    valueTH: "??? บาท",
    emoji: "👤",
    descriptionEN:
      "You have 14 years of digital history in here.",
    descriptionTH:
      "ข้างในมีประวัติชีวิตดิจิทัลของคุณประมาณ 14 ปี",
  },

  {
    nameEN: "DEVELOPER TEARS",
    nameTH: "น้ำตาของ Developer",
    rarity: "LEGENDARY",
    valueEN: "∞ THB",
    valueTH: "∞ บาท",
    emoji: "💧",
    descriptionEN:
      "Collected after the code worked for absolutely no reason.",
    descriptionTH:
      "เก็บมาจากตอนที่โค้ดทำงานได้โดยไม่มีใครรู้ว่าทำไม",
  },

  {
    nameEN: "ONE FREE SLEEP",
    nameTH: "สิทธิ์นอนฟรี 1 ครั้ง",
    rarity: "LEGENDARY",
    valueEN: "PRICELESS",
    valueTH: "ประเมินค่าไม่ได้",
    emoji: "😴",
    descriptionEN:
      "You may sleep peacefully without feeling guilty. Once.",
    descriptionTH:
      "คุณสามารถนอนได้โดยไม่รู้สึกผิด 1 ครั้ง ใช้ให้คุ้ม",
  },

  {
    nameEN: "THE FORBIDDEN SNACK",
    nameTH: "ขนมต้องห้าม",
    rarity: "LEGENDARY",
    valueEN: "666 THB",
    valueTH: "666 บาท",
    emoji: "🍫",
    descriptionEN:
      "You were specifically told not to eat this.",
    descriptionTH:
      "มีคนบอกคุณโดยตรงว่าอย่ากิน และแน่นอนว่าคุณกำลังจะกิน",
  },

  {
    nameEN: "UNLIMITED COFFEE CARD",
    nameTH: "บัตรกาแฟไม่จำกัด",
    rarity: "LEGENDARY",
    valueEN: "12,000 THB",
    valueTH: "12,000 บาท",
    emoji: "☕",
    descriptionEN:
      "Valid until your heart decides otherwise.",
    descriptionTH:
      "ใช้ได้จนกว่าหัวใจคุณจะตัดสินใจว่าพอแล้ว",
  },

  {
    nameEN: "GOLDEN COIN",
    nameTH: "เหรียญทองปริศนา",
    rarity: "MYTHIC",
    valueEN: "9,999 THB",
    valueTH: "9,999 บาท",
    emoji: "🪙",
    descriptionEN:
      "Probably gold. Probably.",
    descriptionTH:
      "น่าจะเป็นทอง... น่าจะนะ",
  },

  {
    nameEN: "LUCKY CHARM",
    nameTH: "เครื่องรางนำโชค",
    rarity: "MYTHIC",
    valueEN: "777 THB",
    valueTH: "777 บาท",
    emoji: "🍀",
    descriptionEN:
      "Nobody knows if it works, but you are afraid to throw it away.",
    descriptionTH:
      "ไม่รู้ว่าใช้ได้จริงไหม แต่ก็ไม่กล้าทิ้ง",
  },

  {
    nameEN: "TIME FREEZER",
    nameTH: "เครื่องหยุดเวลา",
    rarity: "MYTHIC",
    valueEN: "99,999 THB",
    valueTH: "99,999 บาท",
    emoji: "⏱️",
    descriptionEN:
      "Freezes time for exactly three seconds. That's it.",
    descriptionTH:
      "หยุดเวลาได้ 3 วินาทีเท่านั้น และหมดแล้ว",
  },

  {
    nameEN: "REALITY GLITCH",
    nameTH: "บั๊กของความเป็นจริง",
    rarity: "MYTHIC",
    valueEN: "ERROR",
    valueTH: "ERROR",
    emoji: "🌀",
    descriptionEN:
      "Reality has stopped responding. Please try again.",
    descriptionTH:
      "ความเป็นจริงหยุดตอบสนอง กรุณาลองใหม่อีกครั้ง",
  },

  {
    nameEN: "INFINITE USB",
    nameTH: "USB ไม่มีวันเต็ม",
    rarity: "MYTHIC",
    valueEN: "1,000,000 THB",
    valueTH: "1,000,000 บาท",
    emoji: "💾",
    descriptionEN:
      "Storage capacity: yes.",
    descriptionTH:
      "ความจุ: เยอะจนระบบเลิกนับ",
  },

  {
    nameEN: "SAVE POINT",
    nameTH: "จุด Save ชีวิต",
    rarity: "MYTHIC",
    valueEN: "PRICELESS",
    valueTH: "ประเมินค่าไม่ได้",
    emoji: "💾",
    descriptionEN:
      "You may save your current life state. Use responsibly.",
    descriptionTH:
      "สามารถบันทึกสถานะชีวิตปัจจุบันได้ ใช้ด้วยความรับผิดชอบ",
  },

  {
    nameEN: "THE LAST WIFI",
    nameTH: "Wi-Fi เส้นสุดท้ายของโลก",
    rarity: "MYTHIC",
    valueEN: "∞ THB",
    valueTH: "∞ บาท",
    emoji: "📡",
    descriptionEN:
      "Everyone wants the password. You don't have it.",
    descriptionTH:
      "ทุกคนต้องการรหัสผ่าน แต่คุณเองก็ไม่รู้",
  },

  {
    nameEN: "MONEY GLITCH",
    nameTH: "บั๊กสร้างเงิน",
    rarity: "MYTHIC",
    valueEN: "999,999 THB",
    valueTH: "999,999 บาท",
    emoji: "💸",
    descriptionEN:
      "Works perfectly until the bank notices.",
    descriptionTH:
      "ใช้ได้อย่างสมบูรณ์แบบ จนกว่าธนาคารจะสังเกตเห็น",
  },

  {
    nameEN: "UNLIMITED STORAGE",
    nameTH: "พื้นที่เก็บข้อมูลไม่จำกัด",
    rarity: "MYTHIC",
    valueEN: "∞ GB",
    valueTH: "∞ GB",
    emoji: "☁️",
    descriptionEN:
      "Finally, you can keep all those screenshots you never look at.",
    descriptionTH:
      "ในที่สุดก็เก็บ Screenshot ทั้งหมดที่คุณไม่เคยเปิดดูได้แล้ว",
  },

  {
    nameEN: "THE GOLDEN BUG",
    nameTH: "บั๊กสีทอง",
    rarity: "MYTHIC",
    valueEN: "??? THB",
    valueTH: "??? บาท",
    emoji: "🐛",
    descriptionEN:
      "Do not fix it. Nobody knows what will happen.",
    descriptionTH:
      "อย่าแก้เด็ดขาด ไม่มีใครรู้ว่าถ้าแก้แล้วจะเกิดอะไรขึ้น",
  },

  {
    nameEN: "NOTHING",
    nameTH: "ความว่างเปล่า",
    rarity: "ABSOLUTE",
    valueEN: "0 THB",
    valueTH: "0 บาท",
    emoji: "∅",
    descriptionEN:
      "You opened the box. There was nothing inside. Incredible.",
    descriptionTH:
      "คุณเปิดกล่องแล้วพบว่าไม่มีอะไรเลย สุดยอดจริง ๆ",
  },

  {
    nameEN: "FORBIDDEN BUTTON",
    nameTH: "ปุ่มต้องห้าม",
    rarity: "ABSOLUTE",
    valueEN: "???",
    valueTH: "???",
    emoji: "🔴",
    descriptionEN:
      "You were told not to press it. You pressed it anyway.",
    descriptionTH:
      "บอกแล้วว่าอย่ากด แต่คุณก็กดจนได้",
  },

  {
    nameEN: "THE VOID",
    nameTH: "ความว่างเปล่าที่ลึกกว่าเดิม",
    rarity: "ABSOLUTE",
    valueEN: "NULL",
    valueTH: "NULL",
    emoji: "🕳️",
    descriptionEN:
      "It contains nothing, including your expectations.",
    descriptionTH:
      "ข้างในไม่มีอะไรเลย รวมถึงความหวังของคุณด้วย",
  },

  {
    nameEN: "ADMIN ACCESS",
    nameTH: "สิทธิ์ Admin",
    rarity: "ABSOLUTE",
    valueEN: "GOD MODE",
    valueTH: "GOD MODE",
    emoji: "🔑",
    descriptionEN:
      "You probably should not have this.",
    descriptionTH:
      "จริง ๆ แล้วคุณไม่ควรมีสิทธิ์นี้ด้วยซ้ำ",
  },

  {
    nameEN: "THE DEVELOPER",
    nameTH: "เจ้าของเกม",
    rarity: "ABSOLUTE",
    valueEN: "∞ THB",
    valueTH: "∞ บาท",
    image: "/profile.jpg",
    descriptionEN:
      "You found the developer. He also doesn't know why he is inside the box.",
    descriptionTH:
      "คุณเจอเจ้าของเกมแล้ว... แต่เจ้าตัวก็ไม่รู้ว่ามาอยู่ในกล่องได้ยังไง",
  },

  {
    nameEN: "REALITY.EXE",
    nameTH: "REALITY.EXE",
    rarity: "ABSOLUTE",
    valueEN: "SYSTEM",
    valueTH: "SYSTEM",
    emoji: "💻",
    descriptionEN:
      "The simulation has detected you looking at the screen.",
    descriptionTH:
      "ระบบจำลองตรวจพบว่าคุณกำลังมองหน้าจออยู่",
  },

  {
    nameEN: "THE RED BUTTON",
    nameTH: "ปุ่มแดงที่แดงกว่าเดิม",
    rarity: "ABSOLUTE",
    valueEN: "DO NOT ASK",
    valueTH: "อย่าถาม",
    emoji: "🔴",
    descriptionEN:
      "There is no logical reason for this to exist.",
    descriptionTH:
      "ไม่มีเหตุผลทางตรรกะใด ๆ ที่ปุ่มนี้ควรมีอยู่",
  },

  {
    nameEN: "404 FUTURE",
    nameTH: "อนาคต 404",
    rarity: "ABSOLUTE",
    valueEN: "NOT FOUND",
    valueTH: "ไม่พบข้อมูล",
    emoji: "🪧",
    descriptionEN:
      "Your future could not be found. Please refresh your life.",
    descriptionTH:
      "ไม่พบอนาคตของคุณ กรุณา Refresh ชีวิตแล้วลองใหม่",
  },

  {
    nameEN: "DEVELOPER'S LAST BRAIN CELL",
    nameTH: "เซลล์สมองสุดท้ายของคนทำเกม",
    rarity: "ABSOLUTE",
    valueEN: "DO NOT SELL",
    valueTH: "ห้ามขาย",
    emoji: "🧠",
    descriptionEN:
      "This is all that remains after building this game.",
    descriptionTH:
      "นี่คือสิ่งสุดท้ายที่เหลืออยู่หลังจากทำเกมนี้เสร็จ",
  },

  {
    nameEN: "THE ORIGINAL BUG",
    nameTH: "บั๊กต้นกำเนิด",
    rarity: "ABSOLUTE",
    valueEN: "CLASSIFIED",
    valueTH: "ความลับระดับสูง",
    emoji: "🐛",
    descriptionEN:
      "Nobody created it. It was simply there.",
    descriptionTH:
      "ไม่มีใครสร้างมันขึ้นมา มันอยู่ตรงนั้นตั้งแต่แรก",
  },

  {
    nameEN: "DEVELOPER'S PROFILE",
    nameTH: "รูปเจ้าของกล่อง",
    rarity: "ABSOLUTE",
    valueEN: "PRICELESS",
    valueTH: "ประเมินค่าไม่ได้",
    image: "/profile.jpg",
    descriptionEN:
      "Congratulations. You somehow pulled the person who made the box.",
    descriptionTH:
      "ยินดีด้วย คุณสุ่มได้คนที่เป็นคนสร้างกล่องนี้ขึ้นมาเอง",
  },

  {
    nameEN: "THE FORBIDDEN PROJECT",
    nameTH: "โปรเจกต์ต้องห้าม",
    rarity: "ABSOLUTE",
    valueEN: "DO NOT OPEN",
    valueTH: "ห้ามเปิด",
    emoji: "📁",
    descriptionEN:
      "There is a folder inside named final_final_REAL_final.",
    descriptionTH:
      "ข้างในมีโฟลเดอร์ชื่อ final_final_REAL_final อยู่",
  },

  {
    nameEN: "QUANTUM POTATO",
    nameTH: "มันฝรั่งควอนตัม",
    rarity: "ABSOLUTE",
    valueEN: "∞ THB",
    valueTH: "∞ บาท",
    emoji: "🥔",
    descriptionEN:
      "It is both cooked and uncooked until you look at it.",
    descriptionTH:
      "มันทั้งสุกและไม่สุกพร้อมกัน จนกว่าคุณจะมองมัน",
  },

  {
    nameEN: "THE ONE TRUE CABLE",
    nameTH: "สายที่ใช่ที่สุด",
    rarity: "ABSOLUTE",
    valueEN: "999,999 THB",
    valueTH: "999,999 บาท",
    emoji: "🔌",
    descriptionEN:
      "It charges every device ever created. Probably.",
    descriptionTH:
      "สามารถชาร์จอุปกรณ์ทุกชนิดที่มนุษย์เคยสร้าง... น่าจะนะ",
  },

  {
    nameEN: "SAVE FILE FROM 2037",
    nameTH: "ไฟล์เซฟจากปี 2037",
    rarity: "ABSOLUTE",
    valueEN: "CLASSIFIED",
    valueTH: "ความลับ",
    emoji: "💾",
    descriptionEN:
      "Someone named ARE_ED has already finished this game.",
    descriptionTH:
      "มีคนชื่อ ARE_ED เล่นเกมนี้จบไปแล้วตั้งแต่ปี 2037",
  },

  {
    nameEN: "THE FINAL ANSWER",
    nameTH: "คำตอบสุดท้าย",
    rarity: "ABSOLUTE",
    valueEN: "42",
    valueTH: "42",
    emoji: "❓",
    descriptionEN:
      "You were expecting something more useful, weren't you?",
    descriptionTH:
      "คุณคาดหวังคำตอบที่มีประโยชน์กว่านี้ใช่ไหม",
  },

  {
    nameEN: "YOU",
    nameTH: "ตัวคุณเอง",
    rarity: "ABSOLUTE",
    valueEN: "PRICELESS",
    valueTH: "ประเมินค่าไม่ได้",
    emoji: "🫵",
    descriptionEN:
      "The real treasure was inside the box all along.",
    descriptionTH:
      "สมบัติที่แท้จริงอยู่ในกล่องมาตลอด... และมันคือคุณ",
  },
];

/* =========================================================
   RARITY LABEL
========================================================= */

const RARITY_LABELS: Record<
  Language,
  Record<Rarity, string>
> = {
  EN: {
    COMMON: "COMMON",
    UNCOMMON: "UNCOMMON",
    RARE: "RARE",
    EPIC: "EPIC",
    LEGENDARY: "LEGENDARY",
    MYTHIC: "MYTHIC",
    ABSOLUTE: "ABSOLUTE",
  },

  TH: {
    COMMON: "ทั่วไป",
    UNCOMMON: "ไม่ธรรมดา",
    RARE: "หายาก",
    EPIC: "มหากาพย์",
    LEGENDARY: "ระดับตำนาน",
    MYTHIC: "ระดับมายา",
    ABSOLUTE: "เหนือกฎ",
  },
};

/* =========================================================
   RARITY STYLE
========================================================= */

const RARITY_STYLES: Record<
  Rarity,
  {
    border: string;
    background: string;
    text: string;
    glow: string;
  }
> = {
  COMMON: {
    border: "border-slate-300",
    background: "bg-slate-100/80",
    text: "text-slate-600",
    glow: "rgba(100,116,139,0.18)",
  },

  UNCOMMON: {
    border: "border-emerald-300",
    background: "bg-emerald-50/80",
    text: "text-emerald-600",
    glow: "rgba(16,185,129,0.22)",
  },

  RARE: {
    border: "border-sky-300",
    background: "bg-sky-50/80",
    text: "text-sky-600",
    glow: "rgba(14,165,233,0.24)",
  },

  EPIC: {
    border: "border-violet-300",
    background: "bg-violet-50/80",
    text: "text-violet-600",
    glow: "rgba(139,92,246,0.25)",
  },

  LEGENDARY: {
    border: "border-amber-300",
    background: "bg-amber-50/85",
    text: "text-amber-600",
    glow: "rgba(245,158,11,0.28)",
  },

  MYTHIC: {
    border: "border-fuchsia-300",
    background: "bg-fuchsia-50/85",
    text: "text-fuchsia-600",
    glow: "rgba(217,70,239,0.3)",
  },

  ABSOLUTE: {
    border: "border-black/25",
    background: "bg-black/[0.055]",
    text: "text-black",
    glow: "rgba(0,0,0,0.22)",
  },
};

/* =========================================================
   COMPONENT
========================================================= */

export default function WhatsInTheBox({
  language,
  onBack,
}: Props) {
  /*
   * สำคัญมาก:
   *
   * เราจะไม่เก็บ BoxItem ลง state
   * แต่เก็บ "index" ของของที่สุ่มได้แทน
   *
   * เช่น resultIndex = 64
   *
   * เวลาเปลี่ยน EN -> TH
   * เราจะเอา ITEMS[64] มาอ่านภาษาใหม่
   *
   * เพราะงั้นของเดิมจะเปลี่ยนภาษาได้ทันที
   * โดยไม่สุ่มของใหม่
   */

  const [opening, setOpening] =
    useState(false);

  const [resultIndex, setResultIndex] =
    useState<number | null>(null);

  /*
   * ของที่กำลังแสดงผล
   * จะถูกสร้างใหม่ทุกครั้งที่ language เปลี่ยน
   */

  const result =
    resultIndex !== null
      ? ITEMS[resultIndex]
      : null;

  /*
   * ข้อมูลที่แสดงตามภาษา
   */

  const resultName =
    result && language === "EN"
      ? result.nameEN
      : result?.nameTH;

  const resultDescription =
    result && language === "EN"
      ? result.descriptionEN
      : result?.descriptionTH;

  const resultValue =
    result && language === "EN"
      ? result.valueEN
      : result?.valueTH;

  const rarity = result
    ? RARITY_STYLES[result.rarity]
    : null;

  const rarityLabel = result
    ? RARITY_LABELS[language][result.rarity]
    : "";

  /* =========================================================
     OPEN BOX
  ========================================================= */

  const openBox = () => {
    if (opening) return;

    setOpening(true);
    setResultIndex(null);

    window.setTimeout(() => {
      const index = Math.floor(
        Math.random() * ITEMS.length
      );

      /*
       * เก็บ index เท่านั้น
       */

      setResultIndex(index);
      setOpening(false);
    }, 1500);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.45,
      }}
      className="
        flex
        h-full
        min-h-0
        flex-col
        text-black
      "
    >
      {/* =================================================
          BACK
      ================================================= */}

      <button
        type="button"
        onClick={onBack}
        className="
          group
          flex
          w-fit
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
        <span
          className="
            text-xl
            transition-transform
            duration-200
            group-hover:-translate-x-1
          "
        >
          ←
        </span>

        <span>
          {language === "EN"
            ? "Back to Mini Games"
            : "กลับไปหน้า Mini Games"}
        </span>
      </button>

      {/* =================================================
          HEADER
      ================================================= */}

      <header
        className="
          mt-4
          shrink-0
          text-center
        "
      >
        <div
          className="
            mb-2
            text-[10px]
            font-medium
            tracking-[0.2em]
            text-black/35
          "
        >
          ARE_ED&nbsp;&nbsp;//&nbsp;&nbsp;RANDOM BOX
        </div>

        <h1
          className="
            text-4xl
            font-medium
            tracking-[-0.055em]
            text-black
            sm:text-6xl
            md:text-7xl
          "
        >
          {language === "EN"
            ? "What's in the Box?"
            : "ในกล่องมีอะไร?"}
        </h1>

        <p
          className="
            mx-auto
            mt-2
            max-w-xl
            text-sm
            leading-6
            text-black/50
            sm:text-base
          "
        >
          {language === "EN"
            ? "77 possible items. Most of them are completely unnecessary."
            : "ของทั้งหมด 77 อย่าง และส่วนใหญ่ไม่มีประโยชน์อะไรเลย"}
        </p>
      </header>

      {/* =================================================
          GAME
      ================================================= */}

      <section
        className="
          box-game-area
          relative
          mt-4
          min-h-0
          flex-1
          overflow-hidden
          border
          border-black/10
          bg-white/25
          backdrop-blur-sm
        "
      >
        <div className="box-grid" />

        <div className="mini-corners" />

        {/* STATUS */}

        <div
          className="
            absolute
            left-5
            right-5
            top-4
            z-[80]
            flex
            items-center
            justify-between
          "
        >
          <span
            className="
              text-[9px]
              font-medium
              tracking-[0.2em]
              text-black/35
            "
          >
            BOX.EXE
          </span>

          <span
            className="
              text-[9px]
              font-medium
              tracking-[0.2em]
              text-black/35
            "
          >
            {opening
              ? language === "EN"
                ? "OPENING"
                : "กำลังเปิด"
              : result
                ? language === "EN"
                  ? "RESULT"
                  : "ผลลัพธ์"
                : language === "EN"
                  ? "READY"
                  : "พร้อม"}
          </span>
        </div>

        {/* =================================================
            CENTER
        ================================================= */}

        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
          "
        >
          {/* FLOOR */}

          {!result && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="
                absolute
                bottom-[30%]
                left-[18%]
                right-[18%]
                h-px
                bg-black/10
              "
            />
          )}

          {/* =================================================
              BOX
          ================================================= */}

          <AnimatePresence>
            {!result && (
              <motion.div
                initial={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.65,
                  y: 20,
                  filter: "blur(5px)",
                }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  z-30
                  h-[190px]
                  w-[240px]
                  -translate-x-1/2
                  -translate-y-1/2
                "
              >
                {/* BOX BODY */}

                <motion.div
                  animate={
                    opening
                      ? {
                          rotate: [
                            -2,
                            2,
                            -3,
                            3,
                            -2,
                            2,
                            0,
                          ],
                          x: [
                            -2,
                            2,
                            -3,
                            3,
                            -2,
                            2,
                            0,
                          ],
                        }
                      : {
                          rotate: 0,
                          x: 0,
                        }
                  }
                  transition={{
                    duration: 0.65,
                    repeat: opening ? 1 : 0,
                    ease: "easeInOut",
                  }}
                  className="
                    box-body
                    absolute
                    bottom-0
                    left-1/2
                    h-[110px]
                    w-[170px]
                    -translate-x-1/2
                    border
                  "
                >
                  <div
                    className="
                      box-body-inner
                      absolute
                      inset-3
                    "
                  />

                  <div
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      -translate-x-1/2
                      -translate-y-1/2
                      text-[10px]
                      font-medium
                      tracking-[0.3em]
                      text-white/30
                    "
                  >
                    ARE_ED
                  </div>

                  <div
                    className="
                      absolute
                      bottom-3
                      left-4
                      right-4
                      flex
                      justify-between
                      text-[7px]
                      tracking-[0.18em]
                      text-white/20
                    "
                  >
                    <span>BOX.077</span>
                    <span>RNG</span>
                  </div>
                </motion.div>

                {/* BOX LID */}

                <motion.div
                  animate={
                    opening
                      ? {
                          rotateX: -72,
                          y: -34,
                        }
                      : {
                          rotateX: 0,
                          y: 0,
                        }
                  }
                  transition={{
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    transformPerspective: 700,
                    transformOrigin:
                      "bottom center",
                  }}
                  className="
                    box-lid
                    absolute
                    left-1/2
                    top-[42px]
                    z-40
                    h-[35px]
                    w-[182px]
                    -translate-x-1/2
                    border
                  "
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* =================================================
              RESULT OBJECT
          ================================================= */}

          <AnimatePresence mode="wait">
            {result && rarity && (
              <motion.div
                key={`${resultIndex}-${language}`}
                initial={{
                  opacity: 0,
                  scale: 0.2,
                  y: 50,
                  rotate: -12,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  rotate: 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 12,
                }}
                className="
                  relative
                  z-40
                  flex
                  flex-col
                  items-center
                "
              >
                {/* GLOW */}

                <motion.div
                  animate={{
                    scale: [
                      0.85,
                      1.15,
                      0.85,
                    ],
                    opacity: [
                      0.18,
                      0.32,
                      0.18,
                    ],
                  }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    background: rarity.glow,
                  }}
                  className="
                    absolute
                    h-44
                    w-44
                    rounded-full
                    blur-3xl
                  "
                />

                {/* OBJECT */}

                <div
                  className="
                    relative
                    flex
                    h-36
                    w-36
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-full
                    border
                    border-black/5
                    bg-white/65
                    text-8xl
                    shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                    backdrop-blur-md
                  "
                  style={{
                    borderColor:
                      rarity.glow,
                  }}
                >
                  {result.image ? (
                    <img
                      src={result.image}
                      alt={resultName}
                      className="
                        h-full
                        w-full
                        object-cover
                      "
                    />
                  ) : (
                    <span>
                      {result.emoji}
                    </span>
                  )}
                </div>

                {/* RARITY */}

                <div
                  className={`
                    mt-4
                    text-sm
                    font-semibold
                    tracking-[0.08em]
                    ${rarity.text}
                  `}
                >
                  {rarityLabel}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* =================================================
            BUTTON
        ================================================= */}

        <button
          type="button"
          onClick={openBox}
          disabled={opening}
          className="
            mini-primary-button
            absolute
            bottom-5
            left-1/2
            z-[90]
            w-[calc(100%-40px)]
            max-w-[460px]
            -translate-x-1/2
            py-3.5
            text-sm
            font-medium
            sm:bottom-6
            sm:py-4
          "
        >
          <span className="relative z-10">
            {opening
              ? language === "EN"
                ? "OPENING..."
                : "กำลังเปิด..."
              : result
                ? language === "EN"
                  ? "OPEN AGAIN"
                  : "เปิดอีกครั้ง"
                : language === "EN"
                  ? "OPEN THE BOX"
                  : "เปิดกล่อง"}
          </span>

          {!opening && (
            <span className="relative z-10 ml-2">
              →
            </span>
          )}
        </button>
      </section>

      {/* =================================================
          RESULT CARD
      ================================================= */}

      <AnimatePresence mode="wait">
        {result && rarity && (
          <motion.div
            key={`${resultIndex}-card-${language}`}
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.35,
            }}
            className={`
              relative
              mt-3
              shrink-0
              overflow-hidden
              border
              ${rarity.border}
              ${rarity.background}
            `}
            style={{
              boxShadow: `0 18px 55px ${rarity.glow}`,
            }}
          >
            {/* IRIDESCENT */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                opacity-60
                [background:linear-gradient(110deg,transparent_15%,rgba(0,220,255,.08),rgba(170,100,255,.12),rgba(255,150,200,.08),transparent_85%)]
              "
            />

            <div
              className="
                relative
                z-10
                px-5
                py-4
              "
            >
              {/* HEADER */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >
                <span
                  className="
                    text-[10px]
                    font-medium
                    tracking-[0.14em]
                    text-black/45
                  "
                >
                  {language === "EN"
                    ? "YOU GOT"
                    : "คุณได้รับ"}
                </span>

                <span
                  className={`
                    text-sm
                    font-semibold
                    tracking-[0.08em]
                    ${rarity.text}
                  `}
                >
                  {rarityLabel}
                </span>
              </div>

              {/* CONTENT */}

              <div
                className="
                  mt-2
                  flex
                  items-center
                  justify-between
                  gap-4
                "
              >
                <div
                  className="
                    flex
                    min-w-0
                    items-center
                    gap-3
                  "
                >
                  {/* IMAGE */}

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-full
                      bg-white/60
                      text-3xl
                    "
                  >
                    {result.image ? (
                      <img
                        src={result.image}
                        alt={resultName}
                        className="
                          h-full
                          w-full
                          object-cover
                        "
                      />
                    ) : (
                      result.emoji
                    )}
                  </div>

                  <div className="min-w-0">
                    <h2
                      className="
                        text-lg
                        font-medium
                        tracking-[-0.025em]
                        text-black
                        sm:text-xl
                      "
                    >
                      {resultName}
                    </h2>

                    <p
                      className="
                        mt-0.5
                        text-sm
                        leading-6
                        text-black/55
                      "
                    >
                      {resultDescription}
                    </p>
                  </div>
                </div>

                {/* VALUE */}

                <div
                  className="
                    shrink-0
                    text-right
                  "
                >
                  <div
                    className="
                      text-[9px]
                      font-medium
                      tracking-[0.12em]
                      text-black/40
                    "
                  >
                    {language === "EN"
                      ? "VALUE"
                      : "มูลค่า"}
                  </div>

                  <div
                    className="
                      mt-1
                      text-sm
                      font-semibold
                      text-black
                      sm:text-base
                    "
                  >
                    {resultValue}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}