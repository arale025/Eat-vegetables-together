function drawAndShow() {
  const itemList = [
    "小白菜", //0
    "水蓮", //1
    "白花椰菜", //2
    "青江菜", //3
    "娃娃菜", //4
    "韭菜", //5
    "高麗菜", //6
    "萵苣", //7
    "菠菜", //8
    "蚵仔白菜", //9
    "綠花椰菜", //10
    "龍鬚菜", //11
    "牛蒡", //12
    "玉米", //13
    "白蘿蔔", //14
    "地瓜", //15
    "竹筍", //16
    "洋蔥", //17
    "胡蘿蔔", //18
    "馬鈴薯", //19
    "甜菜根", //20
    "蘆筍", //21
    "木耳", //22
    "杏鮑菇", //23
    "金針菇", //24
    "香菇", //25
    "猴頭菇", //26
    "小黃瓜", //27
    "冬瓜", //28
    "青椒", //29
    "南瓜", //30
    "秋葵", //31
    "苦瓜", //32
    "茄子", //33
    "番茄", //34
    "絲瓜", //35
    "櫛瓜", //36
    "毛豆", //37
    "玉米筍", //38
    "海帶" //39
  ];
  const returnValue = draw();
  let checkboxes = document.querySelectorAll(`input[type="checkbox"]`)

  // 如果即將傳入的 6 種蔬菜跟當前 6 種蔬菜有任一重複，則再取一次隨機數
  for (let j = 0; j < checkboxes.length; j++) {
    let key = document.getElementById("array" + j)
    for (let i = 0; i < checkboxes.length; i++) {
      if (key.textContent === itemList[returnValue[i]]) {
        drawAndShow()
        return;
      }
    }
  }

  //如果鎖頭沒有被鎖住，傳入新的值
  for (let k = 0; k < checkboxes.length; k++) {
    let input = document.getElementById("array" + k)
    if (!checkboxes[k].checked) {
      input.textContent = itemList[returnValue[k]];
    }
  }
}

// 打散陣列 [0-39] 取 6 個不重複隨機數組成陣列
function draw() {
  const cards = Array(39).fill().map((_, i) => i + 1);
  cards.push(0)
  // console.log(cards)
  for (let i = 40 - 1; i >= 0; i--) {
    let rand = Math.floor((i + 1) * Math.random());
    [cards[rand], cards[i]] = [cards[i], cards[rand]];
  }
  // console.log(cards.slice(0, 6))
  return cards.slice(0, 6);
}