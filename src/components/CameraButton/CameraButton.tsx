import axios from "axios";
import { StyledCameraButton } from "./styles";
import { BsCameraFill } from 'react-icons/bs'
import { useEffect } from "react";

function CameraButton() {

    let latitude = "";
    let longitude = "";

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            latitude = String(position.coords.latitude)
            longitude = String(position.coords.longitude)
        });
    }, [])
    
    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
        // @ts-ignore
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('image', file);
        formData.append("latitude", latitude);
        formData.append("longitude", longitude);

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