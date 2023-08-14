import { writable } from "svelte/store";

export const chordStore = writable([
    {
        id: 'A',
        chords: ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#']
    },
    {
        id: 'A#',
        chords: ['A#','C','D','D#','F','G','A']
    },
    {
        id: 'B',
        chords: ['B','C#','D#','E','F#','G#','A#']
    },
    {
        id: 'C',
        chords: ['C','D','E','F','G','A','B']
    },
    {
        id: 'C#',
        chords: ['C#','D#','F','F#','G#','A#','C']
    },
    {
        id: 'D',
        chords: ['D','E','F#','G','A','B','C#']
    },
    {
        id: 'D#',
        chords: ['D#','F','G','G#','A#','C','D']
    },
    {
        id: 'E',
        chords: ['E','F#','G#','A','B','C#','D#']
    },
    {
        id: 'F',
        chords: ['F','G','A','A#','C','D','E']
    },
    {
        id: 'F#',
        chords: ['F#','G#','A#','B','C#','D#','F']
    },
    {
        id: 'G',
        chords: ['G','A','B','C','D','E','F#']
    },
    {
        id: 'G#',
        chords: ['G#','A#','C','C#','D#','F','G']
    }
]);


export const chordNumbers = writable([
    'I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii'
]);

export const modeNames = writable([
    'Ionian', 'Dorian', 'Phyrgian', 'Lydian', 'Mixolydian', 'Aeolian', 'Locrian'
]);
