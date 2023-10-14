
document.addEventListener("DOMContentLoaded", function () {

  var parentDocument = window.parent.document;
  var page = window.location.href.split('/').pop();

 if(page==="indexngo.html"){
    console.log("index home clicked!");
    let userHomeLink = parentDocument.getElementById("homelink");
    if (userHomeLink) {
      userHomeLink.classList.add("active");
    }
  }
  else if(page==="ngo-order-list.html"){
      let userHomeLink = parentDocument.getElementById("messagelink");
      userHomeLink.classList.add("active");
  }

  // else if(page==="profile.html"){
  //     const userHomeLink =parentDocument.getElementById("proflink");
  //     userHomeLink.classList.add("active");
  // }
});
