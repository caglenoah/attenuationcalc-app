import { useState, useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import usePlacesAutocomplete, {
    getgitGeocode,
    getLatLng,
    //getElevation
} from "use-places-autocomplete";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

export default function Places() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        libraries: ["places"],
    });
    if (!isLoaded) return <div>Loading...</div>;
    return <Map />;
}

// still need this function???
export default function Home() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });
    if (!isLoaded) return <div>Loading...</div>
    return <div>Map </div>
}

function Map() {
    const center = useMemo(() => ({ lat: 44, lnd: -80 }), []);
    const [selected, setSelected] = useState(null);

    return (
        <>
        <GoogleMap
            zoom={10}
            center={{ lat: 44, lng: -80 }}
            mapContainerClassName="map-container"
        >
                {slected && <Marker positin={selected} />}
            </GoogleMap>
            </>
    );
} 

const PlacesAutocomplete = ({ setSelected }) => {
    const {
        ready,
        value,
        setValue,
        suggestions: { status, data },
    clearsSuggestions,
    } = usePlacesAutocomplete();

    const handleSelect = async (address) => {
        setValue(address, false);
        clearsSuggestions();

        const results = await getGeocode({ address });
        const { lat, lng } = await getLatLng(results[0]);
        setSelected({ lat, lng });
    };

    return <Combobox onSelect={handleSelect}>
        <ComboboxInput value={value} onChange={(e) => setValue(e.target.value)} disabled={!ready}
            className="combobox-input"
            placeholder="Swearch an address"
        /> 
        <ComboboxPopover>
            <ComboboxList>
                {status === "OK" && data.map(({ place_id, description }) => (
                    <ComboboxOption key={plae_id} value={description} />
                ))}
            </ComboboxList>
         </ComboboxPopover>
    </Combobox>
}


// resources
// map initial component https://www.youtube.com/watch?v=9e-5QHpadi0&t=1s
// map autofill https://www.youtube.com/watch?v=BL2XVTqz9Ek&t=6s