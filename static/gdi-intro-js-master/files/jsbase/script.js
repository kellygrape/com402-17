console.log("Hello world");


var recipe = {
  title: "Dad's Pancakes",
  servings: 6,
  ingredients: [
      "1 1/4 cup flour",
      "1 cup milk",
      "1 egg",
      "2 tsp baking powder",
      "3 tsp butter"
  ]
};
var recipe2 = {
  title: "Chocolate Chip Cookies",
  servings: 12,
  ingredients: [
      "2 1/4 cup flour",
      "2 eggs",
      "2 sticks butter",
      "3/4 cup sugar",
      "1 tsp vanilla"
  ]
};

document.querySelector('.recipe h2').innerHTML = recipe.title;
document.querySelector('.recipe .servings').innerHTML = recipe.servings;
document.querySelector('.recipe .ingredients').innerHTML = '';
var numingredients = recipe.ingredients.length;
for(var i = 0; i < recipe.ingredients.length; i = i+1){
  document.querySelector('.ingredients').innerHTML +=  '<li>'+recipe.ingredients[i]+'</li>';
}