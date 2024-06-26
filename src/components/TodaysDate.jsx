import React from "react";

const TodaysDate = () => {
  const today = new Date().toLocaleDateString();
  return (
    <div>
      <label>日付</label>
      <p className="border mr-2 rounded py-2 px-4">{today}</p>
    </div>
  );
};

export default TodaysDate;
