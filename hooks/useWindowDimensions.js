import React, { useEffect, useState } from "react";



const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    {
        width: undefined,
        height: undefined
    }
  );

  useEffect(() => {

    if(typeof window !== "undefined"){
        function handleResize(){
            setWindowDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;
