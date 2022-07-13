import axios from 'axios';
import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

function CameraPage() {

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
        <form>
            <input
                accept="image/*"
                id="icon-button-file"
                type="file"
                capture="environment"
                onChange={(e) => handleFileChange(e)}
            />
        </form>
    );
}
export default CameraPage;