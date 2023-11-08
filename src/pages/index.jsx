import Image from "next/image";
import FormattedDate from "../components/formattedDate";
import GetRateData from "../components/getRateData";
import MainArea from "../components/mainArea";

export default function Home() {
  return (
    <div className="max-w-6xl flex flex-col mx-auto relative">
      <div className="flex mx-auto">
        <div className="absolute top-12 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
          {/* <Image src="/logo.svg" alt="" width={100} height={100} /> */}
        </div>
        <div className="flex mb-3">
          <FormattedDate />
          <GetRateData />
        </div>
      </div>
      <div className="min-h-min border-2 border-gray-900 rounded-2xl">
        <MainArea />
      </div>
    </div>
  );
}
