function check(obj) {

  let checkboxes = document.querySelectorAll(`input[type="checkbox"]`)
  let num = 0;
  for (let j = 0; j < checkboxes.length; j++) {
    if (checkboxes[j].checked) {
      num = num + 1;
    }
    if (num > 10) {
      obj.checked = false;
      alert("最多選擇 10 種蔬菜！");
      num--;
    }
  }

  const checkednumber = document.getElementById("checkednumber");
  const checkedprice = document.getElementById("checkedprice");
  checkednumber.textContent = num;
  checkedprice.textContent = num * 10;
}