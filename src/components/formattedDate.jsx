const FormattedDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${year}/${month}/${day}`;

  return (
    <div>
      <h2 className="">日付</h2>
      <p className="border mr-2 rounded py-2 px-3.5">{formattedDate}</p>
    </div>
  );
};

export default FormattedDate;
