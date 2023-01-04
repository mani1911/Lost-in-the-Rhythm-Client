import React, { useState } from "react";
import Webcam from "react-webcam";
import { RiRecordCircleLine } from "react-icons/ri";
const WebcamCustom = ({ webcamRef, startPosenet, stopPosenet }) => {
  const [isRecording, setIsRecording] = useState(false);
  const webcamRecordStartHandler = () => {
    setIsRecording(true);
    startPosenet();
  };
  const webcamRecordEndHandler = () => {
    stopPosenet();
    setIsRecording(false);
  };
  return (
    <div className="flex flex-col items-center">
      <p className="text-lg font-bold mb-3">
        {isRecording
          ? "Start Dancing !"
          : "This is the Platform...To show your Moves!"}
      </p>
      <Webcam
        ref={webcamRef}
        audio={false}
        height={480}
        screenshotFormat="image/jpeg"
        width={640}
      ></Webcam>
      {isRecording ? (
        <RiRecordCircleLine
          onClick={webcamRecordEndHandler}
          size={70}
          className="mt-2 hover:cursor-pointer fill-red-600 hover:fill-white"
        />
      ) : (
        <RiRecordCircleLine
          onClick={webcamRecordStartHandler}
          size={70}
          className="mt-2 hover:cursor-pointer hover:fill-green-400"
        />
      )}
    </div>
  );
};

export default WebcamCustom;
