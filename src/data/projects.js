// Projects data - AI/ML Projects with Demo and Code Links
export const projects = [
  {
    id: 1,
    title: "AI Shopping Assistant (ChipoAI)",
    description: "Telegram + FastAPI NLP-based conversational commerce supporting Amharic/English with Context-Adaptive Intent Fusion (CAIF) for intelligent dialogue management.",
    technologies: ["FastAPI", "NLP", "Telegram Bot", "Python", "Amharic NLP", "CAIF", "Intent Recognition"],
    demoUrl: "https://t.me/chipoai_bot",
    codeUrl: "https://github.com/BirthMark21/chipoai-bot",
    image: "context_adaptive_intent_fusion_caif_ai_architecture.jpg",
    type: "ai",
    impact: {
      users: "500+ active users",
      performance: "Real-time NLP processing",
      business: "Automated customer support"
    },
    gallery: ["context_adaptive_intent_fusion_caif_ai_architecture.jpg"]
  },
  {
    id: 2,
    title: "CCPRICE Dashboard",
    description: "Real-time competitor price benchmarking across markets and distribution centers with comprehensive analytics and holiday spike detection.",
    technologies: ["Python", "FastAPI", "Analytics", "Real-time", "BI", "Data Visualization"],
    demoUrl: "https://ccprice.chipchip.social/",
    codeUrl: "https://github.com/BirthMark21/ccprice-dashboard",
    image: "daily_orders_holiday_spikes_regular_vs_holiday_nov2023.jpg",
    type: "ai",
    impact: {
      users: "10+ distribution centers",
      performance: "Real-time price tracking",
      business: "15% pricing optimization"
    },
    gallery: [
      "daily_orders_holiday_spikes_regular_vs_holiday_nov2023.jpg",
      "daily_orders_holiday_spikes_regular_vs_holiday_oct202.jpg",
      "daily_orders_holiday_spikes_pre_holiday_post_breakdown.jpg"
    ]
  },
  {
    id: 3,
    title: "Customer Retention & Segmentation",
    description: "ML + rule-based customer retention analysis and churn prediction system with comprehensive behavioral analytics and holiday pattern detection.",
    technologies: ["ML", "Python", "Scikit-learn", "Analytics", "Segmentation", "Time Series"],
    demoUrl: "https://retention-analysis.chipchip.social/",
    codeUrl: "https://github.com/BirthMark21/customer-retention",
    image: "customer_segment_overview_pie_bar_dashboard.jpg",
    type: "ai",
    impact: {
      users: "50K+ customers analyzed",
      performance: "85% churn prediction accuracy",
      business: "20% retention improvement"
    },
    gallery: [
      "customer_segment_overview_pie_bar_dashboard.jpg",
      "customer_segment_growth_over_time_stacked_area.jpg",
      "rfm_segment_purchase_by_day_of_week.jpg"
    ]
  },
  {
    id: 4,
    title: "Dynamic Pricing System",
    description: "Prophet & LightGBM forecasting for dynamic pricing and demand prediction with real-time price optimization for agricultural products.",
    technologies: ["Prophet", "LightGBM", "XGBoost", "Time Series", "ML", "Forecasting"],
    demoUrl: null,
    codeUrl: "https://github.com/BirthMark21/dynamic-pricing",
    image: "lightgbm_potato_price_forecast_actual_vs_predicted.jpg",
    type: "ai",
    gallery: [
      "lightgbm_potato_price_forecast_actual_vs_predicted.jpg",
      "cross_elasticity_demand_heatmap_discounting.jpg",
      "delivery_speed_effect_on_aov_by_customer_persona.jpg",
      "order_distribution_delivery_windows_by_persona.jpg"
    ]
  },
  {
    id: 5,
    title: "Customer Profile 360° Microservice (InnoPulse)",
    description: "AI-native unified customer intelligence platform enabling 360° profiling with entity resolution, real-time enrichment, and versioned profile management. Serves as single source of truth for customer data across banking systems with sub-200ms latency.",
    technologies: ["Microservices", "FastAPI", "PostgreSQL", "Redis", "Entity Resolution", "Real-time Analytics", "Event-Driven Architecture"],
    demoUrl: null,
    codeUrl: null,
    image: "project-1 (6).png",
    type: "ai",
    highlights: [
      "Entity resolution & deduplication across multiple banking systems",
      "Real-time profile enrichment from 10+ data sources",
      "Versioned profile snapshots for audit & compliance",
      "Sub-200ms P99 latency for profile queries",
      "GDPR & ENDPP compliant with encryption & consent tracking"
    ]
  },
  {
    id: 6,
    title: "Customer Segmentation Service (InnoPulse)",
    description: "Advanced customer segmentation microservice combining rule-based, ML-driven clustering, and micro-segmentation for hyper-personalized banking. Enables dynamic targeting for marketing, credit assessment, and financial inclusion across African markets.",
    technologies: ["ML Clustering", "K-Means", "DBSCAN", "Rule Engine", "Real-time Segmentation", "Personalization", "Banking Intelligence"],
    demoUrl: null,
    codeUrl: null,
    image: "project-1 (5).png",
    type: "ai",
    highlights: [
      "Rule-based & ML-driven segmentation (K-Means, DBSCAN)",
      "Micro-segmentation for N=1 personalization",
      "Real-time segment evaluation (<1s latency)",
      "Explainable segment membership with audit trails",
      "Supports 100+ dynamic segments across 1M+ profiles"
    ]
  },
  {
    id: 7,
    title: "FeatureStore Microservice (InnoPulse)",
    description: "Enterprise-grade ML feature store built on Feast framework, providing centralized feature management with online/offline serving, CDC integration, and full lineage tracking. Powers credit scoring, fraud detection, and personalization models.",
    technologies: ["Feast", "Redis", "Delta Lake", "Spark", "Flink", "Kafka", "MinIO", "Kubeflow", "MLOps"],
    demoUrl: null,
    codeUrl: null,
    image: "project-1 (7).png",
    type: "ai",
    highlights: [
      "Sub-10ms online feature serving via Redis",
      "Batch retrieval for millions of features (Delta Lake)",
      "Streaming ingestion with Flink & CDC (Debezium)",
      "Feature versioning & lineage tracking for compliance",
      "Orchestrated pipelines with Kubeflow/Prefect"
    ]
  },
  {
    id: 8,
    title: "Credit Scoring & Risk Assessment",
    description: "ML-based credit scoring and risk assessment models for banking.",
    technologies: ["ML", "Risk Modeling", "Banking AI", "Python"],
    demoUrl: null,
    codeUrl: "https://github.com/BirthMark21/credit-scoring",
    image: "project-1 (8).png",
    type: "ai"
  },
  {
    id: 9,
    title: "AI Resume Screening System",
    description: "NLP model + FastAPI backend for automated resume screening and matching.",
    technologies: ["NLP", "FastAPI", "ML", "Python", "Text Analysis"],
    demoUrl: null,
    codeUrl: "https://github.com/BirthMark21/resume-screening",
    image: "project-1 (9).png",
    type: "ai"
  },
  {
    id: 10,
    title: "Distributed Cloud Database Consolidation Engine (DCDCE)",
    description: "Automated Python-based data consolidation system aggregating multiple distributed daily SQLite databases from cloud storage into a centralized master database with incremental merging and duplicate prevention.",
    technologies: ["Python", "SQLite", "Cloud Storage", "Data Pipeline", "Automation", "Daemon Services"],
    demoUrl: null,
    codeUrl: "https://github.com/BirthMark21/dcdce",
    image: "dcdce-engine.png",
    type: "ai",
    highlights: [
      "Automated cloud database discovery & incremental merge",
      "Time-window based execution with daemon mode",
      "Duplicate-safe consolidation with structured logging",
      "Graceful shutdown handling & error recovery",
      "Enables centralized analytics & reporting dashboards"
    ]
  },
  {
    id: 11,
    title: "Product Segmentation Pipeline",
    description: "E-commerce & banking ML pipelines for automated product categorization.",
    technologies: ["ML", "Python", "Classification", "Data Pipeline"],
    demoUrl: null,
    codeUrl: "https://github.com/BirthMark21/product-segmentation",
    image: "product-standardization-pipeline.png",
    type: "ai"
  },
  {
    id: 12,
    title: "ChipChip Social E-Commerce",
    description: "Full-stack social e-commerce platform with AI-powered features, serving customers for 2+ years with comprehensive analytics and personalization.",
    technologies: ["React", "Django", "PostgreSQL", "AI Integration", "Real-time Analytics"],
    demoUrl: "https://chipchip.social/",
    codeUrl: "https://github.com/BirthMark21/chipchip",
    image: "chipchip_2year_anniversary_celebration.jpg",
    type: "web",
    impact: {
      users: "10K+ active users",
      performance: "2+ years in production",
      business: "Multi-channel commerce platform"
    },
    gallery: ["chipchip_2year_anniversary_celebration.jpg"]
  },
  {
    id: 13,
    title: "EthioHandouts Platform",
    description: "Educational resource sharing platform for Ethiopian students.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    demoUrl: "https://www.ethiohandouts.com/",
    codeUrl: "https://github.com/BirthMark21/ethiohandouts",
    image: "project-1 (1).png",
    type: "web"
  }
];
