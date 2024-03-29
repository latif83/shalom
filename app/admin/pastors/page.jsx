"use client";
import { Header } from "@/components/admin/Header/Header";
import { faCirclePlus, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AddPastor } from "./addPastor";
import { useEffect, useState } from "react";
import { getPastors } from "@/actions/actions";
import { EditPastor } from "./editPastor";
import { Delete } from "@/components/delete/Delete";

export default function PastorsPage() {
  const [addPastor, setAddPastor] = useState(false);
  const [editPastor, setEditPastor] = useState(false);
  const [pastorDetails, setPastorDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [openDel, setOpenDel] = useState(false);
  const section = "pastor";
  const [sectionId, setSectionId] = useState(null);

  const [pastors, setPastors] = useState([]);
  const [gP, setGP] = useState(true);

  useEffect(() => {
    const gPastors = async () => {
      setLoading(true);
      const pastors = await getPastors();
      // console.log(pastors)
      setPastors(pastors.pastors);
      setLoading(false);
    };
    if (gP) {
      setGP(false);
      gPastors();
    }
  }, [gP]);

  return (
    <div className="overflow-auto" style={{ height: "100svh" }}>
      {addPastor && <AddPastor setAddPastor={setAddPastor} setGP={setGP} />}
      {editPastor && (
        <EditPastor
          setEditPastor={setEditPastor}
          setGP={setGP}
          pastorDetails={pastorDetails}
        />
      )}
      {openDel && (
        <Delete
          section={section}
          sectionId={sectionId}
          setOpenDel={setOpenDel}
          setG={setGP}
        />
      )}
      <Header cPage="pastors" />
      <div className="sm:px-12 px-3 py-5">
        <h1 className="font-semibold text-2xl">Pastors</h1>
        <div className="grid sm:grid-cols-2 gap-4 mt-2">
          <div className="">
            <label
              for="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search Pastors..."
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
              >
                Search
              </button>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <button
              onClick={() => setAddPastor(true)}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 flex gap-2 items-center h-full"
            >
              <FontAwesomeIcon
                icon={faCirclePlus}
                className="text-sm"
                width={20}
              />
              <span>New Pastor</span>
            </button>
          </div>
        </div>

        <div className="relative overflow-x-auto mt-5 shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Address
                </th>
                <th scope="col" className="px-6 py-3">
                  Contact
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {pastors.length > 0 ? (
                pastors.map((pastor) => (
                  <tr className="bg-white border-b hover:bg-gray-50">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {pastor.f_name} {pastor.l_name}
                    </th>
                    <td className="px-6 py-4">{pastor.title}</td>
                    <td className="px-6 py-4">{pastor.address}</td>
                    <td className="px-6 py-4">{pastor.contact}</td>
                    <td className="px-6 py-4">{pastor.email}</td>
                    <td className="flex items-center px-6 py-4">
                      <button
                        onClick={() => {
                          setEditPastor(true);
                          setPastorDetails(pastor);
                        }}
                        type="button"
                        className="font-medium text-blue-600 hover:underline"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          setOpenDel(true);
                          setSectionId(pastor.id);
                        }}
                        type="button"
                        className="font-medium text-red-600 hover:underline ms-3"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="px-6 py-4" colSpan={6}>
                    No pastors found{" "}
                  </td>{" "}
                </tr>
              )}

              {loading && (
                <tr>
                  <td className="px-6 py-4" colSpan={6}>
                    {" "}
                    <FontAwesomeIcon
                      icon={faSpinner}
                      spin
                      className="text-lg"
                    />{" "}
                  </td>{" "}
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
