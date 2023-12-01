import React from "react";

const DynamicPage = ({ params, searchParams }) => {
  console.log(params);
  console.log(searchParams);
  return (
    <div>
      <h2>This is dynamic page: {params.id}</h2>
      <h2>Searched by: {searchParams.category}</h2>
    </div>
  );
};

export default DynamicPage;
