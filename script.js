const LINE_RESERVATION_URL = "https://lin.ee/rPsSsSg";
const lineButtons = document.querySelectorAll(".line-button");

lineButtons.forEach((button) => {
  if (LINE_RESERVATION_URL) {
    button.href = LINE_RESERVATION_URL;
    button.dataset.lineUrl = LINE_RESERVATION_URL;
  }

  button.addEventListener("click", (event) => {
    const lineUrl = button.dataset.lineUrl;

    if (!lineUrl) {
      event.preventDefault();
      alert("LINE予約URLを設定すると、このボタンから直接予約できます。お急ぎの方は電話でご相談ください。");
      return;
    }

    button.setAttribute("href", lineUrl);
  });
});
