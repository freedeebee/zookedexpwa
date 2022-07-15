import axios from "axios";
import { StyledCameraButton } from "./styles";
import { BsCameraFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CameraButton() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(String(position.coords.latitude));
      setLongitude(String(position.coords.longitude));
    });
  }, []);

  const handleFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    // @ts-ignore
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
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
        navigate("/");
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

export default CameraButton;
