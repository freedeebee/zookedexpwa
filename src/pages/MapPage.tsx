import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css";
import {useEffect, useState} from "react";
import icon from "../assets/images/zookedex.svg"
import axios from "axios";

function MapPage() {

    const mapPosition: [number, number] = [50.110924, 8.682127];
    const zoom = 10
    const [markerPosition, setMarkerPosition] = useState<[number, number]>([9999,9999]);
    const [animalName, setAnimalName] = useState<String>("");

    useEffect(() => {
        axios.get("/collection").then((res) => {
            setAnimalName(res.data["2"].name);
            setMarkerPosition([res.data["2"].gallery[0].latitude, res.data["2"].gallery[0].longitude]);
        }).catch(err => {
            console.log(err);
        })
    }, [])

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
        <MapContainer center={mapPosition} zoom={zoom} scrollWheelZoom={true} style={{ height:`calc(100vh - 100px)`}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={markerPosition}>
                <Popup>
                    {animalName}
                </Popup>
            </Marker>
            <Marker position={[50.115055, 8.703104]}>
                <Popup>
                    Chinese Alligator
                </Popup>    
            </Marker>
            <Marker position={[51.769189, 19.408933]}>
                <Popup>           
                    Shark
                </Popup>
            </Marker>
            <Marker position={[-23.482259, 22.328281]}>
                <Popup>           
                    Rhino
                </Popup>
            </Marker>

        </MapContainer>
    )
}

export default MapPage