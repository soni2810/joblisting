import React, { useState } from "react";
import Job from "./API/job.json";

const CarrerPage = () => {
  const [workData, setWorkData] = useState(Job);
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-4xl">Jobs</h1>
        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left ">
            <tbody>
              {setWorkData &&
                workData.map((curElem) => {
                  const { id, title, location, apply } = curElem;
                  return (
                    <tr
                      class="bg-white border-b dark:bg-gray-300 dark:border-violet"
                      key={id}
                    >
                      <th scope="row" class="py-4">
                          <h3 className="text-dark font-light text-2xl">
                            {title}
                          </h3>
                        <p className="text-sm font-light">{location}</p>
                      </th>
                      <td class="px-6 py-4 text-right">
                        <button
                          type="button"
                          class="text-white bg-cyan hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          <span className="text-white">{apply}</span>
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CarrerPage;
