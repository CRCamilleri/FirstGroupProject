function createRecipe() {
    //This next line is the food that the user searches for
    var mealName = $("#recipeInput").val().trim();
    $.ajax({
        url: "https://api.edamam.com/search?q=" + mealName + "&app_id=70e00e26&app_key=6c683b56a399b435d00ee3100c0ca055",
        method: "GET"
    }).then(function (response) {
        //  ++++++++++++++   Option 1 +++++++++++++++++++++++
        //  Option 1 retrieves 10 recipe text chunks and lets the user save these chunks into localStorage
        //This for loop iterates through the recipes that are retrieved and gives the created div the 'recipe' class
        for (i = 0; i < response.hits.length; i++) {
            var stepDiv = $("#recipeReveal").append("<div id='recipe" + (i) + "'></div>");
            var newDiv = document.getElementById("recipe" + i);
            newDiv.innerHTML += "recipe";
            newDiv.innerHTML +=  (i + ": " + response.hits[i].recipe.label + ", Image: " + response.hits[i].recipe.image + ", Ingredients: ");
            //This for loop iterates through the ingredients for this recipe
            for (j = 0; j < response.hits[i].recipe.ingredients.length; j++) {
                newDiv.innerHTML += response.hits[i].recipe.ingredients[j].text + ", ";
            }
            stepDiv.append("<button id='result" + (i+1) + "' onclick='saveRecipe(" + (i) + ")'>Save Recipe</button>");

            //    ++++++++++++++Option 2+++++++++++++++++++
            //Below version of the code works to actually create 10 formatted recipe results with picture, etc.
            //It can be copy-pasted into the function in place of function content above
            // for (i = 0; i < response.hits.length; i++) {
            //     var newDiv = $("#recipeReveal")
            // newDiv.append("<div class='recipe" + (i) + "'></div>")
            // .append("<p>Recipe result " + (i + 1) + ": " + response.hits[i].recipe.label + "</p>")
            //     .append("<img src=" + response.hits[i].recipe.image + " alt='Recipe picture'>");
            // //This for loop iterates through the ingredients for this recipe
            // for (j = 0; j < response.hits[i].recipe.ingredients.length; j++) {
            //     $('#recipeReveal').append("<p>" + response.hits[i].recipe.ingredients[j].text + "</p>")
            // }
            // newDiv.append("<button id='result" + (i+1) + "' onclick='saveRecipe(" + (i) + ")'>Save Recipe</button>");
            //   This is where the copy-paste section ends
        }
    })
}

function saveRecipe(number) {
    var recipeDiv = document.getElementById("recipe" + number).textContent;

    if (localStorage.getItem("savedRecipes") == null) {
        localStorage.setItem("savedRecipes", recipeDiv);
    } else {
        let currentSavedRecipes = localStorage.getItem("savedRecipes");
        localStorage.setItem("savedRecipes", (currentSavedRecipes + recipeDiv));
        console.log("Recipe " + number + " saved");
    }
}

$(document).ready(function() {
    //This is not working properly yet but the idea is to save all Saved Recipes as one key/value pair in localStorage
    $(".savedRecipe").append(JSON.parse(localStorage.getItem("savedRecipes")));
    console.log("Page ready");
  });