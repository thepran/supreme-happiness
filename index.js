const readMoreEl = document.querySelectorAll(".less-more");
const popUp = document.querySelector(".pop-up");
const buttons = document.querySelectorAll("button");
const registerDivEl = document.querySelector(".register");
const phone = document.querySelector(".phone-no input[type='text']");
const validateButton = document.querySelector("form button");
const closePopUpEl = document.querySelector(".close");
const faqQues = document.querySelectorAll(".ques");

readMoreEl.forEach((btn) => btn.addEventListener("click", toggleHiddenContent));

popUp.addEventListener("click", closePopUp);

buttons.forEach((btn) => btn.addEventListener("click", showPopUp));

validateButton.addEventListener("click", validate);

closePopUpEl.addEventListener("click", closePopUp);

faqQues.forEach((ques) => ques.addEventListener("click", toggleAnswer));

/* *********Funtions to Hide/Show PopUp window****************** */
function closePopUp(e) {
  if (!registerDivEl.contains(e.target) || closePopUpEl.contains(e.target))
    popUp.classList.add("hidden");
}
function showPopUp() {
  popUp.classList.remove("hidden");
}
/*********************************************************************** */

/****************Function to Validate Form************** */
function validate(e) {
  e.preventDefault();
  if (!phone.value)
    this.parentElement.querySelector(".error-text").textContent =
      "Phone is required";
  else if (!/^\d{10}$/.test(phone.value))
    this.parentElement.querySelector(".error-text").textContent =
      "Invalid phone number";
  else {
    this.parentElement.querySelector(".error-text").textContent = "";
    document.querySelector("form").submit();
  }
}
/*************************************************************** */

/**Funtion to Toggle More/Less************** */
function toggleHiddenContent() {
  const toggleContent = this.parentElement.querySelector(".more");
  const dots = this.parentElement.querySelector(".dots");
  toggleContent.classList.toggle("hidden");
  this.textContent = toggleContent.classList.contains("hidden")
    ? "Read more"
    : "Read less";
  dots.classList.toggle("hidden");
}
/******************************************** */

/**Function to Toggle FAQS***** */
function toggleAnswer() {
  const ans = document.querySelectorAll(".ans");
  ans.forEach((ans) => {
    if (this.parentElement.querySelector(".ans") !== ans)
      ans.classList.add("hidden");
  });
  this.parentElement.querySelector(".ans").classList.toggle("hidden");
}
