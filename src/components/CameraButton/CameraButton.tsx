import axios from "axios";
import { StyledCameraButton } from "./styles";
import { BsCameraFill } from 'react-icons/bs'

function CameraButton() {
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        // @ts-ignore
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('image', file)

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