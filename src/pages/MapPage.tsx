import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css";
import {Key, useEffect, useState} from "react";
import icon from "../assets/images/zookedex.svg"
import axios from "axios";

function MapPage() {

    const mapPosition: [number, number] = [50.110924, 8.682127];
    const zoom = 10
    const [markerPosition, setMarkerPosition] = useState<[number, number][]>([]);
    const [animaleName, setAnimaleName] = useState<String[]>([]);

    useEffect(() => {
        axios.get("/collection").then((res) => {
            for (let i in res.data) {
                setAnimaleName(animaleName => [...animaleName, res.data[i].name]);
                for (let j in res.data[i].gallery) {
                    setMarkerPosition(markerPosition => [
                        ...markerPosition,
                        [
                            res.data[i].gallery[j].latitude,
                            res.data[i].gallery[j].longitude,
                        ]
                    ])
                }
            }

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
            <>
            {markerPosition.map((pos, index) => {
                console.log(animaleName[index]);
                return(
                    <Marker key={index as Key} position={pos}>
                        <Popup>
                            {animaleName[index]}
                        </Popup>
                    </Marker>
                )
            })}
            </>

        </MapContainer>
    )
}

export default MapPage