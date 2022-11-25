import * as SQLite from "expo-sqlite";
import Place from "../models/Place";

const database = SQLite.openDatabase("places.db");

export function init() {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS places(
        id INTEGER PRIMARY KEY NOT NULL,
        title TEXT NOT NULL,
        imageUri TEXT NOT NULL,
        address TEXT NOT NULL,
        lat REAL NOT NULL,
        long REAL NOT NULL
      )`,
        [],
        (_) => {
          resolve(_);
        },
        (_, error): boolean | any => {
          reject(error);
        }
      );
    });
  });
  return promise;
}

export function insertPlace(place: Place) {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `
        INSERT INTO places (title, imageUri, address, lat, long) VALUES(?, ?, ?, ?, ?)`,
        [
          place.title,
          place.imageUri,
          place.location.address || "",
          place.location.lat,
          place.location.long,
        ],
        (_, result) => {
          resolve(result);
        },
        (_, error): boolean | any => {
          reject(error);
        }
      );
    });
  });
  return promise;
}

export function fetchPlaces() {
  const promise = new Promise<Place[]>((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `SELECT * from places`,
        [],
        (_, result) => {
          const places = result.rows._array.map(
            ({ id, title, imageUri, address, lat, long }) =>
              new Place(id, title, imageUri, {
                address,
                lat,
                long,
              })
          );
          resolve(places);
        },
        (_, error): boolean | any => {
          reject(error);
        }
      );
    });
  });
  return promise;
}

export function fetchPlace(id: string) {
  const promise = new Promise<Place>((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM places WHERE id = ?`,
        [id],
        (_, result) => {
          const { id, title, imageUri, address, lat, long } =
            result.rows._array[0];
          const place = new Place(id, title, imageUri, { address, lat, long });
          resolve(place);
        },
        (_, error): boolean | any => {
          reject(error);
        }
      );
    });
  });
  return promise;
}
