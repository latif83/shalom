import { faCheckCircle, faExclamation, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Toaster = ({ msg }) => {
  return (
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
      <div className="ps-4 text-sm font-normal">{msg}</div>
    </div>
  );
};

export const ErrorToaster = ({ msg }) => {
    return (
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
        <div className="ps-4 text-sm font-normal">{msg}</div>
      </div>
    );
  };
