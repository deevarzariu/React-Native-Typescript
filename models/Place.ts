import { Coordinates } from "./Coordinates";

class Place {
  title: string;
  imageUri: string;
  location: Coordinates;
  id: number;

  constructor(
    id: number,
    title: string,
    imageUri: string,
    location: Coordinates
  ) {
    this.id = id;
    this.title = title;
    this.imageUri = imageUri;
    this.location = location;
  }
}

export default Place;
