window.addEventListener("scroll", function() {
  const topNav = document.querySelector(".top-nav") as HTMLElement;
  const scrollPosition = window.pageYOffset;

  if (scrollPosition > 80) {
    console.log("Adding top-nav-scroll class");
    topNav.classList.add("top-nav-scroll");
    topNav.style.backgroundColor = "white";
    const menuItems = topNav.querySelectorAll(".menu li") as NodeListOf<HTMLElement>;
    menuItems.forEach(item => {
      item.style.color = "black";
    });
  } else {
    topNav.classList.remove("top-nav-scroll");
    topNav.style.backgroundColor = "transparent";
    const menuItems = topNav.querySelectorAll(".menu li") as NodeListOf<HTMLElement>;
    menuItems.forEach(item => {
      item.style.color = "white";
    });
  }
});


// window.addEventListener("scroll", function() {
//   const topNav = document.querySelector(".top-nav") as HTMLElement;
//   const scrollPosition = window.pageYOffset;

//   if (scrollPosition > 80) {
//     topNav.classList.add("top-nav-scroll");
//     const menuItems = topNav.querySelectorAll(".menu li") as NodeListOf<HTMLElement>;
//     menuItems.forEach(item => {
//       item.style.color = "black";
//     });
//   } else {
//     topNav.classList.remove("top-nav-scroll");
//     const menuItems = topNav.querySelectorAll(".menu li") as NodeListOf<HTMLElement>;
//     menuItems.forEach(item => {
//       item.style.color = "white";
//     });
//   }
// });


// window.addEventListener("scroll", function() {
//   const topNav = document.querySelector(".top-nav") as HTMLElement;
//   const scrollPosition = window.pageYOffset;

//   if (scrollPosition > 80) {
//     topNav.classList.add("top-nav-scroll");
//   } else {
//     topNav.classList.remove("top-nav-scroll");
//   }
// });
