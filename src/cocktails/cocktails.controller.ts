import { Controller, Get, HttpException, HttpStatus, Param } from '@nestjs/common';
import axios from 'axios';
import { RequestToManySimpleDTO } from 'src/Converter/RequestToManySimpleDTO';
import { RequestToOneDetailledDTO } from 'src/Converter/RequestToOneDetailledDTO';


@Controller('cocktails')
export class CocktailsController {

    @Get()
    async findAll() {

        const request = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
        if (request.data.drinks == null) {
            return { id: -404, message: 'Cocktails not found' };
        }
        //console.log(response.data.drinks);
        return RequestToManySimpleDTO(request);
    }

    @Get('/searchbyid/:id')
    async findOne(@Param('id') id: string) {
        //console.log(id);
        const request = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id);
        //console.log(request.data.drinks);
        if (request.data.drinks == null) {
            return { id: -404, message: 'Cocktail not found by id ' + id };
        }
        return RequestToOneDetailledDTO(request);
    }

    @Get('/searchbyname/:name')
    async findByName(@Param('name') name: string) {
        const request = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + name);
        //console.log(request.data.drinks);
        if (request.data.drinks == null) {
            return { id: -404, message: 'Cocktail not found by name ' + name };
        }
        return RequestToOneDetailledDTO(request);
    }

    @Get('/searchbyfirstletter/:letter')
    async findByFirstLetter(@Param('letter') letter: string) {
        const request = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=' + letter);
        //console.log(request.data.drinks);
        if (request.data.drinks == null) {
            return { id: -404, message: 'Cocktail not found by first letter ' + letter };
        }
        return RequestToOneDetailledDTO(request);
    }

    @Get('/random')
    async findRandom() {
        const request = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
        //console.log(request.data.drinks);
        if (request.data.drinks == null) {
            return { id: -404, message: 'Cocktail not found by random' };
        }
        return RequestToOneDetailledDTO(request);
    }

    @Get('/random/:numberRandom')
    async findManyRandom(@Param('numberRandom') numberRandom: number) {
        const requests = new Array(Number(numberRandom)).fill(undefined).map(() => axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php'))
        try {
            const responses = await Promise.all(requests);

            return responses.map(RequestToOneDetailledDTO).flat()
        } catch (error) {
            throw new HttpException("Could not fetch random cocktails", HttpStatus.SERVICE_UNAVAILABLE)
        }
    }
}
