function validateInput () {
  var subject = document.getElementById("subject");
  var email = document.getElementById("email");
  var content = document.getElementById("content");
  subject.className = "";
  email.className = "";
  content.className = "";

  if (!subject.value) {
    subject.className = "required";
  }
  if (!email.value) {
    email.className = "required";
  }
  if (!content.value) {
    content.className = "required"
  }
}
