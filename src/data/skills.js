// Comprehensive Skills Data
export const technicalSkills = [
  // Programming Languages
  { id: 1, name: "Python", level: 95, category: "Languages", icon: "🐍" },
  { id: 2, name: "JavaScript/TypeScript", level: 90, category: "Languages", icon: "⚡" },
  { id: 3, name: "Java", level: 85, category: "Languages", icon: "☕" },
  { id: 4, name: "PHP", level: 85, category: "Languages", icon: "🐘" },
  { id: 5, name: "SQL", level: 95, category: "Languages", icon: "🗄️" },
  
  // Backend Frameworks
  { id: 6, name: "FastAPI", level: 95, category: "Backend", icon: "⚡" },
  { id: 7, name: "Django", level: 90, category: "Backend", icon: "🎸" },
  { id: 8, name: "Spring Boot", level: 85, category: "Backend", icon: "🍃" },
  { id: 9, name: "Laravel", level: 85, category: "Backend", icon: "🔺" },
  { id: 10, name: "Flask", level: 85, category: "Backend", icon: "🧪" },
  
  // Frontend Technologies
  { id: 11, name: "React", level: 90, category: "Frontend", icon: "⚛️" },
  { id: 12, name: "Next.js", level: 85, category: "Frontend", icon: "▲" },
  { id: 13, name: "HTML/CSS", level: 95, category: "Frontend", icon: "🎨" },
  { id: 14, name: "Tailwind CSS", level: 90, category: "Frontend", icon: "💨" },
  
  // Databases
  { id: 15, name: "PostgreSQL", level: 95, category: "Database", icon: "🐘" },
  { id: 16, name: "MySQL", level: 90, category: "Database", icon: "🐬" },
  { id: 17, name: "Redis", level: 90, category: "Database", icon: "🔴" },
  { id: 18, name: "MongoDB", level: 85, category: "Database", icon: "🍃" },
  { id: 19, name: "ClickHouse", level: 75, category: "Database", icon: "⚡" },
  { id: 20, name: "MS SQL Server", level: 80, category: "Database", icon: "🗄️" },
  
  // ML/AI Frameworks
  { id: 21, name: "Scikit-learn", level: 95, category: "AI/ML", icon: "🤖" },
  { id: 22, name: "TensorFlow", level: 85, category: "AI/ML", icon: "🧠" },
  { id: 23, name: "PyTorch", level: 85, category: "AI/ML", icon: "🔥" },
  { id: 24, name: "XGBoost", level: 90, category: "AI/ML", icon: "🚀" },
  { id: 25, name: "Prophet", level: 90, category: "AI/ML", icon: "📈" },
  { id: 26, name: "Pandas & NumPy", level: 95, category: "AI/ML", icon: "🐼" },
  { id: 27, name: "Hugging Face", level: 85, category: "AI/ML", icon: "🤗" },
  { id: 28, name: "LangChain", level: 80, category: "AI/ML", icon: "🔗" },
  
  // MLOps & Feature Store
  { id: 29, name: "Feast", level: 90, category: "MLOps", icon: "🍽️" },
  { id: 30, name: "Kubeflow", level: 80, category: "MLOps", icon: "☸️" },
  { id: 31, name: "MLflow", level: 85, category: "MLOps", icon: "📊" },
  { id: 32, name: "Prefect", level: 80, category: "MLOps", icon: "🔄" },
  { id: 33, name: "Great Expectations", level: 75, category: "MLOps", icon: "✅" },
  
  // Data Engineering
  { id: 34, name: "Apache Kafka", level: 85, category: "Data Engineering", icon: "📨" },
  { id: 35, name: "Apache Spark", level: 80, category: "Data Engineering", icon: "⚡" },
  { id: 36, name: "Apache Flink", level: 75, category: "Data Engineering", icon: "🌊" },
  { id: 37, name: "Debezium CDC", level: 80, category: "Data Engineering", icon: "🔄" },
  { id: 38, name: "Delta Lake", level: 80, category: "Data Engineering", icon: "🏞️" },
  { id: 39, name: "MinIO", level: 75, category: "Data Engineering", icon: "📦" },
  { id: 40, name: "Airflow", level: 80, category: "Data Engineering", icon: "🌬️" },
  
  // Cloud & Infrastructure
  { id: 41, name: "AWS", level: 80, category: "Cloud", icon: "☁️" },
  { id: 42, name: "Azure", level: 75, category: "Cloud", icon: "☁️" },
  { id: 43, name: "Docker", level: 90, category: "DevOps", icon: "🐳" },
  { id: 44, name: "Kubernetes", level: 80, category: "DevOps", icon: "☸️" },
  { id: 45, name: "Terraform", level: 75, category: "DevOps", icon: "🏗️" },
  { id: 46, name: "GitHub Actions", level: 90, category: "DevOps", icon: "⚙️" },
  { id: 47, name: "GitLab CI/CD", level: 85, category: "DevOps", icon: "🦊" },
  
  // Monitoring & Observability
  { id: 48, name: "Prometheus", level: 80, category: "Observability", icon: "📊" },
  { id: 49, name: "Grafana", level: 85, category: "Observability", icon: "📈" },
  { id: 50, name: "OpenTelemetry", level: 75, category: "Observability", icon: "🔭" },
  { id: 51, name: "Loki", level: 75, category: "Observability", icon: "📝" },
  { id: 52, name: "Jaeger", level: 70, category: "Observability", icon: "🔍" },
  
  // BI & Visualization
  { id: 53, name: "Power BI", level: 90, category: "BI", icon: "📊" },
  { id: 54, name: "Tableau", level: 85, category: "BI", icon: "📈" },
  { id: 55, name: "Apache Superset", level: 85, category: "BI", icon: "📉" },
  { id: 56, name: "Plotly", level: 90, category: "BI", icon: "📊" },
  { id: 57, name: "Streamlit", level: 90, category: "BI", icon: "🎯" },
  
  // Security & Auth
  { id: 58, name: "Keycloak", level: 80, category: "Security", icon: "🔐" },
  { id: 59, name: "OAuth2/JWT", level: 85, category: "Security", icon: "🔑" },
  { id: 60, name: "TLS/SSL", level: 85, category: "Security", icon: "🔒" },
  
  // Message Brokers & Event Streaming
  { id: 61, name: "RabbitMQ", level: 80, category: "Messaging", icon: "🐰" },
  { id: 62, name: "Apache Pulsar", level: 70, category: "Messaging", icon: "📡" },
  
  // API & Integration
  { id: 63, name: "REST API", level: 95, category: "API", icon: "🔌" },
  { id: 64, name: "GraphQL", level: 80, category: "API", icon: "📊" },
  { id: 65, name: "gRPC", level: 85, category: "API", icon: "⚡" },
  { id: 66, name: "WebSockets", level: 80, category: "API", icon: "🔌" },
  
  // Other Tools
  { id: 67, name: "Telegram Bot API", level: 90, category: "Tools", icon: "✈️" },
  { id: 68, name: "Odoo ERP", level: 80, category: "Tools", icon: "🏢" },
  { id: 69, name: "ERPNext", level: 75, category: "Tools", icon: "📦" }
];

// Architectural Patterns & Design Principles
export const architecturalPatterns = [
  { id: 1, name: "Domain-Driven Design (DDD)", level: 90, icon: "🏗️" },
  { id: 2, name: "Event-Driven Architecture", level: 95, icon: "📨" },
  { id: 3, name: "Microservices Architecture", level: 95, icon: "🔷" },
  { id: 4, name: "Hexagonal/Clean Architecture", level: 90, icon: "⬡" },
  { id: 5, name: "CQRS Pattern", level: 85, icon: "🔄" },
  { id: 6, name: "Saga Pattern", level: 85, icon: "🎭" },
  { id: 7, name: "Outbox Pattern", level: 85, icon: "📤" },
  { id: 8, name: "Event Sourcing", level: 80, icon: "📜" },
  { id: 9, name: "API Gateway Pattern", level: 85, icon: "🚪" },
  { id: 10, name: "Circuit Breaker Pattern", level: 80, icon: "⚡" },
  { id: 11, name: "Repository Pattern", level: 90, icon: "📚" },
  { id: 12, name: "Factory Pattern", level: 85, icon: "🏭" },
  { id: 13, name: "Observer Pattern", level: 85, icon: "👁️" },
  { id: 14, name: "Strategy Pattern", level: 85, icon: "🎯" },
  { id: 15, name: "Dependency Injection", level: 90, icon: "💉" }
];

export const softSkills = [
  { id: 1, name: "Project Management", level: 90 },
  { id: 2, name: "Task Prioritization", level: 88 },
  { id: 3, name: "Problem-Solving", level: 95 },
  { id: 4, name: "Teamwork & Collaboration", level: 92 },
  { id: 5, name: "Time Management", level: 90 },
  { id: 6, name: "Effective Communication", level: 88 },
  { id: 7, name: "Adaptability & Flexibility", level: 92 },
  { id: 8, name: "Critical & Analytical Thinking", level: 95 },
  { id: 9, name: "Negotiation & Conflict Resolution", level: 85 }
];

export const skillCategories = [
  "All",
  "Languages",
  "Backend",
  "Frontend",
  "Database",
  "AI/ML",
  "MLOps",
  "Data Engineering",
  "Cloud",
  "DevOps",
  "Observability",
  "BI",
  "Security",
  "Messaging",
  "API",
  "Tools"
];

// Domain Expertise
export const domainExpertise = [
  { id: 1, name: "Banking Intelligence Systems", level: 95, icon: "🏦" },
  { id: 2, name: "Customer Segmentation", level: 95, icon: "👥" },
  { id: 3, name: "Credit Scoring & Risk Assessment", level: 90, icon: "💳" },
  { id: 4, name: "Fraud Detection", level: 85, icon: "🛡️" },
  { id: 5, name: "Churn Prediction", level: 90, icon: "📉" },
  { id: 6, name: "E-Commerce Analytics", level: 90, icon: "🛒" },
  { id: 7, name: "Dynamic Pricing", level: 90, icon: "💰" },
  { id: 8, name: "NLP & Conversational AI", level: 90, icon: "💬" },
  { id: 9, name: "Real-time Analytics", level: 90, icon: "⚡" },
  { id: 10, name: "Feature Engineering", level: 95, icon: "🔧" }
];

// Certifications data
export const certifications = [
  {
    id: 1,
    title: "Django Backend Development",
    issuer: "Coursera",
    category: "Backend Development"
  },
  {
    id: 2,
    title: "Neural Networks and Deep Learning",
    issuer: "Coursera",
    category: "AI/ML"
  },
  {
    id: 3,
    title: "Linear Algebra for Machine Learning and Data Science",
    issuer: "Coursera",
    category: "AI/ML"
  },
  {
    id: 4,
    title: "Introduction to TensorFlow for AI, ML, and Deep Learning",
    issuer: "Coursera",
    category: "AI/ML"
  },
  {
    id: 5,
    title: "Mathematics for Machine Learning: Linear Algebra",
    issuer: "Coursera",
    category: "AI/ML"
  },
  {
    id: 6,
    title: "Intro to AI Engineering",
    issuer: "Coursera",
    category: "AI/ML"
  },
  {
    id: 7,
    title: "Agile Project Management",
    issuer: "Life Global Certificate",
    category: "Project Management"
  },
  {
    id: 8,
    title: "Digital Marketing",
    issuer: "HubSpot Academy",
    category: "Marketing"
  },
  {
    id: 9,
    title: "Content Marketing",
    issuer: "HubSpot Academy",
    category: "Marketing"
  },
  {
    id: 10,
    title: "Search Engine Optimization (SEO)",
    issuer: "HubSpot Academy",
    category: "Marketing"
  },
  {
    id: 11,
    title: "Customer Relationship Management",
    issuer: "Life Global Certificate",
    category: "Business"
  },
  {
    id: 12,
    title: "Project Management 101 PMP Training",
    issuer: "Simplilearn",
    category: "Project Management"
  },
  {
    id: 13,
    title: "Dereja Academy Accelerated Program",
    issuer: "Dereja Academy",
    category: "Soft Skills"
  }
];
