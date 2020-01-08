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
function createRecipe() {
    var mealName = $("#recipeInput").val().trim();
    $.ajax({
        url: "https://api.edamam.com/search?q=" + mealName + "&app_id=70e00e26&app_key=6c683b56a399b435d00ee3100c0ca055",
        method: "GET"
    }).then(function (response) {
        for (i = 0; i < response.hits.length; i++) {
            console.log(response);
            var newDiv = $("#recipeReveal");
            newDiv.append("<div class='card' style='width: 18rem;'>")
            .append("<div class='card-body'>")
            .append("<h5 class='" + response.hits[i].recipe.label + "'></h5>")
            .append("<img src='" + response.hits[i].recipe.image + "' alt='Recipe Picture'></img>")
            .append("<p class='card-text'>Full recipe instructions can be found at: <a href='" + response.hits[i].recipe.url + "'>" + response.hits[i].recipe.url + "</a></p>")
            .append("</div>")
            .append("<ul class='list-group list-group-flush'>");
            for (j = 0; j < response.hits[i].recipe.ingredients.length; j++) {
            newDiv.append("<li class='list-group-item'>" + response.hits[i].recipe.ingredients[j].text + "</li>");
            }
            newDiv.append("</ul>")
            .append("<div class='card-body'>")
            .append("<button id='result" + (i + 1) + "' onclick='saveRecipe(" + (i) + ")'>Save Recipe</button>")
            .append("<a href='#'' class='card-link'>Another link</a>")
            .append("</div></div>");
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
}

function saveRecipe(number) {
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
    }
    else {
        let currentResults = localStorage.getItem("savedRecipes");
        if (number == 0) {
            localStorage.setItem("savedRecipes", currentResults + JSON.stringify(queriedRecipe0));
        } else if (number == 1) {
            localStorage.setItem("savedRecipes", currentResults + JSON.stringify(queriedRecipe1));
        } else if (number == 2) {
            localStorage.setItem("savedRecipes", currentResults +  JSON.stringify(queriedRecipe2));
        } else if (number == 3) {
            localStorage.setItem("savedRecipes", currentResults +  JSON.stringify(queriedRecipe3));
        } else if (number == 4) {
            localStorage.setItem("savedRecipes", currentResults +  JSON.stringify(queriedRecipe4));
        } else if (number == 5) {
            localStorage.setItem("savedRecipes", currentResults +  JSON.stringify(queriedRecipe5));
        } else if (number == 6) {
            localStorage.setItem("savedRecipes", currentResults +  JSON.stringify(queriedRecipe6));
        } else if (number == 7) {
            localStorage.setItem("savedRecipes", currentResults +  JSON.stringify(queriedRecipe7));
        } else if (number == 8) {
            localStorage.setItem("savedRecipes", currentResults +  JSON.stringify(queriedRecipe8));
        } else if (number == 9) {
            localStorage.setItem("savedRecipes", currentResults  +  JSON.stringify(queriedRecipe9));
        }
    }
}

function recipeBookReveal() {
    var recipeBookStorage = localStorage.getItem("savedRecipes");
    recipeBookStorage = recipeBookStorage.replace(/\"/g, "");
    recipeBookStorage = recipeBookStorage.replace(/\,/g, "");
    recipeBookStorage = recipeBookStorage.split("http://www.edamam.com/ontologies/edamam.owl#recipe_");

    for (i = 0; i < recipeBookStorage.length; i++) {
        $.ajax({
            url: "https://api.edamam.com/search?r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_" + recipeBookStorage[i] + "&app_id=70e00e26&app_key=6c683b56a399b435d00ee3100c0ca055",
            method: "GET"
        }).then(function (response) {
            $(".card").append("<p>" + response[0].label + "</p>")
                .append("<img src=" + response[0].image + " alt='Recipe picture'>")
                .append("<p>" + response[0].url + "</p>");
            for (j = 0; j < response[0].ingredients.length; j++) {
                $('.card').append("<p>" + response[0].ingredients[j].text + "</p>");
            }
            $(".card").append("<button onclick='removeRecipe()'>Remove above recipe from Recipe Book</button>");
        })
    }
}

function removeRecipe() {
    console.log("This button doesn't work yet!");
    
    // var tweakThis = localStorage.getItem("savedRecipes");
    // tweakThis.replace("http://www.edamam.com/ontologies/edamam.owl#recipe_" + address, '');
    // $("#savedRecipesDumpHere").empty();
    // recipeBookReveal();
}

function groceryListReveal() {
    var recipeBookStorage = localStorage.getItem("savedRecipes");
    recipeBookStorage = recipeBookStorage.replace(/\"/g, "");
    recipeBookStorage = recipeBookStorage.replace(/\,/g, "");
    recipeBookStorage = recipeBookStorage.split("http://www.edamam.com/ontologies/edamam.owl#recipe_");

    for (i = 0; i < recipeBookStorage.length; i++) {
        $.ajax({
            url: "https://api.edamam.com/search?r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_" + recipeBookStorage[i] + "&app_id=70e00e26&app_key=6c683b56a399b435d00ee3100c0ca055",
            method: "GET"
        }).then(function (response) {
            for (j = 0; j < response[0].ingredients.length; j++) {
                $('#ingredientsListDumpsHere').append("<p>" + response[0].ingredients[j].text + " (" + response[0].label + ")</p>");
            }
        })
    }
    //put function to put all ingredients into grocery list
}