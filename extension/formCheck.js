export default function isFormFilled(form) {
  let formInputs = form.getElementsByTagName('input');
  for (var i = 0; i < formInputs.length; i++) {
    if (formInputs[i].required && formInputs[i].value.trim() === "") {
      return false;
    }
  }
  return true;
}
