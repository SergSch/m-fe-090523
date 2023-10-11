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