"use strict";

// carousel function
$(document).ready(function() {
  $("#mainpic").owlCarousel({
      navigation: true,
      slideSpeed: 300,
      paginationSpeed: 400,
      singleItem:true
  });
});

// smooth scroll function
var main = function () {

  //$("a.backToTop").on("click", function () {
  	//$("#pageTop")[0].scrollIntoView({
  		//behavior: "smooth"
  	//});
  	//return false;
  //});

  $("a#work").on("click", function () {
  	$("#myworksection")[0].scrollIntoView({
  		behavior: "smooth"
  	});
  	return false;
  });

  $("a#contact").on("click", function () {
  	$("#contactsection")[0].scrollIntoView({
  		behavior: "smooth"
  	});
  	return false;
  });
};



























