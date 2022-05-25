"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OneToDTO = void 0;
function IngredientToList(cocktail) {
    const ingredients = [];
    for (let i = 1; i < 16 && cocktail['strIngredient' + i] != null; i++) {
        ingredients.push(cocktail['strIngredient' + i]);
    }
    return ingredients;
}
function MeasurementToList(cocktail) {
    const measurements = [];
    for (let i = 1; i < 16 && cocktail['strMeasure' + i] != null; i++) {
        measurements.push(cocktail['strMeasure' + i]);
    }
    return measurements;
}
function OneToDTO(request) {
    const cocktailDTO = request.data.drinks.map(cocktail => ({
        id: cocktail.idDrink,
        name: cocktail.strDrink,
        image: cocktail.strDrinkThumb,
        instructions: cocktail.strInstructions,
        ingredients: IngredientToList(cocktail),
        mesurements: MeasurementToList(cocktail),
        Category: cocktail.strCategory,
        Glass: cocktail.strGlass,
    }));
    return cocktailDTO;
}
exports.OneToDTO = OneToDTO;
//# sourceMappingURL=ToDetailledDTO.js.map