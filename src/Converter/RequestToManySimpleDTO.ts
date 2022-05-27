import { SimpleCocktailDTO } from "src/DTO/SimpleCocktailDTO";


export function RequestToManySimpleDTO(request: any): SimpleCocktailDTO[] {
    const cocktailsDTO: SimpleCocktailDTO[] = request.data.drinks.map(cocktail => ({
        id: cocktail.idDrink,
        name: cocktail.strDrink,
        image: cocktail.strDrinkThumb,
    }));
    return cocktailsDTO;
}