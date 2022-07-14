import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

function MapPage() {

    const mapPosition: [number, number] = [50.110924, 8.682127];

    useEffect(() => {
        const L = require("leaflet");
    
        delete L.Icon.Default.prototype._getIconUrl;
    
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
          iconUrl: require("leaflet/dist/images/marker-icon.png"),
          shadowUrl: require("leaflet/dist/images/marker-shadow.png")
        });
      }, []);
    

    return (
        <MapContainer center={mapPosition} zoom={13} scrollWheelZoom={false} style={{ height:`calc(100vh - 100px)`}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={mapPosition}>
                <Popup>
                    Tier
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default MapPage