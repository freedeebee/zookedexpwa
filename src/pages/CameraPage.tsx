import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CameraPage() {

  return (
    <div>
          <input
            accept="image/*"
            id="icon-button-file"
            type="file"
            capture="environment"
            onChange={(e) => console.log(e.target)}
          />
          
    </div>
  );
}
export default CameraPage;