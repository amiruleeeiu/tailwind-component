import React, { useState } from "react";
import UserService from "UserService";

const FileUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [uploading, setUploading] = useState<boolean>(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      uploadFile(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setDragActive(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
      uploadFile(e.dataTransfer.files[0]);
    }
  };

  // Simulate a file upload API call
  const uploadFile = (file: File) => {
    setUploading(true);

    // Create a new FormData object to mimic a real upload
    const formData = new FormData();
    formData.append("file", file);

    const fakeUploadDuration = 5000; // Simulate 5 seconds for uploading

    // Simulate a fake API call with fetch
    fetch("https://uat-beprc.oss.net.bd/api/upload", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${UserService.getToken()}`, // Add the token here
      },
      body: formData,
    })
      .then(() => {
        const interval = setInterval(() => {
          setUploadProgress((prev) => {
            const nextProgress = prev + 10;
            if (nextProgress >= 100) {
              clearInterval(interval);
              setUploading(false);
              return 100;
            }
            return nextProgress;
          });
        }, fakeUploadDuration / 10); // Update every 10th of the total duration
      })
      .catch((error) => {
        console.error("File upload failed:", error);
        setUploading(false);
      });
  };

  console.log(uploading);

  return (
    <>
      <label
        htmlFor="file-upload"
        className={`border-2 border-dashed ${
          dragActive ? "border-green-400" : "border-blue-400"
        } rounded-lg p-6 flex flex-col items-center justify-center text-center h-48 relative`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <label
          htmlFor="file-upload"
          className="cursor-pointer flex flex-col items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
          </svg>
          <span className="mt-1 px-6 py-1 text-white shadow-xl bg-sky-500 rounded-full">
            Browse
          </span>
          <input
            id="file-upload"
            type="file"
            // accept=".png,.jpg,.webp"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
        <p className="mt-1 text-sm text-gray-400">or drop a file here</p>
        <p className="text-md font-normal text-red-500">
          *File supported .png, .jpg & .webp
        </p>
        <div
          className={`${
            file ? "opacity-100 translate-y-2" : "opacity-0 translate-y-0"
          } transition-all duration-500 ease-in-out`}
        >
          {file && (
            <p className="text-sm text-green-500">{file.name} selected</p>
          )}
        </div>
        {file && uploading && (
          <div className="w-full mt-4 text-center">
            <div className="w-full bg-gray-200 rounded h-6 relative">
              <div
                className="bg-green-500 h-6 rounded"
                style={{ width: `${uploadProgress}%` }}
              ></div>
              <p className="font-medium absolute inset-0 flex items-center justify-center text-gray-600">
                {uploadProgress}%
              </p>
            </div>
          </div>
        )}
      </label>
    </>
  );
};

export default FileUpload;
