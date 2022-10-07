export interface WCoord {
  lon: number;
  lat: number;
}

export interface WMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level?: number;
  grnd_level?: number;
}

export interface WWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WClouds {
  all: number;
}

export interface WWind {
  speed: number;
  deg: number;
  gust: number;
}

export interface Weather {
  id: number;
  name: string;
  cod: number;
  dt: number;
  base: string;
  weather: WWeather[];
  main: WMain;
  wind: WWind;
  clouds: WClouds;
  coord: WCoord;
  visibility: string;
  sys?: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  rain?: {
    [type: string]: number;
  };
  timezone: number;
}