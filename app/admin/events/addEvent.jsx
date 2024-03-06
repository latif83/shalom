"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./addEvent.module.css";
import { faSpinner, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { addEvent, addPastor } from "@/actions/actions";
import { Toaster } from "@/components/Toaster/Toaster";
import { useToaster } from "@/providers/ToasterContext";
import { imageDb } from "@/Firebase/config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

export const AddEvent = ({ setAddEvent, setGE }) => {
  const [loading, setLoading] = useState(false);
  const [sendData, setSendData] = useState(false);
  const [formData, setFormData] = useState(null);

  const { showToast } = useToaster();

  const submitData = (formD) => {
    setFormData(formD);
    setSendData(true);
  };

  useEffect(() => {
    // showToast("error","hello")
    const sendD = async () => {
      setLoading(true);
      let data = {
        title: formData.get("title"),
        des: formData.get("des"),
        sDate: formData.get("sDate"),
        eDate: formData.get("eDate"),
      };

      const image = formData.get("image")

      // Process image
      if (image.size > 0) {
        const imgRef = ref(imageDb, `churchImage/Shalom/${v4()}`);
        const uploadImage = await uploadBytes(imgRef, image);
        const getImageUrl = await getDownloadURL(uploadImage.ref);
    
        data.imageUrl = getImageUrl;
      } 
      // else {
      //   data.imageUrl = "/vote-icon.png";
      // }

      const response = await addEvent(data);
      if (response.status) {
        showToast("success", response.msg);
        setAddEvent(false);
        setLoading(false);
        setGE(true);
        return;
      } else {
        showToast("error", response.msg);
        setLoading(false);
        return;
      }
    };
    if (sendData) {
      sendD();
      setSendData(false);
    }
  }, [sendData]);

  const [imagePreview, setImagePreview] = useState("");

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];

    if (selectedImage) {
      // Create a preview URL for the selected image
      const previewURL = URL.createObjectURL(selectedImage);
      setImagePreview(previewURL);
    }
  };

  return (
    <div className={`${styles.container} sm:pt-10`}>
      <div className="w-full max-w-xl mx-auto h-full sm:h-auto bg-white sm:rounded shadow p-10">
        <div className="flex justify-between mb-3">
          <h1 className="font-semibold">Add Event</h1>
          <FontAwesomeIcon
            icon={faXmark}
            onClick={() => setAddEvent(false)}
            className="text-lg cursor-pointer"
            color="red"
            width={20}
          />
        </div>
        <form action={submitData}>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="title"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Title
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="des"
              id="floating_last_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_last_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Description
            </label>
          </div>

          <div className="grid">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="datetime-local"
                name="sDate"
                id="floating_phone"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Starting Date & Time
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="datetime-local"
                name="eDate"
                id="floating_phone"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Ending Date & Time
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="file"
                name="image"
                id="floating_phone"
                onChange={handleImageChange}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Select Image
              </label>

              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Image Preview"
                  className="mt-2 w-full max-h-32 object-contain rounded"
                />
              )}
            </div>
          </div>
          <button
            disabled={loading ? true : false}
            type="submit"
            className="text-white disabled:bg-blue-300 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {loading ? (
              <FontAwesomeIcon icon={faSpinner} spin className="text-lg" />
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
