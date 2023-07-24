$(document).on("click", ".table .actions button", function () {
  if ($(this).parent().find(".menu").hasClass("active")) {
    $(this).parent().find(".menu").removeClass("active");
  } else {
    $(".table .actions .menu").removeClass("active");
    $(this).parent().find(".menu").addClass("active");
  }
  var wHeight = $(window).height();
  var elPosTop = $(this).offset().top;
  if (wHeight - elPosTop < 265) {
    $(this).parent().find(".menu").addClass("dropup");
  } else {
    $(this).parent().find(".menu").removeClass("dropup");
  }
});
$(document).on("click", "body", function () {
  $(".table .menu").removeClass("active");
});
$(document).on("click", ".table .actions  > *", function (e) {
  e.stopPropagation();
});


