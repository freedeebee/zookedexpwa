import React, { useState } from 'react';

function CameraPage() {

  return (
    <div>
          <h5>Capture your image</h5>
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