import React from "react";
import ProjectCard from "../Components/ui/ProjectCard";
import { projects } from "../data/projects";
import "./Projects.css";

// Import main project images
import project1 from "../img/context_adaptive_intent_fusion_caif_ai_architecture.jpg";
import project2 from "../img/daily_orders_holiday_spikes_regular_vs_holiday_nov2023.jpg";
import project3 from "../img/customer_segment_overview_pie_bar_dashboard.jpg";
import project4 from "../img/lightgbm_potato_price_forecast_actual_vs_predicted.jpg";
import project5 from "../img/project-1 (6).png";
import project6 from "../img/project-1 (5).png";
import project7 from "../img/project-1 (7).png";
import project8 from "../img/project-1 (8).png";
import project9 from "../img/project-1 (9).png";
import project10 from "../img/dcdce-engine.png";
import project11 from "../img/product-standardization-pipeline.png";
import project12 from "../img/chipchip_2year_anniversary_celebration.jpg";
import project13 from "../img/project-1 (1).png";

// Import gallery images
import caifArchitecture from "../img/context_adaptive_intent_fusion_caif_ai_architecture.jpg";
import chipchip2years from "../img/chipchip_2year_anniversary_celebration.jpg";
import ordersHolidayNov from "../img/daily_orders_holiday_spikes_regular_vs_holiday_nov2023.jpg";
import ordersHolidayOct from "../img/daily_orders_holiday_spikes_regular_vs_holiday_oct202.jpg";
import ordersHolidayBreakdown from "../img/daily_orders_holiday_spikes_pre_holiday_post_breakdown.jpg";
import lightgbmForecast from "../img/lightgbm_potato_price_forecast_actual_vs_predicted.jpg";
import crossElasticity from "../img/cross_elasticity_demand_heatmap_discounting.jpg";
import deliverySpeed from "../img/delivery_speed_effect_on_aov_by_customer_persona.jpg";
import orderDistribution from "../img/order_distribution_delivery_windows_by_persona.jpg";
import segmentOverview from "../img/customer_segment_overview_pie_bar_dashboard.jpg";
import segmentGrowth from "../img/customer_segment_growth_over_time_stacked_area.jpg";
import rfmSegment from "../img/rfm_segment_purchase_by_day_of_week.jpg";

const projectImages = {
  "context_adaptive_intent_fusion_caif_ai_architecture.jpg": project1,
  "daily_orders_holiday_spikes_regular_vs_holiday_nov2023.jpg": project2,
  "customer_segment_overview_pie_bar_dashboard.jpg": project3,
  "lightgbm_potato_price_forecast_actual_vs_predicted.jpg": project4,
  "project-1 (6).png": project5,
  "project-1 (5).png": project6,
  "project-1 (7).png": project7,
  "project-1 (8).png": project8,
  "project-1 (9).png": project9,
  "dcdce-engine.png": project10,
  "product-standardization-pipeline.png": project11,
  "chipchip_2year_anniversary_celebration.jpg": project12,
  "project-1 (1).png": project13
};

const galleryImages = {
  "context_adaptive_intent_fusion_caif_ai_architecture.jpg": caifArchitecture,
  "chipchip_2year_anniversary_celebration.jpg": chipchip2years,
  "daily_orders_holiday_spikes_regular_vs_holiday_nov2023.jpg": ordersHolidayNov,
  "daily_orders_holiday_spikes_regular_vs_holiday_oct202.jpg": ordersHolidayOct,
  "daily_orders_holiday_spikes_pre_holiday_post_breakdown.jpg": ordersHolidayBreakdown,
  "lightgbm_potato_price_forecast_actual_vs_predicted.jpg": lightgbmForecast,
  "cross_elasticity_demand_heatmap_discounting.jpg": crossElasticity,
  "delivery_speed_effect_on_aov_by_customer_persona.jpg": deliverySpeed,
  "order_distribution_delivery_windows_by_persona.jpg": orderDistribution,
  "customer_segment_overview_pie_bar_dashboard.jpg": segmentOverview,
  "customer_segment_growth_over_time_stacked_area.jpg": segmentGrowth,
  "rfm_segment_purchase_by_day_of_week.jpg": rfmSegment
};

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">A showcase of AI/ML systems, banking intelligence platforms, and full-stack applications</p>
        
        {/* Project Grid */}
        <div className="grid-container">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id}
              project={project}
              imageSrc={projectImages[project.image]}
              galleryImages={galleryImages}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
