
export enum GameState {
  START,
  PLAYING,
  CUTSCENE,
  END,
}

export interface Dialogue {
  character: 'Pip' | 'Luna' | 'Narrator' | 'System';
  text: string;
}

export interface GameplayElement {
  id: string;
  type: 'orb' | 'totem' | 'nectar' | 'switch' | 'rock' | 'orb-slot';
  position: { top: string; left: string };
}

export interface Chapter {
  id: number;
  title: string;
  theme: string;
  goal: string;
  story: Dialogue[];
  cutscene: string;
  background: string;
  elements: GameplayElement[];
  collectGoal: number;
}
