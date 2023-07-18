import "mapbox-gl/dist/mapbox-gl.css";
import Map, {
  Marker,
  NavigationControl,
  FullscreenControl,
  GeolocateControl,
} from "react-map-gl";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Mapbox = () => {

    const API_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;
    const [lng, setLng] = useState(-105.31581418746562);
    const [lat, setLat] = useState(39.643772795122445);

    return (
        <section className='mapbox_section'>
            <Map
                mapboxAccessToken={API_TOKEN}
                style={{
                width: "100%",
                height: "100%",
                }}
                scrollZoom={false}
                initialViewState={{
                longitude: lng,
                latitude: lat,
                zoom: 13,
                }}
                mapStyle="mapbox://styles/kryptonix/clk88b3xg00l301pfh6gdehrp"
            >
                <Marker longitude={lng} latitude={lat}>
                    <div className="map_marker">
                        <FontAwesomeIcon className="icon" icon={faLocationDot}/>
                    </div>
                </Marker>
                <NavigationControl position="bottom-right" />
                <FullscreenControl />
                <GeolocateControl />
            </Map>
        </section>
    )
}

export default Mapbox