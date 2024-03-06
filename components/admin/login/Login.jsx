"use client";
import { useLogin } from "@/providers/LoginContext";
import { useToaster } from "@/providers/ToasterContext";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect, useState } from "react";

export const Login = () => {
  const [formData, setFormData] = useState(null);
  const [sendData, setSendData] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login } = useLogin();
  const { showToast } = useToaster();

  const submitData = (formData) => {
    setFormData(formData);
    setSendData(true);
  };

  useEffect(() => {
    const sData = () => {
      setLoading(true);
      let data = {
        username: formData.get("username"),
        password: formData.get("password"),
      };
      if (data.username == "shalom" && data.password == "shalom@321") {
        login();
        showToast("success", "Login successful, Redirecting...");
        setLoading(false);
      } else {
        showToast("error", "Login details incorrect!");
        setLoading(false);
      }
    };

    if (sendData) {
      sData();
      setSendData(false);
    }
  }, [sendData]);

  return (
    <section style={{ height: "100svh" }} className="bg-gray-50">
      <div className="flex flex-col items-center justify-center sm:px-6 px-3 h-full sm:h-auto py-8 mx-auto md:h-screen lg:py-0">
        <Image
          className="w-12 h-12 mr-2 mb-3"
          src="/logo.jpg"
          alt="logo"
          width={200}
          height={200}
        />
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in to Admin Page
            </h1>
            <form action={submitData} className="space-y-4 md:space-y-6">
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your username
                </label>
                <input
                  type="text"
                  name="username"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  placeholder="johndoe"
                  required=""
                />
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  required=""
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label for="remember" className="text-gray-500">
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full text-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600"
              >
                {loading ? (
                  <FontAwesomeIcon icon={faSpinner} spin className="text-lg" />
                ) : (
                  "Sign in"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
