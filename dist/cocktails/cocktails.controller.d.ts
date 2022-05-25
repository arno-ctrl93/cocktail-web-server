export declare class CocktailsController {
    findAll(): Promise<import("../DTO/SimpleCocktailDTO").SimpleCocktailDTO[] | {
        id: number;
        message: string;
    }>;
    findOne(id: string): Promise<import("../DTO/DetailledCocktailDTO").DetailledCocktailDTO | {
        id: number;
        message: string;
    }>;
    findByName(name: string): Promise<import("../DTO/DetailledCocktailDTO").DetailledCocktailDTO | {
        id: number;
        message: string;
    }>;
    findByFirstLetter(letter: string): Promise<import("../DTO/DetailledCocktailDTO").DetailledCocktailDTO | {
        id: number;
        message: string;
    }>;
    findRandom(): Promise<import("../DTO/DetailledCocktailDTO").DetailledCocktailDTO | {
        id: number;
        message: string;
    }>;
}
