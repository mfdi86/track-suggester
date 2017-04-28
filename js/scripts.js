$(function() {
  $("#track").submit(function(event) {
    var appeal = $("input:radio[name=appeal]:checked").val();
    var webpage-apps = $("input:radio[name=webpage-apps]:checked").val();
    var painting-logic = $("input:radio[name=painting-logic]:checked").val();
    var care-more = $("input:radio[name=care-more]:checked").val();
    var left-right = $("input:radio[name=left-right]:checked").val();

    if (appeal === "decorating") {
    $("#css-design").show();
    $("#java").hide();
    $("#php").hide();
  }

  event.preventDefault();
  });
});
