1. Журна рецептів (https://spoonacular.com/food-api/docs#Search-Recipes-Complex)
2. Підбір рецепту по інгредієнтам (https://spoonacular.com/food-api/docs#Search-Recipes-by-Nutrients)
3. Покупка інгредієнтів (https://spoonacular.com/food-api/docs#Generate-Shopping-List)
   3.1. Окреми список куди можна записати чого не вистачає
4. Підбір рецепту по калорія (https://spoonacular.com/food-api/docs#Search-Recipes-by-Nutrients)
5. Меморі страв
6. Protaction: alergic

https://api.spoonacular.com/recipes/

recipes:
ingridience and calories:

Drawing block schame

1. Init  
   pretter & eslint config
2. TypeScript Type, Interface (ingridients, foods, menu, user, cost, )
3. Storage: Redux toolkit & useContext ?
4. Function components(Hooks) Single page app
5. Tailwint CSS Templates
6. Form validation: alergic: [], favorite: []
7. localStorage
8. Notification
9. Auth Farebase

1) Перша вкладка з усіма рецептами https://api.spoonacular.com/recipes/complexSearch?apiKey=0aa8e02c95b446af92b9757178b9165d - отримав всі рецепти які є на сайті (id - для подальшого пошуку інформації саме по цьому пецепту, title - заголовок під фото, image - фото страви)

2) Пошук - по інгредієнту https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples&apiKey=0aa8e02c95b446af92b9757178b9165d - повертає рецепти саме з цими значеннями (id - для подальшого пошуку інформації саме по цьому пецепту, title - заголовок під фото, image - фото страви)

3) https://api.spoonacular.com/recipes/{id}/ingredientWidget.json?apiKey=0aa8e02c95b446af92b9757178b9165d - це інгредієнти рецепту під id - мисив об'єктів в одному об'єкті є (name - назва інгредієнту, image - зображення, amount - кількість => metric: {value: 1, unit: 'Tbsp'})

4) https://api.spoonacular.com/recipes/{id}/summary?apiKey=0aa8e02c95b446af92b9757178b9165d - опис страви по id (id, summary - опис, title - назва страви)

5) https://api.spoonacular.com/recipes/{id}/analyzedInstructions?apiKey=0aa8e02c95b446af92b9757178b9165d - опис, як готувати, крок за кроком.

6) https://api.spoonacular.com/recipes/findByNutrients?minCarbs=10&maxCarbs=50&number=2?apiKey=0aa8e02c95b446af92b9757178b9165d - філтрація за багатьма показниками
