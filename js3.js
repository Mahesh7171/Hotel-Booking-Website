var owl = $(".owl-carousel");
owl.owlCarousel({
  items: 4,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [1000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});

function formvalidation(e) {
  var name = document.getElementById("name");
  var phoneno = document.getElementById("phoneno");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var bgdanger = document.querySelector(".bg-danger");
  var bgsuccess = document.querySelector(".bg-success");
  var btn5 = document.querySelector(".btn5");
  btn5.addEventListener("click", () => {
    if (
      name.value === "" ||
      phoneno.value === "" ||
      email.value === "" ||
      password.value === ""
    ) {
      bgdanger.style.display = "block";
    } else {
      setTimeout(() => {
        name.value = "";
        phoneno.value = "";
        email.value = "";
        password.value = "";
      }, 2000);
      bgsuccess.style.display = "block";
    }
    setTimeout(() => {
      bgdanger.style.display = "none";
      bgsuccess.style.display = "none";
    }, 4000);
  });
}
