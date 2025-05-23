import React from "react";
import {
  AmountIcon,
  ExchangeIcon,
  Icon,
  ProgressIcon,
  ResultNaviIcon,
  WeeklyTagetIcon,
} from "./Icons";
import { scroller } from "react-scroll";

const ResultArea = ({ results, changeTarget }) => {
  const handleClick = (targetRef) => {
    scroller.scrollTo(targetRef, {
      smooth: true,
      duration: 300,
      offset: -(window.innerHeight / 3),
    });

    // スクロール後に changeTarget() を実行
    setTimeout(() => {
      changeTarget();
    }, 300);
  };

  return (
    <div className="grid gap-7 pb-14 px-4 md:max-w-xl mx-auto">
      <div className="flex justify-center items-center">
        <ResultNaviIcon className={"animate-bounce"} />
      </div>
      <div className="w-ful bg-light rounded-lg p-4 shadow-md">
        <div className="flex place-items-center">
          <AmountIcon className={"w-10 h-10"} />
          <h2 className="text-lg font-semibold ml-2">総資産額</h2>
        </div>
        <div className="flex items-center justify-end">
          <div className="bg-[#433832] p-3 my-5 rounded-lg flex-1 text-light text-xs text-center">
            あなたのJPYとAUDの
            <br />
            貯金を全部合わせた金額だよ
          </div>
          <div className="w-3 overflow-hidden ">
            <div className="h-4 bg-[#433832] rotate-45 transform origin-top-left rounded-sm"></div>
          </div>
          <Icon className={"w-[50px] h-[50px] relative"} />
          <span className="absolute rounded-full w-[50px] h-[50px] border" />
        </div>

        <div className="mb-5 flex justify-center items-end my-4">
          <p className="w-[80%] border-b-[3px] py-3 text-center text-3xl bg-light text-headline">
            {results.savingAmountJPY}
          </p>
          <p className="text-2xl ml-6">円</p>
        </div>
        <div className="flex justify-center items-center pt-3 pb-6">
          <p>AUDにすると</p>
          <ExchangeIcon className={"w-5 h-5 animate-bounce"} />
        </div>
        <div className="mb-14 flex justify-center items-end">
          <p className="w-[80%] h-[60px] bg-bg_pink rounded py-3 text-center text-3xl  text-headline">
            {results.savingAmountAUD}
          </p>
          <p className="text-2xl ml-6">AUD</p>
        </div>
      </div>

      <div className="w-ful bg-light rounded-lg p-4 shadow-md">
        <div className="flex place-items-center">
          <ProgressIcon className={"w-10 h-10"} />
          <h2 className="text-lg font-semibold ml-2">達成まで残り</h2>
        </div>
        <div className="flex items-center justify-end">
          <div className="bg-[#433832] p-3 my-5 rounded-lg flex-1 text-light text-xs text-center">
            目標達成までに、必要な額だよ
          </div>
          <div className="w-3 overflow-hidden ">
            <div className="h-4 bg-[#433832] rotate-45 transform origin-top-left rounded-sm"></div>
          </div>
          <Icon className={"w-[50px] h-[50px] relative"} />
          <span className="absolute rounded-full w-[50px] h-[50px] border" />
        </div>

        <div className="mb-5 flex justify-center items-end my-4">
          <p className="w-[80%] border-b-[3px] py-3 text-center text-3xl bg-light text-headline">
            {results.remainingJPY}
          </p>
          <p className="text-2xl ml-4">円</p>
        </div>
        <div className="flex justify-center items-center pt-3 pb-6">
          <p>AUDにすると</p>
          <ExchangeIcon className={"w-5 h-5 animate-bounce"} />
        </div>
        <div className="mb-14 flex justify-center items-end">
          <p className="w-[80%] h-[60px] bg-bg_pink rounded py-3 text-center text-3xl text-headline">
            {results.remainingAUD}
          </p>
          <p className="text-2xl ml-4">AUD</p>
        </div>
      </div>
      <div className="w-ful bg-light rounded-lg p-4 shadow-md">
        <div className="flex place-items-center">
          <WeeklyTagetIcon className={"w-10 h-10"} />
          <h2 className="text-lg font-semibold ml-2">週ごとの必要貯金額</h2>
        </div>
        <div className="flex items-center justify-end">
          <div className="bg-[#433832] p-3 my-5 rounded-lg flex-1 text-light text-xs text-center">
            1週間ごとに、下の金額を貯め続けると、
            <br />
            目標金額に到達するよ
          </div>
          <div className="w-3 overflow-hidden ">
            <div className="h-4 bg-[#433832] rotate-45 transform origin-top-left rounded-sm"></div>
          </div>
          <Icon className={"w-[50px] h-[50px] relative"} />
          <span className="absolute rounded-full w-[50px] h-[50px] border" />
        </div>
        <div className="mb-5 flex justify-center items-end my-4">
          <p className="w-[80%] border-b-[3px] py-3 text-center text-3xl bg-light text-headline">
            {results.weeklyTargetJPY}
          </p>
          <p className="text-xl m-4">/週</p>
        </div>
        <div className="flex justify-center items-center pt-3 pb-6">
          <p>AUDにすると</p>
          <ExchangeIcon className={"w-5 h-5 animate-bounce"} />
        </div>

        <div className="mb-14 flex justify-center items-end">
          <p className="w-[80%] h-[60px] bg-bg_pink rounded py-3 text-center text-3xl text-headline">
            {results.weeklyTargetAUD}
          </p>
          <p className="text-xl ml-4">/Week</p>
        </div>
        <h2 className="text-lg font-semibold ml-2">目標期日まで残り</h2>
        <div className="flex items-center mb-4">
          <p className="w-[80%] border-[3px] bg-light rounded py-3 text-center text-3xl text-headline">
            {results.remainingWeeks}
          </p>
          <p className="text-xl ml-4">/週間</p>
        </div>
        <div className="flex gap-3">
          <button
            className="block bg-transparent hover:bg-slate-700 text-slate-900 font-semibold hover:text-white py-2 px-4 border border-slate-700 hover:border-transparent rounded"
            onClick={() => handleClick("targetJPYRef")}
          >
            目標金額を変更する
          </button>
          <button
            className="block bg-transparent hover:bg-slate-700 text-slate-900 font-semibold hover:text-white py-2 px-4 border border-slate-700 hover:border-transparent rounded"
            onClick={() => handleClick("targetDateRef")}
          >
            期日を変更する
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultArea;
