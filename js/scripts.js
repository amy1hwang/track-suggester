
var add = function(number1, number2, number3, number4, number5) {
  return number1 + number2 + number3 + number4 + number5;
};

/*var output = function(learn, build, environment, reason, lordOfTheRing) {
  /*if (add === NaN) {
    return "Answer all the questions!"
  } else*/ if (add >= 5 && add < 9) {
    return ("C#/.NET");
  } else if (add >= 9 && add < 13) {
    return ("JAVA/ANDROID");
  } else if (add >= 13 && add < 17) {
    return ("PHP/DRUPAL");
  } else if (add >= 17 && add <= 20 ) {
    return ("RUBY/RAILS");
  };
};

//var name = prompt("Enter your name.")



$(document).ready(function() {

  $("form#track").submit(function(event) {
    event.preventDefault();

    var learn = parseInt($("input:radio[name=learn]:checked").val());
    var build = parseInt($("input:radio[name=build]:checked").val());
    var environment = parseInt($("input:radio[name=environment]:checked").val());
    var reason = parseInt($("input:radio[name=reason]:checked").val());
    var lordOfTheRing = parseInt($("input:radio[name=lordofthering]:checked").val());

    //$(".name").text(name);
    $("#output").text(output(learn, build, environment, reason, lordOfTheRing));
    $(".submitted").fadeIn();

 });
});
