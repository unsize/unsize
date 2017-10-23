export default function isFormFilled() {
  let form = document.getElementsByTagName('form')[0].getElementsByTagName('input');
  for (var i = 0; i < form.length; i++) {
    if (form[i].required && form[i].value.trim() === "") {
      return false;
    }
  }
  return true;
}
