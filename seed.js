const mongoose = require('mongoose') ;
const Recipe = require('./models/Recipe') ;

let recipes = [
    {
        name: 'Samosa' ,
        img : 'https://plus.unsplash.com/premium_photo-1695297515622-d0991a12efe3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2Ftb3NhfGVufDB8fDB8fHww' ,
        ingredients: '2 cups all-purpose flour (maida), 1/4 cup melted ghee or oil, 1/2 teaspoon carom seeds (ajwain), Salt to taste, Water for kneading, 3 large potatoes, boiled, peeled, and mashed, 1 cup green peas (fresh or frozen), 1 tablespoon oil, 1 teaspoon cumin seeds, 1 teaspoon grated ginger, 1 green chili, finely chopped, 1/2 teaspoon turmeric powder, 1 teaspoon coriander powder, 1 teaspoon garam masala, 1/2 teaspoon amchur (dry mango powder), Salt to taste, Fresh coriander leaves, chopped' ,
        instructions: 'Start by making the dough. In a large mixing bowl, combine the all-purpose flour, salt, and vegetable oil. Rub the oil into the flour until it resembles breadcrumbs. Gradually add water and knead to form a smooth and firm dough. Cover the dough with a damp cloth and let it rest for about 30 minutes. While the dough is resting, prepare the filling. Heat 2 tablespoons of vegetable oil in a pan over medium heat. Add the cumin seeds and let them splutter. Then add the chopped onions and sauté until they turn golden brown. Add the minced garlic, grated ginger, and chopped green chili (if using). Sauté for another minute until fragrant. Add the diced potatoes and peas to the pan. Mix well.  the coriander powder, turmeric powder, garam masala, and salt to taste. Stir everything together and cook for another 5-7 minutes, mashing some of the potatoes slightly, until the flavors are well combined. Remove from heat and let the filling cool down. Once the dough has rested, divide it into equal-sized balls. Roll each ball into a thin circle (approximately 6 inches in diameter) on a lightly floured surface. Cut each rolled-out circle in half to form two semi-circles. Take one semi-circle and fold it into a cone shape, sealing the edges with water. Fill the cone with a spoonful of the prepared filling. Press the filling down gently. Fold the top edge of the cone over the filling to seal the samosa. Press the edges firmly to ensure they are sealed properly. Repeat with the remaining dough and filling. Heat vegetable oil in a deep frying pan over medium heat. Once the oil is hot, carefully place the samosas in batches and fry until they turn golden brown and crispy on all sides. Make sure not to overcrowd the pan. Once fried, remove the samosas using a slotted spoon and place them on paper towels to drain excess oil. Serve hot with your favorite chutney or sauce.' ,
    }
]

async function seedDB(){
    await Recipe.insertMany(recipes) ;
}

module.exports = seedDB ;