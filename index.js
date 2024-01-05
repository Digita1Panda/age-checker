const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const result = document.getElementById("result");

let age;

mySubmit.onclick = function () {
  age = myText.value;
  age = Number(age);
  if (age >= 18) {
    result.textContent = `Welcome, you are old enough to enter this site.`;
  } else {
    result.textContent = `Sorry, you are not old enough to enter this site.`;
  }
};
