// код пишем здесь.

const simpleDwarf = {
    name: 'Torin',
    level: 15,
    fraction: 'Dwarwes'
};

const middleDwarf = {
    name: 'Balin',
    level: 14,
    fraction: 'Dwarwes',
    skills: {
        melee: 13,
        archery: 2
    }
};

const DWARWES_AREAS = {
    Moria: {
        population: 1000,
        king: 'Balin'
    },
    IronHills: {
        population: 50000,
        king: 'Dain'
    },
    Erebor: {
        population: 34000,
        king: 'Tror'
    }
}

/*
3. Теперь поработаем с методами объектов. У нас есть объект `DWARWES_AREAS`, который содержит данные о местах проживания гномов. Нужно создать массив, в котором будут содержаться только названия локаций (то есть, ключи объекта `DWARWES_AREAS`), отсортировать его в алфавитном порядке, и вывести в консоль.
*/

// console.log(Object.keys(DWARWES_AREAS).sort());

/*
4. Теперь создаем массив объектов с данными о местах проживания гномов (значения ключей объекта `DWARWES_AREAS`), сортируем его по возрастанию населения (`population`), и выводим в консоль.
*/

// const res = Object.values(DWARWES_AREAS).sort( (a,b) => a.population - b.population );
// console.log(res);

// const entriesDwarwes = Object.entries(DWARWES_AREAS).map(
//     ([name, data]) => {
//         console.log(name, data)
//         return {
//             name: name,
//             ...data
//         }
//     }
// );

// entriesDwarwes.sort((a, b) => a.population - b.population);
// console.log(entriesDwarwes);

/*
5. Нужно получить массив всех гномьих королей. То есть, пройтись по свойствам объекта `DWARWES_AREAS`, взять из каждого данные по королю, и сложить в массив. Результат вывести в консоль.
*/
// const kings = Object.values(DWARWES_AREAS).map( elem => elem.king );
// console.log(kings);

/*
6. Собираем данные по королям и локациям. Нужно получить объект, где в качестве ключей будут использоваться локации, а в качестве значений  - имя правителя этой локации.
```
{
  Moria: Balin,
  IronHills: Dain,
  Erebor: Tror
}
```
*/
// let result = Object.entries(DWARWES_AREAS).reduce( (accum, [key, value]) => {
//     accum[key] = value.king;
//     return accum;
// }, {})

// console.log('Result', result)

/*
7. Сделаем тренажер гномов. Пишем функцию `dwarfMeleeTraining`. Она примет на вход объект-гнома. У гнома есть ОБЪЕКТ `weapons`, где содержатся данные о его вооружении и умении им владеть. Нужно пройтись по значениям этого объекта, и для каждого оружия с `type = melee` увеличить `skill` на 1. То есть, учим гномов рукопашной. При этом, нужно выводить в консоль протокол: вида "sword skll had been increased!".
*/

const seriousDwarf = {
    name: 'Karst',
    level: 12,
    fraction: 'Dwarwes',
    weapons: {
        sword: {
            type: 'melee',
            skill: 12,
        },
        axe: {
            type: 'melee',
            skill: 14
        },
        crossbow: {
            type: 'archery',
            skill: 3
        }
    }
};

function dwarfMeleeTraining(dwarf) {
    Object.entries(dwarf.weapons).forEach( ([weaponName, data]) => {
        if (data.type === 'melee') {
            console.log(`${weaponName} skill had been increased!`);
            data.skill += 1;
        }
    });
}

dwarfMeleeTraining(seriousDwarf);
//console.log(seriousDwarf);

/*
8. Теперь пишем функцию `archeryControl` - она должна определить вооружения дальнего боя у гнома. Принимает на вход объект-гнома, и должна вернуть массив, который содержит названия вооружений, у которых категория - `archery`.
*/

function archeryControl(dwarf) {
    return Object.entries(dwarf.weapons).reduce( ( acc, [weaponName, data] ) => {
        if (data.type === 'archery') {
            acc.push(weaponName);
        }
        return acc;
    }, []);
}

console.log(archeryControl(seriousDwarf));