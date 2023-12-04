import React, {useState, useEffect} from 'react';

const Toast = ({message}: any) => {
    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
        setTimeout(() => {
          setIsVisible(false);
        }, 3000);
      }, []);
  return (
    <div
        className="toast"
        style={{
         display: isVisible ? "flex" : "none",
         position: "fixed",
         top: "50%",
         left: "55%",
         transform: "translate(-50%, -50%)",
         borderRadius: "5px",
         padding: "20px",
         background: "#00FF66",
        color: "#000",
        zIndex: 1000,
      }}
    >
      {message}
    </div>
  );
};

export default  Toast;