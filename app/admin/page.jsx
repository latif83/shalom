import { Header } from "@/components/admin/Header/Header";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faUser, faUserTie, faUsers, faUsersBetweenLines } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function AdminPage() {
  return (
    <div style={{height:'100svh'}} className="relative">
      <Header cPage="home" />
      <div className="sm:px-12 px-3 py-5">
        <div>
          <h1 className="font-bold">SHALOM PRAYER MINISTRY | ADMIN PAGE</h1>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-3 gap-10">
            <div className="shadow-lg flex items-center gap-4 border border-blue-400 rounded-lg p-3">
              <div style={{flexShrink:0,width:'10%'}}>
                <FontAwesomeIcon icon={faUserTie} className="text-4xl" />
              </div>
              <div style={{flexGrow:0}}>
                <h1 className="font-semibold">Pastors</h1>
                <p>32</p>
              </div>
            </div>
            <div className="shadow-lg flex items-center gap-4 border border-blue-400 rounded-lg p-3">
              <div style={{flexShrink:0,width:'10%'}}>
                <FontAwesomeIcon icon={faUsers} className="text-4xl" />
              </div>
              <div style={{flexGrow:0}}>
                <h1 className="font-semibold">Members</h1>
                <p>142</p>
              </div>
            </div>
            <div className="shadow-lg flex items-center gap-4 border border-blue-400 rounded-lg p-3">
              <div style={{flexShrink:0,width:'10%'}}>
                <FontAwesomeIcon icon={faCalendarDays} className="text-4xl" />
              </div>
              <div style={{flexGrow:0}}>
                <h1 className="font-semibold">Events</h1>
                <p>2</p>
              </div>
            </div>
          </div>
        </div>

        
      </div>

      <div className="absolute bottom-0 sm:px-12 px-3 pb-3">
            <p>
                &copy; 2024, Shalom Prayer Ministry
            </p>
        </div>

    </div>
  );
}
