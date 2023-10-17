// код пишем здесь!

const WEAPON_STORAGE = {};

const dwarfTorin = {
  name: 'Torin',
  age: 320,
  skills: ['melee', 'magic'],
  weapons: {
    sword: {
      type: 'melee',
      skill: 14
    },
    axe: {
      type: 'melee',
      skill: 18
    },
    crossbow: {
      type: 'archery',
      skill: 3
    },
    knife: {
      type: 'melee',
      skill: 11,
      allowed: true
    }
  }
}

// Object.defineProperty( dwarfTorin, 'name', { writable: false } );

// dwarfTorin.name = 'Gimli';
// console.log(dwarfTorin);

// const takeWeaponsAway = (dwarf) => {
//   return Object.keys(dwarf.weapons);
// }

// console.log(takeWeaponsAway(dwarfTorin));

/*
3. Усложняем нашу функцию - надо забрать у гнома все его оружие, кроме того, которое разрешено (`allowed = true`). Нужно чтобы наша функция теперь удаляла из `dwarf.weapons` все свойства, которые содержат запрещенное оружие, и возвращала бы объект с этим оружием.
*/

const takeWeaponsAway = (dwarf) => {
  const weaponsStorage = {};
  Object.entries(dwarf.weapons).forEach( elem => {
    const weaponKey = elem[0];
    const weaponValue = elem[1];
    if (!weaponValue.allowed) {
      delete dwarf.weapons[weaponKey];
      weaponsStorage[weaponKey] = weaponValue;
    }
  });
  return weaponsStorage;
}


/*
5. Пишем функцию `hideWeapon`, которая будет помогать нашим гномам прятать оружие от замковой стражи. Она должна принять на вход объект-гнома `dwarf`, и массив вооружений, которые гном хочет скрыть. Нужно сделать эти свойства в `dwarf.weapons` неперечислимыми.
*/

const hideWeapon = (dwarf, weapons) => {
  weapons.forEach( elem => {
    Object.defineProperty(dwarf.weapons, elem, { enumerable: false } );
  });
}

hideWeapon(dwarfTorin, ['sword', 'axe']);

const takenWeapons = takeWeaponsAway(dwarfTorin);

console.log('FINALLY', takenWeapons, dwarfTorin)