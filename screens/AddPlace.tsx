import PlaceForm from "../components/Places/PlaceForm";
import Place from "../models/Place";
import { RootNavigationProp } from "../navigation/navigator/Navigator";
import { insertPlace } from "../utils/database";

interface AddPlaceProps {
  navigation: RootNavigationProp;
}

function AddPlace({ navigation }: AddPlaceProps) {
  function createPlaceHandler(place: Place) {
    insertPlace(place)
      .then(() => {
        navigation.navigate("AllPlaces");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return <PlaceForm onSave={createPlaceHandler} />;
}

export default AddPlace;
