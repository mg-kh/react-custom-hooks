import { useState, useEffect } from "react";

const useDetectNetworkSpeed = () => {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const generateNetworkSpeed = (downlink) => {
      switch (true) {
        case downlink === 0:
          setStatus("offline");
          break;
        case downlink < 1:
          setStatus("very slow");
          break;
        case downlink >= 1 && downlink < 5:
          setStatus("slow");
          break;
        case downlink >= 5 && downlink < 10:
          setStatus("moderate");
          break;
        case downlink >= 10 && downlink < 25:
          setStatus("fast");
          break;
        case downlink >= 25 && downlink < 50:
          setStatus("very fast");
          break;
        case downlink >= 50:
          setStatus("ultra fast");
          break;

        default:
          setStatus("something went wrong");
          break;
      }
    };
    const { downlink } = navigator.connection;
    generateNetworkSpeed(downlink);
    navigator.connection.addEventListener("change", () => {
      const { downlink } = navigator.connection;
      generateNetworkSpeed(downlink);
    });
  }, []);

  return {
    status,
  };
};
export default useDetectNetworkSpeed;
