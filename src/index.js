import { readFile } from 'fs/promises';
import uniqueRandomArray from 'unique-random-array';


const starWarsNames = JSON.parse(await readFile(new URL('./starwars-names.json', import.meta.url)));
const getRandomItem = uniqueRandomArray(starWarsNames);

export default {
    all: starWarsNames,
    random: random
};

function random(number) {
    if (number === undefined) {
        return getRandomItem();
    } else {
        var randomItems = [];
        for (var i = 0; i < number; i++) {
            randomItems.push(getRandomItem());
        }
        return randomItems;
    }
}