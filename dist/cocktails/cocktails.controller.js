"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CocktailsController = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const ToSimpleDTO_1 = require("../Converter/ToSimpleDTO");
const ToDetailledDTO_1 = require("../Converter/ToDetailledDTO");
let CocktailsController = class CocktailsController {
    async findAll() {
        const request = await axios_1.default.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
        if (request.data.drinks == null) {
            return { id: -404, message: 'Cocktails not found' };
        }
        return (0, ToSimpleDTO_1.AllToDTO)(request);
    }
    async findOne(id) {
        console.log(id);
        const request = await axios_1.default.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id);
        console.log(request.data.drinks);
        if (request.data.drinks == null) {
            return { id: -404, message: 'Cocktail not found by id ' + id };
        }
        return (0, ToDetailledDTO_1.OneToDTO)(request);
    }
    async findByName(name) {
        const request = await axios_1.default.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + name);
        console.log(request.data.drinks);
        if (request.data.drinks == null) {
            return { id: -404, message: 'Cocktail not found by name ' + name };
        }
        return (0, ToDetailledDTO_1.OneToDTO)(request);
    }
    async findByFirstLetter(letter) {
        const request = await axios_1.default.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=' + letter);
        console.log(request.data.drinks);
        if (request.data.drinks == null) {
            return { id: -404, message: 'Cocktail not found by first letter ' + letter };
        }
        return (0, ToDetailledDTO_1.OneToDTO)(request);
    }
    async findRandom() {
        const request = await axios_1.default.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
        console.log(request.data.drinks);
        if (request.data.drinks == null) {
            return { id: -404, message: 'Cocktail not found by random' };
        }
        return (0, ToDetailledDTO_1.OneToDTO)(request);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CocktailsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/searchbyid/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CocktailsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('/searchbyname/:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CocktailsController.prototype, "findByName", null);
__decorate([
    (0, common_1.Get)('/searchbyfirstletter/:letter'),
    __param(0, (0, common_1.Param)('letter')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CocktailsController.prototype, "findByFirstLetter", null);
__decorate([
    (0, common_1.Get)('/random'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CocktailsController.prototype, "findRandom", null);
CocktailsController = __decorate([
    (0, common_1.Controller)('cocktails')
], CocktailsController);
exports.CocktailsController = CocktailsController;
//# sourceMappingURL=cocktails.controller.js.map