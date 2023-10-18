export type IData = {
  attributes: IAttr;
};

export type IAttr = {
  fullname?: string;
  lastName?: string;
  current_team: string;
  birth_country: string;
  position: string;
  age: number;
  height: number;
  weight: number;
  goals?: number;
  minutes_played?: number;
  matches_played?: number;
  assists_made?: number;
  market_value?: number;
  foot?: string;
  team?: string;
  primary_position?: string;
};
