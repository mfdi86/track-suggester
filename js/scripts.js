$(document).ready(function() {
  $("#track").submit(function(event) {
    var appeal = $("input[name=appeal]:checked").val();
    var webpageApps = $("input[name=webpage-apps]:checked").val();
    var paintingLogic = $("input[name=painting-logic]:checked").val();
    var careMore = $("input[name=care-more]:checked").val();
    var leftRight = $("input[name=left-right]:checked").val();

    if (appeal === "decorating") {
      $("#css_design").show();
      $("#java").hide();
      $("#php").hide();
    }
    if (paintingLogic === "logic") {
      $("#css_design").hide();
      $("#java").show();
      $("#php").hide();
    }
    if (careMore === "inner-workings") {
      $("#css_design").hide();
      $("#java").hide();
      $("#php").show();
    }

  event.preventDefault();
  });
});
