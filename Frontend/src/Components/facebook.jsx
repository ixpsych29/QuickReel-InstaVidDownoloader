import React from "react";
import DownloadForm from "./DownloadForm";

const Facebook = ({ toolName }) => {
  return (
    <div className=" h-auto mt-64 flex justify-center items-center">
      <div className="max-w-md w-full bg-gray-200 p-8 rounded-lg shadow-lg flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4 text-center">
          {toolName} Reel Downloader
        </h1>
        <DownloadForm toolName={toolName} />
      </div>
    </div>
  );
};

export default Facebook;
