import type { Lang } from "@/context/LanguageContext";

export type TranslatedHighlight = { title: string; description: string };
export type TranslatedProjectData = {
  [id: string]: { tagline: string; description: string; category: string };
};

const en = {
  nav: {
    about: "About",
    skills: "Skills",
    projects: "Projects",
    experience: "Experience",
    contact: "Contact",
  },
  hero: {
    location: "Tokyo, Japan",
    headline1: "Building responsibly,",
    headline2accent: "delivering",
    headline2: "end-to-end AI solutions.",
    subPrefix: "AI Engineer specialized in",
    subCV: "Computer Vision",
    subLLMs: "LLMs",
    subBackend: "Scalable Backend Systems",
    subSuffix: "Currently Engineer at",
    subCompany: "Akatsuki AI Technologies",
    ctaProjects: "View Projects",
    ctaResume: "Download Resume",
    stats: [
      { value: "3+", label: "Years in AI" },
      { value: "8+", label: "Production Systems" },
      { value: "JLPT N3", label: "Japanese · N2 in Progress" },
    ],
  },
  about: {
    label: "00 — About",
    headline1: "Engineering AI for",
    headline2: "the Real World.",
    p1prefix: "With over ",
    p1highlight: "3 years",
    p1suffix:
      " of experience and 8+ shipped production systems, I specialize in bridging the gap between advanced AI research and industrial-grade production\u2014from automating Japan\u2019s national infrastructure inspections (SIP) to scaling high-concurrency ticketing platforms for global artists.",
    p2: "I bridge the gap between AI research and production by handling the full stack: model optimization, scalable backend engineering (Django/Redis), and cloud deployment. I specialize in delivering high-performance results, such as 12.5\u00d7 faster inference and robust architectures that support tens of thousands of simultaneous users.",
    p3: "Currently working with a global team of IIT interns at Akatsuki AI Technologies, bridging Japanese enterprise clients with technical delivery. Based in Tokyo, I operate daily in a bilingual environment, leveraging Native English and Business Japanese (JLPT N3/N2).",
  },
  skills: {
    label: "01 — Technical Skills",
    heading: "Tools & Technologies",
    categoryLabels: ["AI / ML", "Backend & Infra", "Frontend & Tools", "Languages"],
  },
  projects: {
    label: "02 — Projects",
    heading: "Featured Work",
    showLess: "Show Less",
    moreProjects: (n: number) => `${n} More Projects`,
    countLabel: (n: number) => `${n} Projects`,
  },
  experience: {
    label: "03 — Experience",
    heading: "Career Timeline",
    current: "Current",
  },
  footer: {
    tagline: "Building responsibly, delivering end-to-end AI solutions.",
    location: "Tokyo, Japan",
    navHeading: "Navigation",
    contactHeading: "Get in Touch",
    copyright: (year: number) => `\u00a9 ${year} Narmatha Thiyagarajan. All rights reserved.`,
  },
  highlights: [
    {
      title: "AI Systems Architect",
      description:
        "Architected and deployed 8+ production-grade AI ecosystems across the telecommunications, recycling, and public safety sectors. I specialize in the full-stack delivery of high-accuracy CV pipelines, LLM/RAG integrations, and hardware-optimized edge inference.",
    },
    {
      title: "Team Lead & Bridge Engineer",
      description:
        "Leading a global team of 4 IIT engineers entirely in English at Akatsuki AI Technologies, while acting as technical bridge between Japanese enterprise clients and the team.",
    },
    {
      title: "Multilingual Engineer",
      description:
        "Operating fluently in Native English and Business Japanese (JLPT N3/N2). I bridge the gap between global technical innovation and clients expectations, facilitating direct collaboration and localized project success.",
    },
  ] as TranslatedHighlight[],
  projectsData: {} as TranslatedProjectData,
  experienceHighlights: [
    [
      "Leading a global team of IIT engineers building production-grade SaaS systems, with all communication conducted in English.",
      "Architected the CRAYON white-label concert platform for major artists including Ado, supporting tens of thousands of concurrent attendees using Redis Lua scripts for atomic inventory management.",
      "Acting as technical bridge between CRAYON and the engineering team — owning requirements, architecture decisions, bug management, and delivery timelines.",
      "Driving UI/UX design in Figma and full-stack implementation across Django 5, AWS ECS/RDS/S3 infrastructure.",
    ],
    [
      "Built and deployed 8+ production AI systems across telecommunications, recycling, and public safety — from initial PoC to live deployment — over a 3-year tenure.",
      "Re-engineered the MEGURU security pipeline by replacing legacy models with a YuNet + MediaPipe hybrid, achieving a 12.5× improvement in face detection speed for real-time mobile use.",
      "Built a wall deterioration classifier for Japan's Building Research Institute (BRI) under the Cabinet Office's SIP program, reaching 90%+ accuracy with a ConvNeXt / Swin-Transformer ensemble.",
      "Designed YOLOX-based PET bottle sorting for an industrial recycling line and MobileSAM-driven cargo tracking for a 27,000-ton cold-storage logistics hub.",
      "Conducted PoC research on Kimono texture synthesis using pix2pix + TextureGAN GANs; built a zero-server-cost crowd monitoring platform using TensorFlow.js and COCO-SSD.",
    ],
  ] as string[][],
};

const jp = {
  nav: {
    about: "自己紹介",
    skills: "スキル",
    projects: "プロジェクト",
    experience: "経験",
    contact: "連絡先",
  },
  hero: {
    location: "東京・日本",
    headline1: "責任を持って構築し、",
    headline2accent: "エンドツーエンドの",
    headline2: "AIソリューションを届ける。",
    subPrefix: "専門分野：",
    subCV: "コンピュータービジョン",
    subLLMs: "LLM",
    subBackend: "スケーラブルなバックエンド",
    subSuffix: "現在、AIエンジニア・チームリードとして",
    subCompany: "Akatsuki AI Technologies",
    ctaProjects: "プロジェクトを見る",
    ctaResume: "履歴書をダウンロード",
    stats: [
      { value: "3年以上", label: "AI経験" },
      { value: "8件以上", label: "本番システム" },
      { value: "JLPT N3", label: "日本語・N2取得中" },
    ],
  },
  about: {
    label: "00 — 自己紹介",
    headline1: "本番で動く",
    headline2: "AIを作る。",
    p1prefix: "実務経験",
    p1highlight: "3年以上",
    p1suffix:
      "・8件以上の本番システム開発を通じて、先進的なAI研究と産業レベルの本番環境の橋渡しを専門としています――日本の国家インフラ検査の自動化（SIP）から、Adoらグローバルアーティスト向けの高負荷チケットプラットフォームの構築まで。",
    p2: "モデル最適化・スケーラブルなバックエンドエンジニアリング（Django/Redis）・クラウドデプロイまでフルスタックで担い、AI研究と本番環境の橋渡しを行っています。推論速度12.5倍改善や同時数万ユーザーを支える堅牢なアーキテクチャなど、高性能な成果を実用レベルで届けることを専門としています。",
    p3: "現在はAkatsuki AI Technologiesにてインド工科大学（IIT）出身エンジニア4名からなるグローバルチームと共に、日本の大手クライアントとエンジニアリングチームの技術的橋渡しを担っています。東京在住。英語（ネイティブ）とビジネス日本語（JLPT N3/N2）のバイリンガル環境で日々業務を行っています。",
  },
  skills: {
    label: "01 — 技術スキル",
    heading: "ツール＆技術",
    categoryLabels: ["AI / ML", "バックエンド＆インフラ", "フロントエンド＆ツール", "言語"],
  },
  projects: {
    label: "02 — プロジェクト",
    heading: "主要プロジェクト",
    showLess: "折りたたむ",
    moreProjects: (n: number) => `さらに ${n} 件`,
    countLabel: (n: number) => `${n} 件`,
  },
  experience: {
    label: "03 — 経験",
    heading: "キャリア履歴",
    current: "現職",
  },
  footer: {
    tagline: "責任ある開発で、AIをエンドツーエンドに。",
    location: "東京・日本",
    navHeading: "ナビゲーション",
    contactHeading: "お問い合わせ",
    copyright: (year: number) => `\u00a9 ${year} Narmatha Thiyagarajan. 無断複製禁止。`,
  },
  highlights: [
    {
      title: "AIシステムアーキテクト",
      description:
        "通信・廃棄物リサイクル・公共安全の分野で8件以上の本番AIシステムを設計・デプロイ。CVパイプライン、LLM/RAGアプリ、エッジ推論まで幅広く対応。",
    },
    {
      title: "チームリード＆ブリッジエンジニア",
      description:
        "Akatsuki AI Technologiesにて4名のIITエンジニアからなるグローバルチームを英語でリード。日本の大手クライアントとチームの技術的橋渡し役を担当。",
    },
    {
      title: "マルチリンガルエンジニア",
      description:
        "英語（母語）・日本語（ビジネスレベル、JLPT N3、N2取得目標）で流暢に対応。日本市場のクライアントや関係者と直接連携が可能。",
    },
  ] as TranslatedHighlight[],
  projectsData: {
    "01": {
      tagline: "マルチテナント型イベントチケット・入場管理システム",
      description:
        "Adoをはじめとするエンターテインメント事務所向けに構築した、高トラフィックイベント・ファンクラブ対応のホワイトラベル型チケット・会場入場管理プラットフォーム。「テナント → ファンクラブ → イベント → スロット」の階層モデルにより、特定のチケット種別をファンクラブ認証会員のみに制限する細粒度アクセス制御を実現。中核機能は整理券の二段階取得フロー：事前登録・抽選フェーズで自動当選者選定とシリアルコード配布を行い、残枠は自動的にリアルタイムFCFS（先着順）プールへ移行。Redis LuaスクリプトによるアトミックなFCFS購入処理で、高負荷スパイク時の二重取得を防止。スタッフ入場管理ポータルでは「自動」「手動」両モードによる来場者フロー管理が可能。チケットの状態は「待機中 → 呼出済 → 準備完了（あなたの番） → 使用済/期限切れ」という保護されたステートマシンで管理され、終端状態は不変で誤上書きを防止。収容人数や入場ペースもリアルタイムで動的調整が可能。",
      category: "バックエンドシステム",
    },
    "02": {
      tagline: "AI搭載の駐車場巡回サポートシステム",
      description:
        "スマートフォンを活用した巡回サポートシステム。AIによる画像認識で駐車場点検中の車両ナンバープレートを確認し、車両ごとの音声確認・リアルタイムダッシュボードレポート・巡回漏れアラート・要注意車両のブラックリスト監視機能を提供。地名・分類番号・ひらがなを含む日本の地域別プレートフォーマットに対応したカスタムモデルを構築・ファインチューニングし、Core MLによりiPhoneでゼロレイテンシのオンデバイス推論を実現。",
      category: "コンピュータービジョン",
    },
    "03": {
      tagline: "建築研究所（BRI）向けリアルタイムデジタル検査アプリ",
      description:
        "内閣府の戦略的イノベーション創造プログラム（SIP）のもと、建設検査デジタル化を推進する国家プロジェクトの一環として建築研究所向けに開発。スプレー・波形・砂壁・叩きの4種別・6段階の劣化レベルを分類するコンピュータービジョンパイプラインを構築。ConvNeXtベースのOSSモデルをNVIDIA RTX 4070 Tiでファインチューニングし90%以上の精度を達成。再現性のあるパイプライン構築から性能レポート作成まで一貫して担当し、Sakura VPSへデプロイしてリアルタイム推論とベンチマークを実現。",
      category: "コンピュータービジョン",
    },
    "04": {
      tagline: "AI搭載の混雑状況モニタリングと埋め込みウィジェット配信",
      description:
        "飲食店・オフィス・クリニックなどにリアルタイムの混雑状況を提供するシステム。TensorFlow.js（COCO-SSD）によりブラウザ上でリアルタイム人物検出を実現し、高価なGPUリソースが不要。ユーザーが設定した最大収容人数に対するリアルタイム混雑スコアを算出。LINEログインと連携し、オーナーは過去5日間の混雑傾向を確認でき、カスタマイズ可能な埋め込みウィジェットで自サイトへのリアルタイム混雑情報配信にも対応。カメラ映像を実用的なデータに変換するエンドツーエンドのソリューション。",
      category: "AIoT",
    },
    "05": {
      tagline: "工業用コンベアベルト上でのAI瓶仕分け",
      description:
        "環境ソリューションを専門とする工場自動化メーカー向けに構築。USBカメラでリサイクルコンベアの映像をリアルタイムにキャプチャし、ファインチューニングしたYOLOモデルで透明（白）・茶色ガラス瓶を缶・PETボトル・他色ガラスなどの混合廃棄物から識別・分類。検出座標をOmron PLCに送信し、ロボットアームが対象ボトルを自動でピックアップ・除去するリサイクル工程の全自動化を実現。カスタムアノテーションデータセットを用い、2フェーズに分けて納品。",
      category: "コンピュータービジョン",
    },
    "06": {
      tagline: "ArUcoトラッキング＋MobileSAMセグメンテーションアラートシステム",
      description:
        "大田区・城南島ロジスティクスセンター（貯蔵能力27,000トン）での冷凍食品廃棄防止のために構築。荷下ろし渋滞により温度管理外のステージングエリアに長時間放置されるリスクに対応。冷凍コンテナ上部にArUcoマーカーを設置し、検出後に設定可能なカウントダウンタイマー（30〜60分など）を開始。閾値超過時にウェブダッシュボードへアラートを発出し、スタッフに冷凍庫への移動を促す。MobileSAMを並行稼働させ、ステージングエリア内の各荷物を視覚的にセグメンテーション・追跡。",
      category: "コンピュータービジョン",
    },
    "07": {
      tagline: "顔認証による巡回スタッフの自動本人確認",
      description:
        "巡回業務のスタッフ出勤をデジタル化・セキュア化するための自動顔認証レイヤーを開発。従来は担当者がシフト前に自撮り写真を手動アップロードしており、時間がかかる上に監査が困難でバイパスも容易だった。本システムではFaceNet512を用いてリアルタイムで登録データベースと照合し本人確認を自動化。現場での高速処理を実現するため、MTCNNをYuNet＋MediaPipeのハイブリッドアプローチ（フェイルオーバー機構付き）に置き換え、顔検出レイテンシを12.5倍改善。コサイン類似度による精度の高い照合でセキュアな本人確認を実現。",
      category: "コンピュータービジョン",
    },
    "08": {
      tagline: "魚種セグメンテーション＆分類モデル",
      description:
        "水産業の人手不足解消を目的に開発した魚種セグメンテーション・分類モデル。ブラック・シースプラット、ギルトヘッドブリーム、マアジ、トラウトの4魚種を識別し、体長をcm単位でリアルタイムに自動計測。遠隔地やハードウェアが制約される環境でもコスト効率よく動作するよう、TensorFlow.jsによるクライアントサイド実行を採用。すべてのAI処理をブラウザ上で完結させることで、サーバー推論コストゼロのアーキテクチャを実現。",
      category: "AIoT",
    },
    "09": {
      tagline: "モバイルデータの自動監視・プラン最適化システム",
      description:
        "巡回デバイスの契約モバイルデータ使用量を監視・最適化する自動インフラツール。月次消費量を予測するアルゴリズムを開発し、サービス稼働率100%を維持しながら運用コストを最小化するようモバイルプランを自律的に切り替える（100MB ⇄ 1GB）。LaravelとGoutteで構築し、全デバイスのリアルタイム異常検知と自動監査ログ機能を実装。Laravel Schedulerと連携し、通信量異常の監視とプラン変更のリアルタイムアラートも提供。",
      category: "インフラ自動化",
    },
    "10": {
      tagline: "GANによるディープ画像合成",
      description:
        "伝統的な日本の繊維デザインをAIで現代化するPoC（概念実証）として、ディープ画像合成と文化遺産の融合を探求した研究プロジェクト。pix2pixとTextureGANを用いた生成パイプラインを構築し、手描きスケッチから高品質な着物柄を合成。パッチベースの精緻化戦略を実装し、GANが伝統衣装の絹の質感や複雑な刺繍の細部を再現できることを実証。AIによるテクスチャ合成でデジタルプロトタイピングを加速し、デザインから制作までのリードタイムを短縮しながら伝統的な美的水準を維持できる可能性を証明した。",
      category: "生成AI",
    },
  } as TranslatedProjectData,
  experienceHighlights: [
    [
      "インド工科大学（IIT）出身エンジニア4名からなるグローバル開発チームをリードし、本番グレードのコンピュータービジョン・LLM/RAGシステムをすべて英語で構築・納品。",
      "Adoをはじめとするトップアーティスト向けCRAYONホワイトラベルプラットフォームを設計。Redis Luaスクリプトによるアトミックな在庫管理で数万人規模の同時アクセスに対応。",
      "日本の大手クライアントとエンジニアリングチームの技術的橋渡し役として、要件定義・アーキテクチャ決定・納期管理を一貫して担当。",
      "FigmaでのUI/UXデザインから、Django 5・AWS ECS/RDS/S3インフラ上でのフルスタック実装まで推進。",
    ],
    [
      "PoC初期から本番デプロイまで、通信・リサイクル・公共安全の各分野で8件以上の本番AIシステムを出荷――3年間の在籍期間を通じて。",
      "YuNet＋MediaPipeハイブリッドで既存モデルを置き換えてMEGURUセキュリティパイプラインを再設計し、リアルタイムモバイル向けの顔検出速度を12.5倍改善。",
      "内閣府SIPプログラムのもと、建築研究所（BRI）向けに壁面劣化分類器を構築。ConvNeXt / Swin-Transformerアンサンブルにより90%以上の精度を達成。",
      "工業用リサイクルラインにYOLOXベースのPETボトル仕分けを設計し、27,000トン規模の冷蔵ロジスティクスハブ向けにMobileSAMによる貨物追跡を実装。",
      "pix2pix＋TextureGAN GANsによる着物テクスチャ合成のPoC研究を実施。TensorFlow.jsとCOCO-SSDを活用したサーバーコストゼロの混雑監視プラットフォームを構築。",
    ],
  ] as string[][],
};

export const i18n: Record<Lang, typeof en> = { en, jp };
