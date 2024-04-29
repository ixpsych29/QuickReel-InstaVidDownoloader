import React, { useState } from "react";
import axios from "axios";

function DownloadForm() {
  const [url, setUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");
  const [error, setError] = useState("");

  const handleDownload = async () => {
    try {
      const response = await axios.get("http://localhost:5000/download", {
        params: { url },
      });
      console.log(response.data); // Log the response data to check its structure
      const { videoUrl, downloadUrl } = response.data;
      if (videoUrl && downloadUrl) {
        setVideoUrl(videoUrl);
        setDownloadUrl(downloadUrl);
        setError("");
      } else {
        setError("Response data is missing videoUrl or downloadUrl");
      }
    } catch (error) {
      console.error(error);
      setError("Failed to fetch video");
    }
  };

  const handleClear = () => {
    setVideoUrl("");
    setDownloadUrl("");
    setError("");
  };

  return (
    <div>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter Instagram Reel URL"
        className="border border-gray-300 rounded px-4 py-2 mb-4"
      />
      <button
        onClick={handleDownload}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Download
      </button>
      {error && <div className="text-red-500">{error}</div>}
      {videoUrl && (
        <div className="mt-4">
          <video src={videoUrl} controls className="w-full" />
          <a href={videoUrl} download>
            Download Video
          </a>
          <button
            onClick={handleClear}
            className="bg-red-500 text-white px-4 py-2 rounded ml-2"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default DownloadForm;
