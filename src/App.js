import React from "react";

function App({ id, title, price, description, category, image }) {
  return (
    <div className="m-3">

      <div className="cursor-pointer container border border-2 m-auto border-black my-3 p-2 hover:scale-90 duration-700">
        <img src={image} className="h-48" />
        <h1 className="text-black font-bold">
          Item id:{id}
        </h1>
        <p className="text-white">Item: {title}</p>
        
        <p>
          {description}
          <br />
          {category}
        </p>
        <p className="italic text-blue-900">Price: {price}</p>

      </div>

    </div>
  );
}

export default App;
