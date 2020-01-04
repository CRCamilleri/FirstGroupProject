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

function createRecipe() {
    //This next line is the food that the user searches for
    var mealName = $("#recipeInput").val().trim();
    $.ajax({
        url: "https://api.edamam.com/search?q=" + mealName + "&app_id=70e00e26&app_key=6c683b56a399b435d00ee3100c0ca055",
        method: "GET"
    }).then(function (response) {
        for (i = 0; i < response.hits.length; i++) {
            var newDiv = $("#recipeReveal");
        newDiv.append("<div class='recipe" + (i) + "'></div>")
        .append("<p>Recipe result " + (i + 1) + ": " + response.hits[i].recipe.label + "</p>")
            .append("<img src=" + response.hits[i].recipe.image + " alt='Recipe picture'>")
            .append("Full recipe: " + response.hits[i].recipe.url);
        //This for loop iterates through the ingredients for this recipe
        for (j = 0; j < response.hits[i].recipe.ingredients.length; j++) {
            $('#recipeReveal').append("<p>" + response.hits[i].recipe.ingredients[j].text + "</p>")
        }
        newDiv.append("<button id='result" + (i+1) + "' onclick='saveRecipe(" + (i) + ")'>Save Recipe</button>");
        }
        queriedRecipe0 = (response.hits[0].recipe);
        queriedRecipe1 = (response.hits[1].recipe);
        queriedRecipe2 = (response.hits[2].recipe);
        queriedRecipe3 = (response.hits[3].recipe);
        queriedRecipe4 = (response.hits[4].recipe);
        queriedRecipe5 = (response.hits[5].recipe);
        queriedRecipe6 = (response.hits[6].recipe);
        queriedRecipe7 = (response.hits[7].recipe);
        queriedRecipe8 = (response.hits[8].recipe);
        queriedRecipe9 = (response.hits[9].recipe);
    })
}

function saveRecipe(number) {
    if (localStorage.getItem("savedRecipes") ==  null) {
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
        }}
    else {
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

$("#savedRecipesDumpHere").onload = $("#savedRecipesDumpHere").append("<p>" + (localStorage.getItem("savedRecipes")) + "</p>");

$(document).ready(function() {
    console.log("Page ready");
  });