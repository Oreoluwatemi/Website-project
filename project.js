function calculate() {

    const age = parseInt(document.getElementById("age").value);
    let na = document.getElementsByName("gender");
    const height = parseInt(document.getElementById("cm").value);
    const weight = parseInt(document.getElementById("weight").value);
    let activityLevel = document.getElementsByName("activity_level");
    let goal = document.getElementsByName("your_goal");
    var calories_per_day = 0;
    var finalCalorie = 0;
    var calorieIntake = 0;
    var missingField = "";

    for (var i = 0; i < na.length; i++) {
        if (na[i].checked) {
            var gender = na[i].value
        }
    }
    for (var i = 0; i < activityLevel.length; i++) {
        if (activityLevel[i].checked)
            var level = activityLevel[i].value
    }
    for (var i = 0; i < goal.length; i++) {
        if (goal[i].checked)
            var goals = goal[i].value
    }

    if (isNaN(age)) {
        missingField += "Input Age </br>"
    }
    if (isNaN(height)) {
        missingField += "Input Height </br>"
    }
    if (isNaN(weight)) {
        missingField += "Input Weight </br>"
    }
    if (!gender) {
        missingField += "Select Gender </br>"
    }
    if (!level) {
        missingField += "Select an Activity Level </br>"
    }
    if (!goals) {
        missingField += "Select Goal </br>"
    }
    if (missingField != "") {
        document.getElementById("missingField2").innerHTML = missingField
    }
    if (missingField == "") {
        missingField = ""
        document.getElementById("missingField2").innerHTML = missingField
        document.getElementById("form1").reset();
        document.getElementById("output").style.display = "block"
        document.getElementById("viewKetoCalorie").style.display = "block"
    }


    if (gender == "Male" && level == "Basal Metabolic Rate (BMR)" && (age >= 18 || age <= 80)) {
        finalCalorie = ((10 * weight) + (6.25 * height) - (age * 5) + 5)
    } else if (gender == "Male" && level == "Sedentary" && (age >= 18 || age <= 80)) {
        finalCalorie = ((10 * weight) + (6.25 * height) - (age * 5) + 5) * 1.2
    } else if (gender == "Male" && level == "Lightly Active" && (age >= 18 || age <= 80)) {
        finalCalorie = ((10 * weight) + (6.25 * height) - (age * 5) + 5) * 1.375
    } else if (gender == "Male" && level == "Moderately Active" && (age >= 18 || age <= 80)) {
        finalCalorie = ((10 * weight) + (6.25 * height) - (age * 5) + 5) * 1.55
    } else if (gender == "Male" && level == "Very Active" && (age >= 18 || age <= 80)) {
        finalCalorie = ((10 * weight) + (6.25 * height) - (age * 5) + 5) * 1.725
    } else if (gender == "Male" && level == "Extra Active" && (age >= 18 || age <= 80)) {
        finalCalorie = ((10 * weight) + (6.25 * height) - (age * 5) + 5) * 1.9
    } else if (gender == "Female" && level == "Basal Metabolic Rate (BMR)" && (age >= 18 || age <= 80)) {
        finalCalorie = ((10 * weight) + (6.25 * height) - (age * 5) - 161)
    } else if (gender == "Female" && level == "Sedentary" && (age >= 18 || age <= 80)) {
        finalCalorie = ((10 * weight) + (6.25 * height) - (age * 5) - 161) * 1.2
    } else if (gender == "Female" && level == "Lightly Active" && (age >= 18 || age <= 80)) {
        finalCalorie = ((10 * weight) + (6.25 * height) - (age * 5) - 161) * 1.375
    } else if (gender == "Female" && level == "Moderately Active" && (age >= 18 || age <= 80)) {
        finalCalorie = ((10 * weight) + (6.25 * height) - (age * 5) - 161) * 1.55
    } else if (gender == "Female" && level == "Very Active" && (age >= 18 || age <= 80)) {
        finalCalorie = ((10 * weight) + (6.25 * height) - (age * 5) - 161) * 1.725
    } else if (gender == "Female" && level == "Extra Active" && (age >= 18 || age <= 80)) {
        finalCalorie = ((10 * weight) + (6.25 * height) - (age * 5) - 161) * 1.9
    }

    if (goals == "Maintain weight") {
        var calorieIntake = finalCalorie
    } else if (goals == "Mild Weight loss of 0.5 lb (0.25 kg) per week") {
        var calorieIntake = finalCalorie - (0.25 * 7700) / 7
    } else if (goals == "Weight loss of 1 lb (0.5 kg) per week") {
        var calorieIntake = finalCalorie - (0.5 * 7700) / 7
    } else if (goals == "Extreme weight loss of 2 lb (1 kg) per week") {
        var calorieIntake = finalCalorie - (1 * 7700) / 7
    } else if (goals == "Mild weight gain of 0.5 lb (0.25 kg) per week") {
        var calorieIntake = finalCalorie + (0.25 * 7700) / 7
    } else if (goals == "Weight gain of 1 lb (0.5 kg) per week") {
        var calorieIntake = finalCalorie + (0.5 * 7700) / 7
    } else if (goals == "Extreme weight gain of 2 lb (1 kg) per week") {
        var calorieIntake = finalCalorie + (1 * 7700) / 7
    }

    var minCarb = (0.45 * finalCalorie) / 4
    var maxCarb = (0.65 * finalCalorie) / 4
    var minProtein = (0.10 * finalCalorie) / 4
    var maxProtein = (0.35 * finalCalorie) / 4
    var minFat = (0.20 * finalCalorie) / 9
    var maxFat = (0.35 * finalCalorie) / 9

    var minCarb2 = (0.45 * calorieIntake) / 4
    var maxCarb2 = (0.65 * calorieIntake) / 4
    var minProtein2 = (0.10 * calorieIntake) / 4
    var maxProtein2 = (0.35 * calorieIntake) / 4
    var minFat2 = (0.20 * calorieIntake) / 9
    var maxFat2 = (0.35 * calorieIntake) / 9

    var ketoCarb = (0.12 * finalCalorie) / 4
    var ketoProtein = (0.36 * finalCalorie) / 4
    var ketoFat = (0.52 * finalCalorie) / 9

    var ketoCarb2 = (0.12 * calorieIntake) / 4
    var ketoProtein2 = (0.36 * calorieIntake) / 4
    var ketoFat2 = (0.52 * calorieIntake) / 9



    document.getElementById("result_calorie").innerHTML = Math.floor(finalCalorie) + " Calories/day"
    document.getElementById("minCarb").innerHTML = Math.floor(minCarb) + " grams/day"
    document.getElementById("maxCarb").innerHTML = Math.floor(maxCarb) + " grams/day"
    document.getElementById("minProtein").innerHTML = Math.floor(minProtein) + " grams/day"
    document.getElementById("maxProtein").innerHTML = Math.floor(maxProtein) + " grams/day"
    document.getElementById("minFat").innerHTML = Math.floor(minFat) + " grams/day"
    document.getElementById("maxFat").innerHTML = Math.floor(maxFat) + " grams/day"


    document.getElementById("heading").innerHTML = goals
    document.getElementById("result_calorie2").innerHTML = Math.floor(calorieIntake) + " Calories/day"
    document.getElementById("minCarb2").innerHTML = Math.floor(minCarb2) + " grams/day"
    document.getElementById("maxCarb2").innerHTML = Math.floor(maxCarb2) + " grams/day"
    document.getElementById("minProtein2").innerHTML = Math.floor(minProtein2) + " grams/day"
    document.getElementById("maxProtein2").innerHTML = Math.floor(maxProtein2) + " grams/day"
    document.getElementById("minFat2").innerHTML = Math.floor(minFat2) + " grams/day"
    document.getElementById("maxFat2").innerHTML = Math.floor(maxFat2) + " grams/day"

    document.getElementById("keto_result_calorie").innerHTML = Math.floor(finalCalorie) + " Calories/day"
    document.getElementById("keto_Carb").innerHTML = Math.floor(ketoCarb) + " grams/day"
    document.getElementById("keto_Protein").innerHTML = Math.floor(ketoProtein) + " grams/day"
    document.getElementById("keto_Fat").innerHTML = Math.floor(ketoFat) + " grams/day"

    document.getElementById("heading2").innerHTML = goals
    document.getElementById("keto_result_calorie2").innerHTML = Math.floor(calorieIntake) + " Calories/day"
    document.getElementById("keto_Carb2").innerHTML = Math.floor(ketoCarb2) + " grams/day"
    document.getElementById("keto_Protein2").innerHTML = Math.floor(ketoProtein2) + " grams/day"
    document.getElementById("keto_Fat2").innerHTML = Math.floor(ketoFat2) + " grams/day"


}


$(document).ready(function () {

    //Contact us page
    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }
    $("#_submit").click(function () {

        const fName = $("#fname").val();
        const lName = $("#lname").val();
        const email = $("#email").val();
        const message = $("#message").val();
        var missing = "";

        if (fName == "") {
            missing += "First name missing<br>";
        }
        if (lName == "") {
            missing += "Last name missing<br>";
        }
        if ($('input[type=radio][name=gender2]:checked').length == 0) {
            missing += "Select gender<br>"
        }
        if (email == "") {
            missing += "Email missing<br>";
        }
        if (message == "") {
            missing += "Message missing<br>";
        }
        if (isEmail(email) == false) {
            missing += "Email address is not valid"
        }
        if (missing != "") {
            $("#missingFields").html(missing)
        }
        if (missing == "") {
            missing = ""
            $("#missingFields").html(missing)
            const answer = confirm("Click ok to continue")
            if (answer == true) {
                alert("Message sent")
                $("#form2").trigger("reset");
            }

        }
    });

    $("#subscribe").click(function () {

        const email2 = $("#email2").val();
        if (isEmail(email2) == false) {
            alert("Invalid Email Address")
        }
        if (email2 == "") {
            alert("Input Email Address")
        } else {
            alert("You have successfully subscribed!")
            $("#form3").trigger("reset");
        }

    });


    //Mealplan page

    $("#view").click(function () {
        $("#choices").show(2000)
        $("#viewLess").show(2000)
    });

    $("#viewLess").click(function () {
        $("#choices").hide(2000)
        $("#viewLess").hide(2000)
    })

    $(".mealChoices").mouseover(function () {
        $(this).animate({
            height: "350px"
        })
    });
    $(".mealChoices").mouseout(function () {
        $(this).animate({
            height: "200px"
        })
    });

    //Macros page
    $("#viewKetoCalorie").click(function () {
        $("#output2").fadeIn(3000, function () {
            $("#output2").css("display", "block")
        })
    })

    //homepage
    $("#recipies_one").on({
        mouseover: function () {
            $(this).css({
                "color": "grey",
                "font-size": "50px"
            });
        },
        mouseout: function () {
            $(this).css({
                "color": "black",
                "font-size": "30px"
            });
        }
    });

    $("#recipies_two").on({
        mouseover: function () {
            $(this).css({
                "color": "grey",
                "font-size": "50px"
            });
        },
        mouseout: function () {
            $(this).css({
                "color": "black",
                "font-size": "30px"
            });
        }
    });

    //Home page popup
    function deselect(e) {
        $('.pop').slideFadeToggle(function () {
            e.removeClass('selected');
        });
    }

    $(function () {
        $('#contact_subsribe').on('click', function () {
            if ($(this).hasClass('selected')) {
                deselect($(this));
            } else {
                $(this).addClass('selected');
                $('.pop').slideFadeToggle();
            }
            return false;
        });

        $('.close').on('click', function () {
            deselect($('#contact_subsribe'));
            return false;
        });
    });

    $.fn.slideFadeToggle = function (easing, callback) {
        return this.animate({
            opacity: 'toggle',
            height: 'toggle'
        }, 'fast', easing, callback);
    };

});
