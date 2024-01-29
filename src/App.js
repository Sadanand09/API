import React from "react";

function App({ id, title, price, description, category, image }) {
  return (
      <div className="w-1/4 border-2 shadow-lg border-black m-5 p-2 hover:scale-90 duration-700">
        <span className="text-black font-bold">
          {id}
        </span>
        <div className="">
          <div>
            <img src={image} className="h-48 items-center m-auto" />
          </div>
          <div>

            <p className="text-white">Item: {title}</p>

            <p className=" text-justify ">
              {description}
            </p> <br />
            <p className=" font-bold text-center">{category}</p>

            <p className="italic text-blue-900 text-center">Price: {price}</p>
          </div>
        </div>

      </div>
  );
}

export default App;
