// ToasterContext.js
"use client";
import { faCheckCircle, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { createContext, useContext, useState } from "react";

const ToasterContext = createContext();

export const ToasterProvider = ({ children }) => {
  const [toasterMessage, setToasterMessage] = useState("");
  const [state, setState] = useState("");

  const showToast = (state, message) => {
    setToasterMessage(message);
    setState(state);
    setTimeout(() => {
      setToasterMessage("");
      setState("");
    }, 4000);
  };

  return (
    <ToasterContext.Provider value={{ showToast }}>
      {children}
      {toasterMessage && state == "success" && (
        <div
          style={{ zIndex: 99999999 }}
          id="toast-bottom-left"
          className="flex absolute top-3 left-3 items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow"
          role="alert"
        >
          <FontAwesomeIcon
            icon={faCheckCircle}
            bounce
            className="w-5 h-5 text-blue-600"
          />
          <div className="ps-4 text-sm font-normal">{toasterMessage}</div>
        </div>
      )}

      {toasterMessage && state == "error" && (
        <div
          style={{ zIndex: 99999999 }}
          id="toast-bottom-left"
          className="flex absolute top-3 left-3 items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow"
          role="alert"
        >
          <FontAwesomeIcon
            icon={faExclamationCircle}
            bounce
            className="w-5 h-5 text-red-600"
          />
          <div className="ps-4 text-sm font-normal">{toasterMessage}</div>
        </div>
      )}
    </ToasterContext.Provider>
  );
};

export const useToaster = () => useContext(ToasterContext);
