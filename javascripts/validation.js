function emailValidation() {
  const form = document.getElementById("form");
  const emailConfirmedField = document.getElementById("email_confirm");
  const element = document.createElement("p");
  const message = document.createTextNode("L’e-mail ne correspond pas");
  element.appendChild(message);
  element.setAttribute("id", "alert");
  const content_field = document.getElementById("content_field");
  emailConfirmedField.addEventListener("input", (e) => {
    e.preventDefault();
    if (form.email.value !== form.email_confirm.value) {
      element.style.color = "#d14539";
      if (!document.getElementById("alert")) {
        content_field.parentNode.insertBefore(element, content_field);
        emailConfirmedField.classList.add("alert_bg");
      } else {
        emailConfirmedField.classList.remove("alert_bg");
        element.parentNode.removeChild(element);
      }
    }
  });
}
window.onload = emailValidation;
