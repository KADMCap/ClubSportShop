export interface Ticket {
  id: string;
  date: string;
  stadium: string;
  league: string;
  game: Game;
  seats: Seat[];
}

export interface Game {
  id: string;
  round: number;
  short: string;
  host: string;
  guest: string;
}

export interface Seat {
  seat: string;
  userName: string;
}
