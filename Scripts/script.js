var queriedRecipe0 = [];
var queriedRecipe1 = [];
var queriedRecipe2 = [];
var queriedRecipe3 = [];
var queriedRecipe4 = [];
var queriedRecipe5 = [];
var queriedRecipe6 = [];
var queriedRecipe7 = [];
var queriedRecipe8 = [];
var queriedRecipe9 = [];

//On Index page this function takes search bar input and gives ten results for recipes
// document.getElementById("generate").addEventListener("click");

$("#generate").click(function() {
    var mealName = $("#recipeInput").val().trim();
    $.ajax({
        url: "https://api.edamam.com/search?q=" + mealName + "&app_id=70e00e26&app_key=6c683b56a399b435d00ee3100c0ca055",
        method: "GET"
    }).then(function(response) {
        for (i = 0; i < response.hits.length; i++) {
            var newDiv = $("#recipeReveal");
            var dynamic = "";
            for (j = 0; j < response.hits[i].recipe.ingredients.length; j++) {
                dynamic += "<li class='list-group-item'>" + response.hits[i].recipe.ingredients[j].text + "</li>"
                if (j === 4) {
                    break
                }
            };

            newDiv.append("<div class='card col-lg-4 col-md-5 col-sm-10 justify-content-center' style=''><h5 class='card-title text-center'>" + response.hits[i].recipe.label + "</h5><img class='card-img-top' src='" + response.hits[i].recipe.image + "' alt='Recipe Picture'></img><p class='card-text'>Full recipe instructions can be found at: <a href='" + response.hits[i].recipe.url + "'>" + response.hits[i].recipe.url + "</a></p><div></div><ul class='list-group-flush'>" + dynamic + "</ul><button class='btn btn-warning mt-auto' id='result" + (i + 1) + "' onclick='saveRecipe(" + (i) + ")'>Save Recipe</button></div>")
                //     .append("<div class='card-body'>")
                //     .append("<h5>" + response.hits[i].recipe.label + "</h5>")
                //     .append("<img class='card-img-top' src='" + response.hits[i].recipe.image + "' alt='Recipe Picture'></img>")
                //     .append("<p class='card-text'>Full recipe instructions can be found at: <a href='" + response.hits[i].recipe.url + "'>" + response.hits[i].recipe.url + "</a></p>")
                //     .append("</div>") 
                //     .append("<ul class='list-group list-group-flush'>");
                // for (j = 0; j < response.hits[i].recipe.ingredients.length; j++) {
                //     newDiv.append("<li class='list-group-item'>" + response.hits[i].recipe.ingredients[j].text + "</li>");
                // }
                // newDiv.append("</ul>")
                //     .append("<div class='card-body'>")
                //     .append("<button id='result" + (i + 1) + "' onclick='saveRecipe(" + (i) + ")'>Save Recipe</button>")
                //     .append("</div></div>");
        }
        queriedRecipe0 = (response.hits[0].recipe.uri);
        queriedRecipe1 = (response.hits[1].recipe.uri);
        queriedRecipe2 = (response.hits[2].recipe.uri);
        queriedRecipe3 = (response.hits[3].recipe.uri);
        queriedRecipe4 = (response.hits[4].recipe.uri);
        queriedRecipe5 = (response.hits[5].recipe.uri);
        queriedRecipe6 = (response.hits[6].recipe.uri);
        queriedRecipe7 = (response.hits[7].recipe.uri);
        queriedRecipe8 = (response.hits[8].recipe.uri);
        queriedRecipe9 = (response.hits[9].recipe.uri);
    })
});

//when Save Recipe Button is triggered it does this function, putting that recipe's uri into localStorage
function saveRecipe(number) {
    var newString = "#result" + (number + 1).toString();
    $(newString).html("Recipe Saved!");
    if (localStorage.getItem("savedRecipes") == null) {
        if (number == 0) {
            localStorage.setItem("savedRecipes", JSON.stringify(queriedRecipe0));
        } else if (number == 1) {
            localStorage.setItem("savedRecipes", JSON.stringify(queriedRecipe1));
        } else if (number == 2) {
            localStorage.setItem("savedRecipes", JSON.stringify(queriedRecipe2));
        } else if (number == 3) {
            localStorage.setItem("savedRecipes", JSON.stringify(queriedRecipe3));
        } else if (number == 4) {
            localStorage.setItem("savedRecipes", JSON.stringify(queriedRecipe4));
        } else if (number == 5) {
            localStorage.setItem("savedRecipes", JSON.stringify(queriedRecipe5));
        } else if (number == 6) {
            localStorage.setItem("savedRecipes", JSON.stringify(queriedRecipe6));
        } else if (number == 7) {
            localStorage.setItem("savedRecipes", JSON.stringify(queriedRecipe7));
        } else if (number == 8) {
            localStorage.setItem("savedRecipes", JSON.stringify(queriedRecipe8));
        } else if (number == 9) {
            localStorage.setItem("savedRecipes", JSON.stringify(queriedRecipe9));
        }
    } else {
        let currentResults = localStorage.getItem("savedRecipes");
        if (number == 0) {
            localStorage.setItem("savedRecipes", currentResults + JSON.stringify(queriedRecipe0));
        } else if (number == 1) {
            localStorage.setItem("savedRecipes", currentResults + JSON.stringify(queriedRecipe1));
        } else if (number == 2) {
            localStorage.setItem("savedRecipes", currentResults + JSON.stringify(queriedRecipe2));
        } else if (number == 3) {
            localStorage.setItem("savedRecipes", currentResults + JSON.stringify(queriedRecipe3));
        } else if (number == 4) {
            localStorage.setItem("savedRecipes", currentResults + JSON.stringify(queriedRecipe4));
        } else if (number == 5) {
            localStorage.setItem("savedRecipes", currentResults + JSON.stringify(queriedRecipe5));
        } else if (number == 6) {
            localStorage.setItem("savedRecipes", currentResults + JSON.stringify(queriedRecipe6));
        } else if (number == 7) {
            localStorage.setItem("savedRecipes", currentResults + JSON.stringify(queriedRecipe7));
        } else if (number == 8) {
            localStorage.setItem("savedRecipes", currentResults + JSON.stringify(queriedRecipe8));
        } else if (number == 9) {
            localStorage.setItem("savedRecipes", currentResults + JSON.stringify(queriedRecipe9));
        }
    }
}

//This function uses localStorage values to create the saved recipes on Recipe Book page
function recipeBookReveal() {
    var recipeBookStorage = localStorage.getItem("savedRecipes");
    recipeBookStorage = recipeBookStorage.replace(/\"/g, "");
    recipeBookStorage = recipeBookStorage.replace(/\,/g, "");
    recipeBookStorage = recipeBookStorage.split("http://www.edamam.com/ontologies/edamam.owl#recipe_");

    for (i = 0; i < recipeBookStorage.length; i++) {
        $.ajax({
            url: "https://api.edamam.com/search?r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_" + recipeBookStorage[i] + "&app_id=917da0f4&app_key=c3882b283afbea6c3d0069fbd8a86427",
            method: "GET"
        }).then(function(response) {
            var newClass = response[0].uri.replace("http://www.edamam.com/ontologies/edamam.owl#recipe_", "");

            var dynamic1 = "";
            for (j = 0; j < response[0].ingredients.length; j++) {
                dynamic1 += "<li class='list-group-item'" + newClass + "'>" + response[0].ingredients[j].text + "</li>"
                if (j === 4) {
                    break
                }
            };

            $("#savedRecipesDumpHere").append("<div class='card col-lg-4 col-md-5 col-sm-10 justify-content-center' style=''><h5 class='card-title text-center'" + newClass + ">" + response[0].label + "</h5><img class='" + newClass + "' src=" + response[0].image + " alt='Recipe picture'><p class='card-text'>Full recipe instructions can be found at: <a class='" + newClass + "' href=" + response[0].url + ">" + response[0].url + "</a></p><div></div><ul class='list-group-flush'>" + dynamic1 + "</ul><button class='btn btn-warning mt-auto' id='id='" + newClass + "' onclick=removeRecipe()>Remove above recipe from Recipe Book</button>" + "</div>")

            // ("<p class='" + newClass + "'>" + response[0].label + "</p>")
            // .append("<img class='" + newClass + "' src=" + response[0].image + " alt='Recipe picture'>")
            //     .append("<p>Full recipe may be found at: <a class='" + newClass + "' href=" + response[0].url + ">" + response[0].url + "</a></p>");

            // for (j = 0; j < response[0].ingredients.length; j++) {
            //     $('.card').append("<p class='" + newClass + "'>" + response[0].ingredients[j].text + "</p>");
            // }
            // $(".card").append("<button id='" + newClass + "' onclick=removeRecipe()>Remove above recipe from Recipe Book</button>");


        })

    }
}

//this function removes a recipe from localStorage
function removeRecipe() {
    var removeString = "\"" + "http://www.edamam.com/ontologies/edamam.owl#recipe_" + event.srcElement.id + "\"";
    var tweakThis = String(localStorage.getItem("savedRecipes"));
    tweakThis = tweakThis.replace(removeString, '');
    localStorage.setItem("savedRecipes", tweakThis);
    document.getElementById(event.srcElement.id).innerHTML = "Recipe is now removed from saved recipes";
}

//This function creates all of the ingredients in one big grocery list
function groceryListReveal() {
    var recipeBookStorage = localStorage.getItem("savedRecipes");
    recipeBookStorage = recipeBookStorage.replace(/\"/g, "");
    recipeBookStorage = recipeBookStorage.replace(/\,/g, "");
    recipeBookStorage = recipeBookStorage.split("http://www.edamam.com/ontologies/edamam.owl#recipe_");

    for (i = 1; i < recipeBookStorage.length; i++) {
        $.ajax({
            url: "https://api.edamam.com/search?r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_" + recipeBookStorage[i] + "&app_id=917da0f4&app_key=c3882b283afbea6c3d0069fbd8a86427",
            method: "GET"
        }).then(function(response) {
            for (j = 0; j < response[0].ingredients.length; j++) {
                if (response[0].ingredients[j].text.includes("salt") && response[0].ingredients[j].text.indexOf("salted") == -1) {
                    $("#pantryStaples").append("<div class='form-check'><input type='checkbox' class='form-check-input' id='materialUnchecked'><label class='form-check-label' for='materialUnchecked'>" + response[0].ingredients[j].text + " (" + response[0].label + ")</label></div>");
                } else if (response[0].ingredients[j].text.includes("sugar") && response[0].ingredients[j].text.indexOf("sugared") == -1) {
                    $("#pantryStaples").append("<div class='form-check'><input type='checkbox' class='form-check-input' id='materialUnchecked'><label class='form-check-label' for='materialUnchecked'>" + response[0].ingredients[j].text + " (" + response[0].label + ")</label></div>");
                } else if (response[0].ingredients[j].text.includes("oil") && response[0].ingredients[j].text.indexOf("oiled") == -1) {
                    $("#pantryStaples").append("<div class='form-check'><input type='checkbox' class='form-check-input' id='materialUnchecked'><label class='form-check-label' for='materialUnchecked'>" + response[0].ingredients[j].text + " (" + response[0].label + ")</label></div>");
                } else if (response[0].ingredients[j].text.includes("vinegar") && response[0].ingredients[j].text.indexOf("vinegar-") == -1) {
                    $("#pantryStaples").append("<div class='form-check'><input type='checkbox' class='form-check-input' id='materialUnchecked'><label class='form-check-label' for='materialUnchecked'>" + response[0].ingredients[j].text + " (" + response[0].label + ")</label></div>");
                } else if (response[0].ingredients[j].text.includes("sugar") || response[0].ingredients[j].text.includes("flour") || response[0].ingredients[j].text.includes("baking soda") || response[0].ingredients[j].text.includes("pure vanilla extract")) {
                    $("#pantryStaples").append("<div class='form-check'><input type='checkbox' class='form-check-input' id='materialUnchecked'><label class='form-check-label' for='materialUnchecked'>" + response[0].ingredients[j].text + " (" + response[0].label + ")</label></div>");
                } else if (response[0].ingredients[j].text.includes("chicken") || response[0].ingredients[j].text.includes("turkey") || response[0].ingredients[j].text.includes("duck") || response[0].ingredients[j].text.includes("beef") || response[0].ingredients[j].text.includes("sausage") || response[0].ingredients[j].text.includes("venison") || response[0].ingredients[j].text.includes("lamb") || response[0].ingredients[j].text.includes("pork") || response[0].ingredients[j].text.includes("ham")) {
                    $("#weHaveTheMeats").append("<div class='form-check'><input type='checkbox' class='form-check-input' id='materialUnchecked'><label class='form-check-label' for='materialUnchecked'>" + response[0].ingredients[j].text + " (" + response[0].label + ")</label></div>");
                } else if (response[0].ingredients[j].text.includes("jelly") || response[0].ingredients[j].text.includes("jam") || response[0].ingredients[j].text.includes("preserves") || response[0].ingredients[j].text.includes("ketchup") || response[0].ingredients[j].text.includes("mayonnaise") || response[0].ingredients[j].text.includes("mustard") || response[0].ingredients[j].text.includes("hot sauce") || response[0].ingredients[j].text.includes("soy sauce") || response[0].ingredients[j].text.includes("sesame oil")) {
                    $("#condiments").append("<div class='form-check'><input type='checkbox' class='form-check-input' id='materialUnchecked'><label class='form-check-label' for='materialUnchecked'>" + response[0].ingredients[j].text + " (" + response[0].label + ")</label></div>");
                } else {
                    $('#ingredientsListDumpsHere').append("<div class='form-check'><input type='checkbox' class='form-check-input' id='materialUnchecked'><label class='form-check-label' for='materialUnchecked'>" + response[0].ingredients[j].text + " (" + response[0].label + ")</label></div>");
                }
            }
        })
    }
}

$('body').on("click", '.form-check-input', function() {
    if (this.checked) {
        $(this).parent().appendTo($("#checkedIngredients"));
    }
})