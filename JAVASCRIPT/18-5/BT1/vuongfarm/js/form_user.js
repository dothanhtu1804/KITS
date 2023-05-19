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

function dropdown_user() {
  document.getElementById("myDropdown").classList.toggle("show");
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
}

function logout(){
  window.localStorage.removeItem('token');
  window.location.replace("./login.html");
}

// Close the dropdown if the user clicks outside of it
