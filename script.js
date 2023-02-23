function checkBirthday() {
  let name = document.getElementById("name").value;
  let birthday = new Date(document.getElementById("birthday").value);
  let today = new Date();
  let birthdayThisYear = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());

  if (birthdayThisYear.getTime() === today.getTime()) {
    document.getElementById("message").innerHTML = "Hello " + name + ", we wish you happy birthday on " + formatDate(birthday) + "! 🎂🎉🎁";
  } else {
    document.getElementById("message").innerHTML = "Sorry " + name + ", it's not your birthday today. 😢";
  }
}

function formatDate(date) {
  let year = date.getFullYear();
  let month = ("0" + (date.getMonth() + 1)).slice(-2);
  let day = ("0" + date.getDate()).slice(-2);
  return day + "-" + month + "-" + year;
}
