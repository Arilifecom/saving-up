import { useEffect, useState } from "react";

const TodaysDate = () => {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const today = new Date().toLocaleDateString();
    setFormattedDate(today);
  }, []);

  return (
    <div>
      <label>今日の日付</label>
      <p className="border border-headline mr-2 rounded py-2 px-4">
        {formattedDate || "Loading..."}
      </p>
    </div>
  );
};

export default TodaysDate;
