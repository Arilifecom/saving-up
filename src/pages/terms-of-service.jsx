import React from "react";

const TermsOfService = () => {
  return (
    <div className="grid gap-12 px-4 md:max-w-3xl mx-auto">
      <h2 className="text-2xl mx-auto mb-6 font-semibold">利用規約</h2>
      <section>
        <h3 className="text-xl mb-8">サービス概要</h3>
        <p className="mb-4">
          この計算サイトは個人の利用を目的としたツールで、以下の機能を提供します。
        </p>
        <ul className="mb-8">
          <li className="mb-4">
            <p className="font-medium">AUDとJPYの換算:</p>
            オーストラリアドル（AUD）の現在の価値を日本円（JPY）に換算し、表示します。ただし、為替データは1日に１回のみの更新のため、誤差があります。
          </li>
          <li>
            <p className="font-medium">目標金額の進捗管理:</p>
            現在のAUDの価値を基に、日本円での貯金額と目標金額までの進捗を計算し、表示します。
          </li>
        </ul>
        <p className="mb-8">
          このサイトの目的は、設定した目標金額に向けてモチベーションを維持しながら貯金を続けることをサポートすることです。ただし、目標金額を必ず達成できることを保証するものではありません。
        </p>
        <p className="font-medium">注意点</p>
        <p>
          このサイトには、入力されたデータを保存・保持する機能がありません。経過や進捗を記録したい場合は、各自で記録を取ってください。
        </p>
      </section>
      <section>
        <h3 className="text-xl mb-8">データ利用ポリシー</h3>
        <ul className="mb-8">
          <li className="mb-4">
            <p className="font-medium">為替データの利用:</p>
            当サイトは、外部のExchangeRate
            APIから取得したデータを使用して、計算機能を提供しています。
            これらのデータは、当サイトの計算処理にのみ利用され、ユーザーが直接取得することはできません。
          </li>
          <li className="mb-4">
            <p className="font-medium">キャッシュと再利用:</p>
            ExchangeRate
            APIから取得したデータは当サイト内でキャッシュされ、計算処理にのみ利用されます。
            データはユーザーがサイトを利用する際にのみ使用され、他の目的で再配布されることはありません。
          </li>
        </ul>
      </section>
      <section>
        <h3 className="text-xl mb-8">プライバシーとセキュリティ</h3>
        <ul className="mb-8">
          <li className="mb-4">
            <p className="font-medium">プライバシーポリシー:</p>
            当サイトでは、Vercel Web
            Analyticsを使用して、ページビューやカスタムイベントなどのデータを匿名で収集しています。これにより、ユーザーの個人情報やIPアドレスを識別することはありません。
          </li>
          <li className="mb-4">
            <p className="font-medium">集計データの利用:</p>
            収集されるデータは、全体のトレンドや利用状況を把握するための集計データとしてのみ使用されます。
            個々のユーザーを特定することはできません。 個人識別情報の非収集:
            当サイトは、ユーザーがどのページをどの順番で見たかといった情報を記録したり、ユーザーを個別に特定することはありません。収集されるデータはすべて匿名化され、個人の特定には使用されません。
          </li>
          <li className="mb-4">
            <p className="font-medium">個人識別情報の非収集:</p>
            当サイトは、ユーザーがどのページをどの順番で見たかといった情報を記録したり、ユーザーを個別に特定することはありません。収集されるデータはすべて匿名化され、個人の特定には使用されません。
          </li>
          <li className="mb-4">
            <p className="font-medium"> データ保護とプライバシー:</p>
            Vercel Web
            Analyticsは、主要なデータ保護ガイドラインに準拠して設計されており、収集されたデータは最小限に抑えられ、集計された統計データとして利用されます。
          </li>
        </ul>
      </section>
      <section>
        <h3 className="text-xl mb-8">クッキーについて</h3>
        <p className="mb-4">
          当サイトでは、サードパーティのクッキーは使用していません。クッキーとは、ウェブサイトがブラウザに保存する小さなデータファイルで、ユーザーの情報を追跡するために使われることがあります。
        </p>
        <ul className="mb-8">
          <li className="mb-4">
            <p className="font-medium">クッキーの不使用:</p>
            当サイトでは、Vercel Web
            Analyticsを利用して、クッキーを使わずに訪問者のデータを追跡します。代わりに、匿名化されたハッシュを使用してユーザーを識別します。
          </li>
          <li className="mb-4">
            <p className="font-medium">セッションの保存期間:</p>
            訪問者のデータは24時間後に自動的に削除され、長期間保存されることはありません。
          </li>
          <li className="mb-4">
            <p className="font-medium">データの目的:</p>
            収集されるデータは、ページビューの数や訪問の傾向を把握するために使用されますが、個人を特定する情報は含まれていません。
          </li>
        </ul>
      </section>
    </div>
  );
};

export default TermsOfService;
