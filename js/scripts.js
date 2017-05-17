var add = function(appeal, webpageApps, paintingLogic, careMore, leftRight) {
  return appeal + webpageApps + paintingLogic + careMore + leftRight;
}

$(document).ready(function() {
  $("#track").submit(function(event) {
    var appeal = parseInt($("input[name=appeal]:checked").val());
    var webpageApps = parseInt($("input[name=webpage-apps]:checked").val());
    var paintingLogic = parseInt($("input[name=painting-logic]:checked").val());
    var careMore = parseInt($("input[name=care-more]:checked").val());
    var leftRight = parseInt($("input[name=left-right]:checked").val());
    var total = add(appeal, webpageApps, paintingLogic, careMore, leftRight);
    

    if ( total <= 3 ) {
      $("#php").fadeIn(2000);
    } else if ( total > 3 && total <= 5) {
      $("#java").fadeIn(2000);
    } else if ( total > 5 && total <=8) {
      $("#css_design").fadeIn(2000);
    }

  event.preventDefault();
  });
});
