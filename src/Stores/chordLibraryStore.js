import { writable } from "svelte/store";

export const chordStore = writable([
    {
        key: ""
    }
]);

export const chordNumbers = writable([
    'I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii'
]);

export const modeNames = writable([
    'Ionian', 'Dorian', 'Phyrgian', 'Lydian', 'Mixolydian', 'Aeolian', 'Locrian'
]);
