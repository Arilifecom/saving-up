import { Header } from "./header";

export const AppLayout = (props) => {
  return (
    <div className="font-sans text-sm">
      <Header />
      {props.children}
    </div>
  );
};
