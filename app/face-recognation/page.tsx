"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Page = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [webcamActive, setWebcamActive] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);

  const startWebcam = async () => {
    try {
      const userMediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = userMediaStream;
        setStream(userMediaStream);

        // Wait for the metadata to load
        videoRef.current.onloadedmetadata = () => {
          setWebcamActive(true);
        };
      }
    } catch (error) {
      console.error("Error accessing webcam:", error);
    }
  };

  const stopWebcam = () => {
    if (stream) {
      stream.getTracks().forEach((track) => {
        track.stop();
      });
      setStream(null);
      setWebcamActive(false);
    }
  };

  useEffect(() => {
    startWebcam();
  }, []);

  return (
    <main className="font-poppins text-3xl flex flex-col items-center justify-center h-screen">
      <h1>
        Give Your Best <span className="text-orange-500 font-bold">Smile</span>
        😊
      </h1>
      <video
        id="video"
        ref={videoRef}
        className="rounded-3xl bg-black m-5"
        autoPlay
        muted
      />
      <Link href="/success">
        <Button className="rounded-full px-12 text-lg hover:bg-white hover:border-2 hover:text-blue-500 hover:border-blue-500" onClick={stopWebcam}>
          Capture
        </Button>
      </Link>
    </main>
  );
};

export default Page;
