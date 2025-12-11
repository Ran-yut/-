export interface OrnamentData {
  id: string;
  position: [number, number, number];
  color: string;
  scale: number;
  type: 'sphere' | 'diamond' | 'star';
}

export interface Wish {
  id: string;
  text: string;
  timestamp: number;
}