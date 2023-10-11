// ============ Card 點擊後計算數量並加入購物車 當數量為零不能點擊減號 ===========
//綠色
function plusGreen() {
  const numberElement = document.getElementById("quantityGreen");
  const currentNum = parseInt(numberElement.textContent) + 1;
  numberElement.textContent = currentNum;
  if (currentNum === 1) {
    const lightMinusElement = document.getElementById("lightMinusGreen");
    lightMinusElement.style.zIndex = "-1";
    add_to_cart("listGreen", "菜菜寶寶蔬菜包", "香菇、黑木耳、海帶、青江菜、蚵仔白菜、玉米筍、小黃瓜、絲瓜、馬鈴薯、白蘿蔔", "cartMoneyGreen", 50, "cartNumberGreen", 1)
    total()
  } else if (currentNum > 1) {
    const lightMinusElement = document.getElementById("lightMinusGreen");
    lightMinusElement.style.zIndex = "-1"
    const cartNumberElement = document.getElementById("cartNumberGreen");
    cartNumberElement.textContent = currentNum;
    const cartMoneyElement = document.getElementById("cartMoneyGreen");
    cartMoneyElement.textContent = currentNum * 50;
    total()
  }
};

function minusGreen() {
  const numberElement = document.getElementById("quantityGreen");
  const currentNum = parseInt(numberElement.textContent) - 1;
  if (currentNum > 0) {
    numberElement.textContent = currentNum;
    const lightMinusElement = document.getElementById("lightMinusGreen");
    lightMinusElement.style.zIndex = "-1";
    const cartNumberElement = document.getElementById("cartNumberGreen");
    cartNumberElement.textContent = currentNum;
    const cartMoneyElement = document.getElementById("cartMoneyGreen");
    cartMoneyElement.textContent = currentNum * 50;
    total()
  } else if (currentNum === 0) {
    numberElement.textContent = currentNum;
    const lightMinusElement = document.getElementById("lightMinusGreen");
    lightMinusElement.style.zIndex = "0";
    const listIdElement = document.getElementById("listGreen");
    listIdElement.remove()
    total()
  }
};

//紫色
function plusPurple() {
  const numberElement = document.getElementById("quantityPurple");
  const currentNum = parseInt(numberElement.textContent) + 1;
  numberElement.textContent = currentNum;
  if (currentNum === 1) {
    const lightMinusElement = document.getElementById("lightMinusPurple");
    lightMinusElement.style.zIndex = "-1";
    add_to_cart("listPurple", "茄子寶寶蔬菜包", "猴頭菇、茄子、冬瓜、秋葵、蘆筍、牛蒡、青椒、苦瓜、洋蔥、龍鬚菜", "cartMoneyPurple", 90, "cartNumberPurple", 1)
    total()
  } else if (currentNum > 1) {
    const lightMinusElement = document.getElementById("lightMinusPurple");
    lightMinusElement.style.zIndex = "-1"
    const cartNumberElement = document.getElementById("cartNumberPurple");
    cartNumberElement.textContent = currentNum;
    const cartMoneyElement = document.getElementById("cartMoneyPurple");
    cartMoneyElement.textContent = currentNum * 90;
    total()
  }
};

function minusPurple() {
  const numberElement = document.getElementById("quantityPurple");
  const currentNum = parseInt(numberElement.textContent) - 1;
  if (currentNum > 0) {
    numberElement.textContent = currentNum;
    const lightMinusElement = document.getElementById("lightMinusPurple");
    lightMinusElement.style.zIndex = "-1";
    const cartNumberElement = document.getElementById("cartNumberPurple");
    cartNumberElement.textContent = currentNum;
    const cartMoneyElement = document.getElementById("cartMoneyPurple");
    cartMoneyElement.textContent = currentNum * 90;
    total()
  } else if (currentNum === 0) {
    numberElement.textContent = currentNum;
    const lightMinusElement = document.getElementById("lightMinusPurple");
    lightMinusElement.style.zIndex = "0";
    const listIdElement = document.getElementById("listPurple");
    listIdElement.remove()
    total()
  }
};

//黃色
function plusYellow() {
  const numberElement = document.getElementById("quantityYellow");
  const currentNum = parseInt(numberElement.textContent) + 1;
  numberElement.textContent = currentNum;
  if (currentNum === 1) {
    const lightMinusElement = document.getElementById("lightMinusYellow");
    lightMinusElement.style.zIndex = "-1";
    add_to_cart("listYellow", "玉米寶寶蔬菜包", "小白菜、萵苣、玉米、毛豆、白花椰菜、南瓜、地瓜、金針菇、娃娃菜、水蓮", "cartMoneyYellow", 65, "cartNumberYellow", 1)
    total()
  } else if (currentNum > 1) {
    const lightMinusElement = document.getElementById("lightMinusYellow");
    lightMinusElement.style.zIndex = "-1"
    const cartNumberElement = document.getElementById("cartNumberYellow");
    cartNumberElement.textContent = currentNum;
    const cartMoneyElement = document.getElementById("cartMoneyYellow");
    cartMoneyElement.textContent = currentNum * 65;
    total()
  }
};

function minusYellow() {
  const numberElement = document.getElementById("quantityYellow");
  const currentNum = parseInt(numberElement.textContent) - 1;
  if (currentNum > 0) {
    numberElement.textContent = currentNum;
    const lightMinusElement = document.getElementById("lightMinusYellow");
    lightMinusElement.style.zIndex = "-1";
    const cartNumberElement = document.getElementById("cartNumberYellow");
    cartNumberElement.textContent = currentNum;
    const cartMoneyElement = document.getElementById("cartMoneyYellow");
    cartMoneyElement.textContent = currentNum * 65;
    total()
  } else if (currentNum === 0) {
    numberElement.textContent = currentNum;
    const lightMinusElement = document.getElementById("lightMinusYellow");
    lightMinusElement.style.zIndex = "0";
    const listIdElement = document.getElementById("listYellow");
    listIdElement.remove()
    total()
  }
};

//紅色
function plusRed() {
  const numberElement = document.getElementById("quantityRed");
  const currentNum = parseInt(numberElement.textContent) + 1;
  numberElement.textContent = currentNum;
  if (currentNum === 1) {
    const lightMinusElement = document.getElementById("lightMinusRed");
    lightMinusElement.style.zIndex = "-1";
    add_to_cart("listRed", "番茄寶寶蔬菜包", "高麗菜、菠菜、杏鮑菇、番茄、胡蘿蔔、櫛瓜、綠花椰菜、甜菜根、韭菜、竹筍", "cartMoneyRed", 70, "cartNumberRed", 1)
    total()
  } else if (currentNum > 1) {
    const lightMinusElement = document.getElementById("lightMinusRed");
    lightMinusElement.style.zIndex = "-1"
    const cartNumberElement = document.getElementById("cartNumberRed");
    cartNumberElement.textContent = currentNum;
    const cartMoneyElement = document.getElementById("cartMoneyRed");
    cartMoneyElement.textContent = currentNum * 70;
    total()
  }
};

function minusRed() {
  const numberElement = document.getElementById("quantityRed");
  const currentNum = parseInt(numberElement.textContent) - 1;
  if (currentNum > 0) {
    numberElement.textContent = currentNum;
    const lightMinusElement = document.getElementById("lightMinusRed");
    lightMinusElement.style.zIndex = "-1";
    const cartNumberElement = document.getElementById("cartNumberRed");
    cartNumberElement.textContent = currentNum;
    const cartMoneyElement = document.getElementById("cartMoneyRed");
    cartMoneyElement.textContent = currentNum * 70;
    total()
  } else if (currentNum === 0) {
    numberElement.textContent = currentNum;
    const lightMinusElement = document.getElementById("lightMinusRed");
    lightMinusElement.style.zIndex = "0";
    const listIdElement = document.getElementById("listRed");
    listIdElement.remove()
    total()
  }
};

// ======================= Remove Cart list ======================

function remove_cart_list(list_id) {
  switch (list_id.id) {
    case 'listGreen':
      const listGreenElement = document.getElementById("listGreen");
      listGreenElement.remove()
      const numberGreenElement = document.getElementById("quantityGreen");
      numberGreenElement.textContent = 0;
      const lightMinusGreenElement = document.getElementById("lightMinusGreen");
      lightMinusGreenElement.style.zIndex = "0";
      total()
      break

    case 'listPurple':
      const listPurpleElement = document.getElementById("listPurple");
      listPurpleElement.remove()
      const numberPurpleElement = document.getElementById("quantityPurple");
      numberPurpleElement.textContent = 0;
      const lightMinusPurpleElement = document.getElementById("lightMinusPurple");
      lightMinusPurpleElement.style.zIndex = "0";
      total()
      break

    case 'listYellow':
      const listYellowElement = document.getElementById("listYellow");
      listYellowElement.remove()
      const numberYellowElement = document.getElementById("quantityYellow");
      numberYellowElement.textContent = 0;
      const lightMinusYellowElement = document.getElementById("lightMinusYellow");
      lightMinusYellowElement.style.zIndex = "0";
      total()
      break

    case 'listRed':
      const listRedElement = document.getElementById("listRed");
      listRedElement.remove()
      const numberRedElement = document.getElementById("quantityRed");
      numberRedElement.textContent = 0;
      const lightMinusRedElement = document.getElementById("lightMinusRed");
      lightMinusRedElement.style.zIndex = "0";
      total()
      break
  }
};

// ======================= Minus and plus in Cart list ======================

function minus_cart_list(list_id) {
  switch (list_id.id) {
    case 'listGreen':
      minusGreen()
      break

    case 'listPurple':
      minusPurple()
      break

    case 'listYellow':
      minusYellow()
      break

    case 'listRed':
      minusRed()
      break
  }
};

function plus_cart_list(list_id) {
  switch (list_id.id) {
    case 'listGreen':
      plusGreen()
      break

    case 'listPurple':
      plusPurple()
      break

    case 'listYellow':
      plusYellow()
      break

    case 'listRed':
      plusRed()
      break
  }
};

// ======================= Cart List Header count  ================

function total() {
  const totalPack = document.getElementById("totalPack");
  const quantityGreenElement = document.getElementById("quantityGreen");
  const quantityPurpleElement = document.getElementById("quantityPurple");
  const quantityYellowElement = document.getElementById("quantityYellow");
  const quantityRedElement = document.getElementById("quantityRed");
  totalPack.textContent = parseInt(quantityGreenElement.textContent) + parseInt(quantityPurpleElement.textContent) + parseInt(quantityYellowElement.textContent) + parseInt(quantityRedElement.textContent);
  const totalPrice = document.getElementById("totalPrice");
  totalPrice.textContent = (parseInt(quantityGreenElement.textContent) * 50) + (parseInt(quantityPurpleElement.textContent) * 90) + (parseInt(quantityYellowElement.textContent) * 65) + (parseInt(quantityRedElement.textContent) * 70);
};



// ======================= Cart list Content ======================

function add_to_cart(list_id, product_name, product_detail, money_id, product_money, number_id, number) {
  let li_str = `<div class="list" id="${list_id}">
                  <div class="list_left">
                    <p>${product_name}</p><br>
                    <span>${product_detail}</span>
                  </div>
                  <div class="list_right">
                    <div>
                      <button class="fa fa-clear" onclick="remove_cart_list(${list_id})">
                        <img src="./images/icon_black_clear.svg" alt="清除按鈕">
                      </button>
                    </div>
                    <div>
                      <span class="price" id="${money_id}">${product_money}</span><span class="price_text">元</span>
                    </div>
                    <div class="quantity_frame">
                      <button class="fa fa-minus" onclick="minus_cart_list(${list_id})">
                        <img src="./images/icon_black_minus.svg" alt="減號按鈕">
                      </button>
                      <span class="quantity" id="${number_id}">${number}</span>
                      <button class="fa fa-plus" onclick="plus_cart_list(${list_id})">
                        <img src="./images/icon_black_plus.svg" alt="加號按鈕">
                      </button>
                    </div>
                  </div>
                </div>`;
  $('.cart_list').prepend(li_str);
}


//側邊購物車 

$(document).ready(function () {
  // 按按鈕打開選單
  $('.cartbtn').click(function () {
    $('body').addClass('opencart');
    $('header').addClass('blurcart');
    $('.container').addClass('blurcart');
    $('.hidecart').addClass('blurcart');
  });
  // 按Ｘ關閉選單
  $('.closecart').click(function (event) {
    $('body').removeClass('opencart');
    $('header').removeClass('blurcart');
    $('.container').removeClass('blurcart');
    $('.hidecart').removeClass('blurcart');
  });

  // 按旁邊畫面關掉選單

  $('header').click(function (event) {
    $('body').removeClass('opencart');
    $('header').removeClass('blurcart');
    $('.container').removeClass('blurcart');
    $('.hidecart').removeClass('blurcart');
  });

  $('.container').click(function (event) {
    $('body').removeClass('opencart');
    $('header').removeClass('blurcart');
    $('.container').removeClass('blurcart');
    $('.hidecart').removeClass('blurcart');
  });
});