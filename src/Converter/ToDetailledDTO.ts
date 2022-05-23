import { Console } from "console";
import { DetailledCocktailDTO } from "src/DTO/DetailledCocktailDTO";

function IngredientToList(cocktail: any): string[] {
    const ingredients: string[] = [];
    for (let i = 1; i < 16 && cocktail['strIngredient' + i] != null; i++) {
        ingredients.push(cocktail['strIngredient' + i]);
    }
    return ingredients;
}

function MeasurementToList(cocktail: any): string[] {
    const measurements: string[] = [];
    for (let i = 1; i < 16 && cocktail['strMeasure' + i] != null; i++) {
        measurements.push(cocktail['strMeasure' + i]);
    }
    return measurements;
}


export function OneToDTO(request: any): DetailledCocktailDTO {
    const cocktailDTO: DetailledCocktailDTO = request.data.drinks.map(cocktail => ({
        id: cocktail.idDrink,
        name: cocktail.strDrink,
        image: cocktail.strDrinkThumb,
        instructions: cocktail.strInstructions,
        ingredients: IngredientToList(cocktail),
        mesurements: MeasurementToList(cocktail),
        Category: cocktail.strCategory,
        Glass: cocktail.strGlass,
    }));
    //console.log(cocktailDTO);
    return cocktailDTO;
}