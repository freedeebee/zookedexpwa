import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import icon from "../assets/images/zookedex.svg"

function MapPage() {

    const mapPosition: [number, number] = [50.110924, 8.682127];
    const zoom = 10
    const markerPosition: [number, number][] = [
        [50.120924, 8.682127],
        [50.110924, 8.692127],
        [50.110924, 8.702127],
        [50.110924, 8.712127],
    ];
    
    function getLocation() {
        console.log("test");
        navigator.geolocation.getCurrentPosition(position => {
            console.log("test2");
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
        });
        console.log("test3");
    }
    

    useEffect(() => {
        const L = require("leaflet");
    
        delete L.Icon.Default.prototype._getIconUrl;
    
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: icon,
          iconUrl: icon,
          shadowUrl: null
        });

      }, []);
    

    return (
        <>
        <button onClick={getLocation}>Get Location</button>

        <MapContainer center={mapPosition} zoom={zoom} scrollWheelZoom={false} style={{ height:`calc(100vh - 100px)`}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {markerPosition.map(p => {
                return(
                    <Marker position={p} />
                )
            })}

            <Marker position={mapPosition}>
                <Popup>
                    Tier
                </Popup>
            </Marker>
        </MapContainer>
        </>
    )
}

export default MapPage