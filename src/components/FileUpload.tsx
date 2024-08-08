import React, { ChangeEvent, useState } from "react";

interface FileUploadProps {
  onUpload?: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onUpload }) => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadPercentage, setUploadPercentage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      // Simulate file upload with a mock API call
      await fakeUploadAPI(formData, setUploadPercentage);
      if (onUpload) onUpload(file);
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setIsLoading(false);
      setUploadPercentage(0);
      setFile(null);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <input
        type="file"
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />
      {isLoading && (
        <div className="w-full bg-gray-200 rounded-full mt-4">
          <div
            className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
            style={{ width: `${uploadPercentage}%` }}
          >
            {uploadPercentage}%
          </div>
        </div>
      )}
      <button
        onClick={handleUpload}
        disabled={isLoading || !file}
        className={`mt-4 w-full px-4 py-2 text-white rounded ${
          isLoading
            ? "bg-blue-300 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {isLoading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
};

// Fake API to simulate file upload progress
const fakeUploadAPI = (
  formData: FormData,
  setUploadPercentage: React.Dispatch<React.SetStateAction<number>>
): Promise<void> => {
  return new Promise((resolve) => {
    let percentage = 0;
    const interval = setInterval(() => {
      percentage += 10;
      setUploadPercentage(percentage);
      if (percentage >= 100) {
        clearInterval(interval);
        resolve();
      }
    }, 500);
  });
};

export default FileUpload;
