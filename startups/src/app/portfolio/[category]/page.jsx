import React from "react";

const Category = ({ params }) => {
  console.log(params);
  return (
    <div>
      <h1>{params.Category}</h1>
    </div>
  );
};

export default Category;
