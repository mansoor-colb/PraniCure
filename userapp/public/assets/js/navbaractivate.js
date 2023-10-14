
document.addEventListener("DOMContentLoaded", function () {

  var parentDocument = window.parent.document;
  var page = window.location.href.split('/').pop();

  if (page === "user-home.html") {
    console.log("user home clicked!");
    let userHomeLink = parentDocument.getElementById("homelink");
    if (userHomeLink) {
      userHomeLink.classList.add("active");
    }
  }
  else if(page==="indexuser.html"){
    console.log("index home clicked!");
    let userHomeLink = parentDocument.getElementById("notiflink");
    if (userHomeLink) {
      userHomeLink.classList.add("active");
    }
  }
  else if(page==="order-list.html"){
      let userHomeLink = parentDocument.getElementById("messagelink");
      userHomeLink.classList.add("active");
  }

  // else if(page==="profile.html"){
  //     const userHomeLink =parentDocument.getElementById("proflink");
  //     userHomeLink.classList.add("active");
  // }
});
