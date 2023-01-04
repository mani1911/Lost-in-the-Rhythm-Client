import React, { useRef } from "react";
import styles from "./styles.module.css";
import WebcamCustom from "../../Components/Webcam";
import * as tf from "@tensorflow/tfjs";
import * as posenet from "@tensorflow-models/posenet";
const DancePage = () => {
  const webcamRef = useRef(null);
  var func = () => {};
  const runPosenet = async () => {
    const net = await posenet.load({
      inputResolution: { width: 640, height: 480 },
      scale: 0.5,
    });

    func = setInterval(() => {
      detect(net);
    }, 100);
  };

  const detect = async (net) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      const pose = await net.estimateSinglePose(video);
      console.log(pose);
    }
  };

  const startPosenet = () => {
    runPosenet();
  };

  const stopPosenet = () => {
    clearInterval(func);
  };

  return (
    <div
      className={`${styles["dance-container"]} flex justify-center items-center`}
    >
      <div
        className={`${styles["main-container"]} flex text-white backdrop-blur-sm bg-black/60 rounded-3xl p-10 text-center w-[90%] h-[100%] overflow-hidden justify-between`}
      >
        <div className="w-[45%] bg-black h-[100%]">dvdvd</div>
        <div className="w-[45%] h-[100%]">
          <WebcamCustom
            webcamRef={webcamRef}
            startPosenet={startPosenet}
            stopPosenet={stopPosenet}
          />
        </div>
      </div>
    </div>
  );
};

export default DancePage;
