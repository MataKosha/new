document.getElementById("whatsappButton").addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const quantity = document.getElementById("quantity").value;

  if (!name || !phone || !quantity) {
    alert("Пожалуйста, заполните все поля!");
    return;
  }

  const message = `Здравствуйте! Меня зовут ${name}. Я хочу заказать ${quantity} кг свинины. Мой телефон: ${phone}. Город: Атбасар.`;
  const whatsappUrl = `https://wa.me/77474941621?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappUrl, "_blank");
});
