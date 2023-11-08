import { Header } from "./header";

export const AppLayout = (props) => {
  return (
    <div className="p-1.5 font-sans text-sm">
      <Header />
      {props.children}
    </div>
  );
};
