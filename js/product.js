// ============ Ｓ1 right 點擊後轉盤向左旋轉並更換背景色,主照片 ===========
function rotateLeft() {
  const turntable = document.getElementById("turntable")
  const computedStyle = window.getComputedStyle(turntable);
  const transformValue = computedStyle.getPropertyValue("transform");
  const values = transformValue.split('(')[1].split(')')[0].split(',')
  var angle = Math.round(Math.atan2(values[1], values[0]) * (180 / Math.PI));
  angle -= 30;


  // 旋轉轉盤
  turntable.style.transform = "rotate(" + (angle) + "deg)";


  // 更換背景色
  const section1 = document.getElementById('product_section1');
  if (Math.abs(angle) % 120 === 30) {
    section1.style.backgroundColor = "#FFE9DE"; //紅
  } else if (Math.abs(angle) % 120 === 60) {
    section1.style.backgroundColor = "#EAE7FF"; //紫
  } else if (Math.abs(angle) % 120 === 90) {
    section1.style.backgroundColor = "#FFF9DE"; //黃
  } else if (Math.abs(angle) % 120 === 0) {
    section1.style.backgroundColor = "#F5FFDE"; //綠
  }


  //更換主照片z-index屬性
  const yellowSvg = document.getElementById('yellowSvg');
  const purpleSvg = document.getElementById('purpleSvg');
  const redSvg = document.getElementById('redSvg');
  const greenSvg = document.getElementById('greenSvg');

  redSvg.style.zIndex = Math.abs(angle) % 120 === 30 ? "1" : "0";
  purpleSvg.style.zIndex = Math.abs(angle) % 120 === 60 ? "1" : "0";
  yellowSvg.style.zIndex = Math.abs(angle) % 120 === 90 ? "1" : "0";
  greenSvg.style.zIndex = Math.abs(angle) % 120 === 0 ? "1" : "0";


  //更換產品說明z-index屬性
  const yellowContent = document.getElementById('yellowContent');
  const purpleContent = document.getElementById('purpleContent');
  const redContent = document.getElementById('redContent');
  const greenContent = document.getElementById('greenContent');

  redContent.style.zIndex = Math.abs(angle) % 120 === 30 ? "2" : "0";
  purpleContent.style.zIndex = Math.abs(angle) % 120 === 60 ? "2" : "0";
  yellowContent.style.zIndex = Math.abs(angle) % 120 === 90 ? "2" : "0";
  greenContent.style.zIndex = Math.abs(angle) % 120 === 0 ? "2" : "0";


  //動畫中禁用按鈕
  if (!turntable.classList.contains("rotating")) {
    turntable.classList.add("rotating");
    const rotateButton = document.getElementById("rotateLeft");
    rotateButton.disabled = true;
    turntable.addEventListener("transitionend", function () {
      turntable.classList.remove("rotating");
      rotateButton.disabled = false;
      turntable.style.transition = ""
    });
  }
}


// ============ S1 right 點擊後轉盤向右旋轉 並更換背景色,主照片 ===========
function rotateRight() {
  const turntable = document.getElementById("turntable")
  const computedStyle = window.getComputedStyle(turntable);
  const transformValue = computedStyle.getPropertyValue("transform");
  const values = transformValue.split('(')[1].split(')')[0].split(',')
  var angle = Math.round(Math.atan2(values[1], values[0]) * (180 / Math.PI));
  angle += 30;


  // 旋轉轉盤
  turntable.style.transform = "rotate(" + (angle) + "deg)";


  // 更換背景色
  const section1 = document.getElementById('product_section1');
  if (angle % 120 === 30) {
    section1.style.backgroundColor = "#FFF9DE"; //黃
  } else if (angle % 120 === 60) {
    section1.style.backgroundColor = "#EAE7FF"; //紫
  } else if (angle % 120 === 90) {
    section1.style.backgroundColor = "#FFE9DE"; //紅
  } else if (angle % 120 === 0) {
    section1.style.backgroundColor = "#F5FFDE"; //綠
  }


  //更換主照片z-index屬性
  const yellowSvg = document.getElementById('yellowSvg');
  const purpleSvg = document.getElementById('purpleSvg');
  const redSvg = document.getElementById('redSvg');
  const greenSvg = document.getElementById('greenSvg');

  yellowSvg.style.zIndex = angle % 120 === 30 ? "1" : "0";
  purpleSvg.style.zIndex = angle % 120 === 60 ? "1" : "0";
  redSvg.style.zIndex = angle % 120 === 90 ? "1" : "0";
  greenSvg.style.zIndex = angle % 120 === 0 ? "1" : "0";


  //更換產品說明z-index屬性
  const yellowContent = document.getElementById('yellowContent');
  const purpleContent = document.getElementById('purpleContent');
  const redContent = document.getElementById('redContent');
  const greenContent = document.getElementById('greenContent');

  yellowContent.style.zIndex = angle % 120 === 30 ? "2" : "0";
  purpleContent.style.zIndex = angle % 120 === 60 ? "2" : "0";
  redContent.style.zIndex = angle % 120 === 90 ? "2" : "0";
  greenContent.style.zIndex = angle % 120 === 0 ? "2" : "0";


  //動畫中禁用按鈕
  if (!turntable.classList.contains("rotating")) {
    turntable.classList.add("rotating");
    const rotateButton = document.getElementById("rotateRight");
    rotateButton.disabled = true;
    turntable.addEventListener("transitionend", function () {
      turntable.classList.remove("rotating");
      rotateButton.disabled = false;
      turntable.style.transition = ""
    });
  }
}


// ============ S1 Left 點擊後計算金額 ===========
//紅色
function plusRed() {
  let price = 70;
  const numberElement = document.getElementById("numberRed");
  const currentNum = parseInt(numberElement.textContent) + 1;
  numberElement.textContent = currentNum;
  const amountElement = document.getElementById("amountRed");
  amountElement.textContent = currentNum * price;
  if (currentNum > 1) {
    const clearElement = document.getElementById("clearRed");
    clearElement.style.position = "static";
    clearElement.style.zIndex = "0";
  }
};

function minusRed() {
  let price = 70;
  const numberElement = document.getElementById("numberRed");
  const currentNum = parseInt(numberElement.textContent) - 1;
  if (currentNum > 1) {
    numberElement.textContent = currentNum;
    const amountElement = document.getElementById("amountRed");
    amountElement.textContent = currentNum * price;
    const clearElement = document.getElementById("clearRed");
    clearElement.style.position = "static";
    clearElement.style.zIndex = "0";
  } else if (currentNum === 1) {
    numberElement.textContent = currentNum;
    const amountElement = document.getElementById("amountRed");
    amountElement.textContent = currentNum * price;
    const clearElement = document.getElementById("clearRed");
    clearElement.style.position = "absolute";
    clearElement.style.zIndex = "-1";
  }
};

function clearRed() {
  let price = 75;
  let currentNum = 1;
  const numberElement = document.getElementById("numberRed");
  numberElement.textContent = currentNum;
  const amountElement = document.getElementById("amountRed");
  amountElement.textContent = currentNum * price;
  const clearElement = document.getElementById("clearRed");
  clearElement.style.position = "absolute";
  clearElement.style.zIndex = "-1";
};

// 紫色
function plusPurple() {
  let price = 90;
  const numberElement = document.getElementById("numberPurple");
  const currentNum = parseInt(numberElement.textContent) + 1;
  numberElement.textContent = currentNum;
  const amountElement = document.getElementById("amountPurple");
  amountElement.textContent = currentNum * price;
  if (currentNum > 1) {
    const clearElement = document.getElementById("clearPurple");
    clearElement.style.position = "static";
    clearElement.style.zIndex = "0";
  }
};

function minusPurple() {
  let price = 90;
  const numberElement = document.getElementById("numberPurple");
  const currentNum = parseInt(numberElement.textContent) - 1;
  if (currentNum > 1) {
    numberElement.textContent = currentNum;
    const amountElement = document.getElementById("amountPurple");
    amountElement.textContent = currentNum * price;
    const clearElement = document.getElementById("clearPurplr");
    clearElement.style.position = "static";
    clearElement.style.zIndex = "0";
  } else if (currentNum === 1) {
    numberElement.textContent = currentNum;
    const amountElement = document.getElementById("amountPurple");
    amountElement.textContent = currentNum * price;
    const clearElement = document.getElementById("clearPurple");
    clearElement.style.position = "absolute";
    clearElement.style.zIndex = "-1";
  }
};

function clearPurple() {
  let price = 90;
  let currentNum = 1;
  const numberElement = document.getElementById("numberPurple");
  numberElement.textContent = currentNum;
  const amountElement = document.getElementById("amountPurple");
  amountElement.textContent = currentNum * price;
  const clearElement = document.getElementById("clearPurple");
  clearElement.style.position = "absolute";
  clearElement.style.zIndex = "-1";
};

//黃色
function plusYellow() {
  let price = 65;
  const numberElement = document.getElementById("numberYellow");
  const currentNum = parseInt(numberElement.textContent) + 1;
  numberElement.textContent = currentNum;
  const amountElement = document.getElementById("amountYellow");
  amountElement.textContent = currentNum * price;
  if (currentNum > 1) {
    const clearElement = document.getElementById("clearYellow");
    clearElement.style.position = "static";
    clearElement.style.zIndex = "0";
  }
};

function minusYellow() {
  let price = 65;
  const numberElement = document.getElementById("numberYellow");
  const currentNum = parseInt(numberElement.textContent) - 1;
  if (currentNum > 1) {
    numberElement.textContent = currentNum;
    const amountElement = document.getElementById("amountYellow");
    amountElement.textContent = currentNum * price;
    const clearElement = document.getElementById("clearYellow");
    clearElement.style.position = "static";
    clearElement.style.zIndex = "0";
  } else if (currentNum === 1) {
    numberElement.textContent = currentNum;
    const amountElement = document.getElementById("amountYellow");
    amountElement.textContent = currentNum * price;
    const clearElement = document.getElementById("clearYellow");
    clearElement.style.position = "absolute";
    clearElement.style.zIndex = "-1";
  }
};

function clearYellow() {
  let price = 65;
  let currentNum = 1;
  const numberElement = document.getElementById("numberYellow");
  numberElement.textContent = currentNum;
  const amountElement = document.getElementById("amountYellow");
  amountElement.textContent = currentNum * price;
  const clearElement = document.getElementById("clearYellow");
  clearElement.style.position = "absolute";
  clearElement.style.zIndex = "-1";
};

// 綠色
function plusGreen() {
  let price = 50;
  const numberElement = document.getElementById("numberGreen");
  const currentNum = parseInt(numberElement.textContent) + 1;
  numberElement.textContent = currentNum;
  const amountElement = document.getElementById("amountGreen");
  amountElement.textContent = currentNum * price;
  if (currentNum > 1) {
    const clearElement = document.getElementById("clearGreen");
    clearElement.style.position = "static";
    clearElement.style.zIndex = "0";
  }
};

function minusGreen() {
  let price = 50;
  const numberElement = document.getElementById("numberGreen");
  const currentNum = parseInt(numberElement.textContent) - 1;
  if (currentNum > 1) {
    numberElement.textContent = currentNum;
    const amountElement = document.getElementById("amountGreen");
    amountElement.textContent = currentNum * price;
    const clearElement = document.getElementById("clearGreen");
    clearElement.style.position = "static";
    clearElement.style.zIndex = "0";
  } else if (currentNum === 1) {
    numberElement.textContent = currentNum;
    const amountElement = document.getElementById("amountGreen");
    amountElement.textContent = currentNum * price;
    const clearElement = document.getElementById("clearGreen");
    clearElement.style.position = "absolute";
    clearElement.style.zIndex = "-1";
  }
};

function clearGreen() {
  let price = 50;
  let currentNum = 1;
  const numberElement = document.getElementById("numberGreen");
  numberElement.textContent = currentNum;
  const amountElement = document.getElementById("amountGreen");
  amountElement.textContent = currentNum * price;
  const clearElement = document.getElementById("clearGreen");
  clearElement.style.position = "absolute";
  clearElement.style.zIndex = "-1";
};