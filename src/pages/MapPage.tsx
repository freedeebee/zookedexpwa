import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import icon from "../assets/images/zookedex.svg"

function MapPage() {

    const mapPosition: [number, number] = [50.110924, 8.682127];
    const zoom = 10
    const markerPosition: [number, number][] = [
        [50.1158148, 8.6348734]
    ];

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
        <MapContainer center={mapPosition} zoom={zoom} scrollWheelZoom={false} style={{ height:`calc(100vh - 100px)`}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {markerPosition.map(p => {
                return(
                    <Marker key={p[1]} position={p}>
                        <Popup>
                            Lion
                        </Popup>
                    </Marker>
                )
            })}
        </MapContainer>
    )
}

export default MapPage