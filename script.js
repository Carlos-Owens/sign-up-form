const form = document.getElementById("my-form");
const firstName = document.getElementById('first-Name');
const lastName = document.getElementById('last-Name');
const email = document.getElementById('email');
const telephone = document.getElementById('telephone');
const password = document.getElementById("password");
const passCon = document.getElementById("passCon");


form.addEventListener("submit", e => {
    e.preventDefault();
    validateInputs();
});



const setError = (element, message) => {
  const input = element.parentElement;
  const errorDisplay = input.querySelector(".error");
  
  errorDisplay.textContent = message
  input.classList.add("error");
  input.classList.remove("valid");
}

const setValid = element => {
  const input = element.parentElement;
  const errorDisplay = input.querySelector(".error");
  
 errorDisplay.innerText = '';
  input.classList.add("valid");
  input.classList.remove("error");
}

const isFirstNameValid = (firstName) => {
  const myRegex = /^[a-zA-z]{4,20}$/;
  return myRegex.test(String(firstName).toLowerCase());
}

const isLastNameValid = (lastName) => {
  const myRegex = /^[a-zA-z]{4,20}$/;
  return myRegex.test(String(lastName).toLowerCase());
}

const isEmailValid = (email) => {
  const myRegex = /^\w+\W*(\.)*\w+(\.)*(@)[a-zA-z]+(\.com|\.uk)$/;
  return myRegex.test(String(email));
}

const isTelephoneValid = (telephone) => {
  const myRegex = /^(1)?\s?((\(\d{3}\)|\d{3})[-]?\s?\d{3}\s?[-]?\d{4})$/
  return myRegex.test(String(telephone));
}

const isPassValid = (password) => {
  const myRegex = /^(\w|.){8,20}$/;
  return myRegex.test(String(password).toLowerCase());
}
const validateInputs = () => {
  const firstNameValue = firstName.value;
  const lastNameValue = lastName.value;
  const emailValue = email.value;
  const telephoneValue = telephone.value
  const passValue = password.value;
  const passConValue = passCon.value;
  
  if(firstNameValue === "") {
    setError(firstName, "*Name required");
  }
  else if(!isFirstNameValid(firstNameValue)) {
    setError(firstName, "*Not a valid name");
  } else {
    setValid(firstName);
  }
  
  if(lastNameValue === "") {
    setError(lastName, "*Name required");
  }
  else if(!isLastNameValid(lastNameValue)) {
    setError(lastName, "*Not a valid name");
  } else {
    setValid(lastName);
  }
  
  if(emailValue === "") {
    setError(email, "*Email required");
  }
  else if(!isEmailValid(emailValue)) {
    setError(email, "*Not a valid email");
  } else {
    setValid(email);
  }
  
  if(telephoneValue === "") {
    setError(telephone, "*Number required");
  }
  else if(!isTelephoneValid(telephoneValue)) {
    setError(telephone, "*Not a valid number")
  } else {
    setValid(telephone);
  }
  
  if(passValue === "") {
    setError(password, "*Password required");
  }
  else if(!isPassValid(passValue)) {
    setError(password, "*Not a valid password");
  } else {
    setValid(password);
  }
  
  if(passConValue === "") {
    setError(passCon, "*Password required");
  }
  else if (passConValue !== passValue) {
    setError(passCon, "*Password does not match")
  } else {
    setValid(passCon);
  }
}