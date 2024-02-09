

const OrderOverview = () => {
   return (
      <div>
         <div className="p-3 px-6 rounded-xl bg-lime-50 my-5">
            <div className="flex items-center gap-2 pb-3 border-b-2 border-lime-950 text-green-950">
               <button className="btn-circle bg-green-100 ">
                  <h2 className="text-xl font-bold text-center p-2">4</h2>
               </button>
               <h2 className="text-xl font-bold">Order Overview</h2>
            </div>
            <div className="my-5">
               <div
                  class="relative flex flex-col w-full h-full overflow-scroll text-green-950 bg-transparent shadow-md rounded-xl bg-clip-border">
                  <table class="w-full text-left table-auto min-w-max">
                     <thead className=" bg-lime-100">
                        <tr>
                           <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                              <p class="block font-sans text-sm antialiased font-normal leading-none text-green-950 opacity-70">
                                 Name
                              </p>
                           </th>
                           <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                              <p class="block font-sans text-sm antialiased font-normal leading-none text-green-950 opacity-70">
                                 Price
                              </p>
                           </th>
                           <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                              <p class="block font-sans text-sm antialiased font-normal leading-none text-green-950 opacity-70">
                                 Total
                              </p>
                           </th>

                        </tr>
                     </thead>
                     <tbody>
                        {/* <tr>
        <td class="p-4 border-b border-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            Alexa Liras
          </p>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            Developer
          </p>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            23/04/18
          </p>
        </td>
      </tr> */}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>

      </div >
   );
};

export default OrderOverview;