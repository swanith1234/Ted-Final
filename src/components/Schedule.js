import React from "react";
import { FaMusic, FaUserAlt, FaCoffee } from "react-icons/fa";

const Schedule = () => {
  const scheduleItems = [
    {
      title: "Opening Ceremony",
      time: "9:30 AM - 10:00 AM",
      icon: <FaUserAlt />,
    },
    { title: "Speaker-1", time: "10:00 AM - 10:30 AM", icon: <FaUserAlt /> },
    {
      title: "Speaker-2",
      time: "10:30 AM - 11:00 AM",
      icon: <FaUserAlt />,
    },
    { title: "Break", time: "11:00 AM - 11:15 AM", icon: <FaCoffee /> },
    {
      title: "Speaker-3",
      time: "11:15 AM - 11:45 AM",
      icon: <FaUserAlt />,
    },
    { title: "Speaker-4", time: "11:45 AM - 12:15 PM", icon: <FaUserAlt /> },
    { title: "Lunch Break", time: "12:15 PM - 2:00 PM", icon: <FaCoffee /> },
    {
      title: "Speaker-5",
      time: "2:00 PM - 2:30 PM",
      icon: <FaUserAlt />,
    },
    { title: "Speaker-6", time: "2:30 PM - 3:00 PM", icon: <FaUserAlt /> },
    {
      title: "Speaker-7",
      time: "3:00 PM - 3:30 PM",
      icon: <FaUserAlt />,
    },
    { title: "Break", time: "3:30 PM - 3:45 PM", icon: <FaCoffee /> },
    {
      title: "Networking session",
      time: "3:45 PM - 4:15 PM",
      icon: <FaUserAlt />,
    },
    { title: "Speaker-8", time: "4:15 PM - 4:45 PM", icon: <FaUserAlt /> },
    {
      title: "Closing Remarks",
      time: "4:45 PM - 5:15 PM",
      icon: <FaUserAlt />,
    },
    { title: "Break", time: "5:15 PM - 6:00 PM", icon: <FaUserAlt /> },
    { title: "Music Concert", time: "6:00 PM - 7:30 PM", icon: <FaMusic /> },
  ];

  return (
    <section className="bg-black text-white py-12 p-3 relative">
      <div className="container mx-auto flex flex-col justify-center h-full">
        <h2 className="text-4xl font-bold text-red-600 mb-8 text-center">
          TEDx Event Schedule
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="timeline-line absolute w-1 bg-red-500 h-full top-0 left-1/2 transform -translate-x-1/2 z-0"></div>

          {/* Timeline Items */}
          <ul className="relative z-10">
            {scheduleItems.map((item, index) => (
              <li
                key={index}
                className="timeline-item mb-8 flex justify-between items-center w-full"
              >
                {index % 2 === 0 ? (
                  <>
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 border border-white p-4 rounded-lg shadow-lg text-center transition-transform duration-300 hover:scale-105 hover:bg-red-900">
                      <div className="text-2xl">{item.icon}</div>
                      <h3 className="font-bold text-lg mt-2">{item.title}</h3>
                      <p className="mt-1 text-sm">{item.time}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="order-1 w-5/12 border border-red-500 p-4 rounded-lg shadow-lg text-center transition-transform duration-300 hover:scale-105 hover:bg-red-900">
                      <div className="text-2xl">{item.icon}</div>
                      <h3 className="font-bold text-lg mt-2">{item.title}</h3>
                      <p className="mt-1 text-sm">{item.time}</p>
                    </div>
                    <div className="order-1 w-5/12"></div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Disclaimer */}
        <p className="mt-10 text-center text-red-400 font-semibold animate-pulse">
          ⚠️ Note: The schedule is tentative and subject to change.
        </p>
      </div>
    </section>
  );
};

export default Schedule;