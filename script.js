function createRecipe() {
    //This next line is the food that the user searches for
    var mealName = $("#recipeInput").val().trim();
    $.ajax({
        url: "https://api.edamam.com/search?q=" + mealName + "&app_id=70e00e26&app_key=6c683b56a399b435d00ee3100c0ca055",
        method: "GET"
    }).then(function (response) {
        //This for loop iterates through the recipes that are retrieved and gives the created div the 'recipe' class
        for (i = 0; i < response.hits.length; i++) {
            var newDiv = $("#recipeReveal").append("<div class='recipe" + (i) + "'></div>");
            newDiv.append("<p>Recipe result " + (i + 1) + ": " + response.hits[i].recipe.label + "</p>")
                .append("<img src=" + response.hits[i].recipe.image + " alt='Recipe picture'>")
                .append("<button id='result" + (i+1) + "' onclick='saveRecipe(" + (i) + ")'>Save Recipe</button>");
            //This for loop iterates through the ingredients for this recipe
            for (j = 0; j < response.hits[i].recipe.ingredients.length; j++) {
                $('#recipeReveal').append("<p>" + response.hits[i].recipe.ingredients[j].text + "</p>")
            }
        }
    })
}

function saveRecipe(number) {
    localStorage.setItem("savedRecipes", JSON.stringify($(".recipe" + number).data()));
    console.log("Recipe " + number + " saved");
}

$(document).ready(function() {
    //This is not working properly yet but the idea is to save all Saved Recipes as one key/value pair in localStorage
    $(".savedRecipe").append(JSON.parse(localStorage.getItem("savedRecipes")));
    console.log("Page ready");
  });