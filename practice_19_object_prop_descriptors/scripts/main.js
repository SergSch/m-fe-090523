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