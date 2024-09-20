"use client";
import React, { useEffect, useState } from "react";
import Form from "./component/Form/page";

export default function RootPage() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [heading, setheading] = useState("");
  const [userData, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/users");
      const data = await response.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <Form />

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="py-3 px-5 text-left">Name</th>
              <th className="py-3 px-5 text-left">ContactNum</th>
              <th className="py-3 px-5 text-left">Heading</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((eachdata) => {
              return (
                <tr className="border-b">
                  <td className="py-4 px-5">{eachdata["name"]}</td>
                  <td className="py-4 px-5">{eachdata["contactNum"]}</td>
                  <td className="py-4 px-5">{eachdata["heading"]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <br />
      </div>
    </div>
  );
}
