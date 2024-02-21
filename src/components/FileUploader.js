import React from "react";

const FileUploader = ({ onFileUpload }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onFileUpload(file);
  };

  return (
    <div className="mt-10">
      <input
        className="px-10 mb-5"
        type="file"
        accept=".mp3, .mp4"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default FileUploader;
