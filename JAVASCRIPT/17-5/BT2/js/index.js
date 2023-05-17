function hiddenSidebar() {
  document.querySelector(".menu_section").classList.toggle("toggle_link");
}

function addActive() {
  let header = document.querySelector(".body_menu_section");
  let btns = header.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      console.log(current);
      if (current.length > 0) {

        current[0].className = current[0].className.replace(" active", "");
      }
      this.className += " active";
    });
  }
}

// function checkValidate() {
//   let btn = document.querySelector(".btn_submit");
  let btn = document.getElementById("btn_submit");
  console.log(btn);

  btn.addEventListener("click", function () {
    console.log(document.getElementById("first_name").value);
    console.log(document.getElementById("last_name").value);
    console.log(document.getElementById("email").value);
    console.log(document.getElementById("address").value);
    console.log(document.getElementById("telephone").value);
    console.log(document.getElementById("city").value);
  });

//   function func() {
    
//   }
// }
