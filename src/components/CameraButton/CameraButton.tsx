import axios from "axios";
import { StyledCameraButton } from "./styles";
import { BsCameraFill } from 'react-icons/bs'
import { useEffect, useState } from "react";

function CameraButton() {

    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            setLatitude(String(position.coords.latitude));
            setLongitude(String(position.coords.longitude));
            console.log("func1")
        });
    }, [])
    
    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
        // @ts-ignore
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('image', file);
        formData.append("latitude", latitude);
        formData.append("longitude", longitude);

        console.log("func2")

        axios
            .post("/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };
        
    return (
        <StyledCameraButton>
            <BsCameraFill />
            <input
                accept="image/*"
                id="icon-button-file"
                type="file"
                capture="environment"
                onChange={(e) => handleFileChange(e)}
            />
        </StyledCameraButton>
    );
}

export default CameraButton