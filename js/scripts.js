
var add = function(number1, number2, number3, number4, number5) {
  return number1 + number2 + number3 + number4 + number5;
};

var output = function(name, learn, build, environment, reason, lordOfTheRing, result) {
 if (name === "" || isNaN(learn) || isNaN(build) || isNaN(environment) || isNaN(reason) || isNaN(lordOfTheRing)) {
   alert("Answer all the questions to find out!")
 } else if (result >= 5 && result < 9) {
    return ("C#/.NET");
  } else if (result >= 9 && result < 13) {
    return ("JAVA/ANDROID");
  } else if (result >= 13 && result < 17) {
    return ("PHP/DRUPAL");
  } else if (result >= 17 && result <= 20 ) {
    return ("RUBY/RAILS");
  };
};

$(document).ready(function() {

  $("form#track").submit(function(event) {
    event.preventDefault();

    var learn = parseInt($("input:radio[name=learn]:checked").val());
    var build = parseInt($("input:radio[name=build]:checked").val());
    var environment = parseInt($("input:radio[name=environment]:checked").val());
    var reason = parseInt($("input:radio[name=reason]:checked").val());
    var lordOfTheRing = parseInt($("input:radio[name=lordofthering]:checked").val());
    var result = add(learn, build, environment, reason, lordOfTheRing)
    var name = $("input#name").val();

    $(".yourname").text(name);
    $(".output").text(output(name, learn, build, environment, reason, lordOfTheRing, result));
console.log(result)

    if (isNaN(result) || name === "") {
      $(".submitted").hiddne();
    } else {
      $(".submitted").fadeIn();
    }

 });
});
