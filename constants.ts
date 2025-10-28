
import { Chapter } from './types';

export const CHAPTERS: Chapter[] = [
  {
    id: 1,
    title: 'The Awakening Island',
    theme: 'Morning clouds and floating rocks',
    goal: 'Learn movement and collect 3 golden orbs',
    story: [
      { character: 'Narrator', text: 'Luna wakes up surrounded by soft clouds. The ground trembles gently beneath her as she realizes she’s on a floating island.' },
      { character: 'Pip', text: 'Luna! You’re awake! The Sky City has fallen apart! The power orbs were scattered. You must collect them!' },
    ],
    cutscene: 'Luna: "I remember now… The city lights dimmed when the Great Crystal cracked…"',
    background: 'bg-gradient-to-b from-sky-300 to-sky-500',
    elements: [
      { id: '1-orb-1', type: 'orb', position: { top: '50%', left: '20%' } },
      { id: '1-orb-2', type: 'orb', position: { top: '30%', left: '55%' } },
      { id: '1-orb-3', type: 'orb', position: { top: '65%', left: '75%' } },
    ],
    collectGoal: 3,
  },
  {
    id: 2,
    title: 'The Valley of Echoing Clouds',
    theme: 'Misty clouds, echoing winds, gentle gusts',
    goal: 'Activate three ancient wind totems to reveal the Echo Orb',
    story: [
      { character: 'Narrator', text: 'Luna enters a realm filled with wind tunnels that lift her high above. Each jump carries her to echoing islands that whisper her name.' },
      { character: 'Pip', text: 'Careful, Luna! The winds can carry you up… or toss you off!' },
    ],
    cutscene: 'Luna: "With every orb, the city’s song grows stronger."',
    background: 'bg-gradient-to-b from-slate-400 to-slate-600',
    elements: [
      { id: '2-totem-1', type: 'totem', position: { top: '70%', left: '15%' } },
      { id: '2-totem-2', type: 'totem', position: { top: '40%', left: '45%' } },
      { id: '2-totem-3', type: 'totem', position: { top: '60%', left: '80%' } },
      { id: '2-orb-1', type: 'orb', position: { top: '15%', left: '50%' } },
    ],
    collectGoal: 3, // 3 totems, orb appears after
  },
  {
    id: 3,
    title: 'The Garden of Sky Blossoms',
    theme: 'Floating meadows, pink trees, and rainbow petals',
    goal: 'Collect nectar from 3 glowing petals to unlock the orb gate',
    story: [
      { character: 'Narrator', text: 'Luna lands in a colorful garden where flowers float in the air. The place is peaceful… until mischievous vine creatures start snapping at her boots!' },
      { character: 'Pip', text: 'Even the flowers remember the city’s music. Let’s make them bloom again!' },
    ],
    cutscene: 'Luna: "A memory stirs… Mother’s laughter echoed through these gardens. I’m close."',
    background: 'bg-gradient-to-b from-pink-300 to-purple-400',
    elements: [
      { id: '3-nectar-1', type: 'nectar', position: { top: '30%', left: '25%' } },
      { id: '3-nectar-2', type: 'nectar', position: { top: '60%', left: '50%' } },
      { id: '3-nectar-3', type: 'nectar', position: { top: '35%', left: '78%' } },
      { id: '3-orb-1', type: 'orb', position: { top: '80%', left: '50%' } },
    ],
    collectGoal: 3, // 3 nectars, orb becomes available
  },
    {
    id: 4,
    title: 'The Clockwork Peaks',
    theme: 'Floating mechanical ruins, gears, ticking soundscape',
    goal: 'Activate three sky machines to reach the Orb of Time',
    story: [
        { character: 'Narrator', text: 'The next island buzzes with mechanical noises. Broken gear towers and rusted bridges hang in the clouds.' },
        { character: 'Pip', text: 'These were the Sky Builders’ machines. They can still help you!' },
    ],
    cutscene: 'Luna: "Sky City’s heart… it’s waking up again."',
    background: 'bg-gradient-to-b from-gray-600 to-gray-800',
    elements: [
        { id: '4-switch-1', type: 'switch', position: { top: '25%', left: '15%' } },
        { id: '4-switch-2', type: 'switch', position: { top: '75%', left: '40%' } },
        { id: '4-switch-3', type: 'switch', position: { top: '45%', left: '80%' } },
        { id: '4-orb-1', type: 'orb', position: { top: '50%', left: '50%' } },
    ],
    collectGoal: 3,
  },
  {
    id: 5,
    title: 'The Ember Sky Canyon',
    theme: 'Sunset skies, glowing embers, lava clouds',
    goal: 'Survive the fiery realm and claim the Flame Orb',
    story: [
        { character: 'Narrator', text: 'As Luna steps onto the next island, the air grows hot. Firebirds dart across the canyon, leaving trails of light.' },
        { character: 'Pip', text: 'We’re almost there, Luna! But this one’s dangerous—don’t stop running!' },
    ],
    cutscene: 'Luna: "Courage lights the way…"',
    background: 'bg-gradient-to-b from-red-500 via-orange-500 to-yellow-500',
    elements: [
        { id: '5-orb-1', type: 'orb', position: { top: '50%', left: '50%' } },
    ],
    collectGoal: 1,
  },
  {
    id: 6,
    title: 'The Heart of the Sky City',
    theme: 'Rebuilt Sky City shining in the stars',
    goal: 'Place all 6 orbs into the Great Crystal',
    story: [
        { character: 'Narrator', text: 'All orbs hum together as Luna approaches the ruins of Sky City. She climbs the final tower, lightning crackling around her.' },
        { character: 'Pip', text: 'This is it, Luna! The Sky City’s heart!' },
    ],
    cutscene: 'The Great Crystal bursts into radiant light. Islands reconnect, and the city floats once more, shining across the night sky.',
    background: 'bg-gradient-to-b from-indigo-800 to-black',
    elements: [
        { id: '6-slot-1', type: 'orb-slot', position: { top: '50%', left: '50%' } },
    ],
    collectGoal: 6, // Place 6 orbs
  },
];
