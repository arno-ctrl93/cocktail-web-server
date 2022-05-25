"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllToDTO = void 0;
function AllToDTO(request) {
    const cocktailsDTO = request.data.drinks.map(cocktail => ({
        id: cocktail.idDrink,
        name: cocktail.strDrink,
        image: cocktail.strDrinkThumb,
    }));
    return cocktailsDTO;
}
exports.AllToDTO = AllToDTO;
//# sourceMappingURL=ToSimpleDTO.js.map