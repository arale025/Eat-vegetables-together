// ============ 滑動到Ｓ2一半顯示導覽列 ===========
window.addEventListener("scroll", () => {
  const header = document.querySelector(".nav");
  const section = document.querySelector(".homepage_section2");
  if (window.scrollY > section.offsetHeight / 2) {
    header.style.top = "0";
  } else {
    header.style.top = "-70px";
  }
});