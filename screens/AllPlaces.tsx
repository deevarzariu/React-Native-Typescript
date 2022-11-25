import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import PlacesList from "../components/Places/PlacesList";
import Place from "../models/Place";
import { fetchPlaces } from "../utils/database";

function AllPlaces() {
  const [places, setPlaces] = useState<Place[]>([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      fetchPlaces().then((result) => {
        setPlaces(result);
      });
    }
  }, [isFocused]);

  return <PlacesList places={places} />;
}

export default AllPlaces;
