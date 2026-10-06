// ---------------------------------------------------------------------------
// This is your full, current site content. Replace the entire contents of
// data/content.js with this file.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Manoj Lamichhane",
  initials: "ML",
  credentials: "EIT, PE (Civil: Water Resources & Environmental)",
  title: "Water Resources Scientist, Ph.D.",
  location: "Denver, CO",
  badge: "PH.D. · EIT · PE (WATER RESOURCES)",
  bioGreeting: "Hi, I'm Manoj!",
  bio:
    "I'm a Water Resources Engineer working at the intersection of machine learning, climate modeling, and remote sensing. I spent my PhD years applying machine learning and advanced remote sensing to understand and address complex water resources challenges. I'm especially interested in building and deploying ML models and developing scalable workflows through MLOps.",
  email: "drlamichhane.manoj@gmail.com",
  phone: "(607) 663-0567",
  scholarUrl: "https://scholar.google.com/citations?user=1a5hblcAAAAJ&hl=en",
  linkedinUrl: "https://www.linkedin.com/in/manoj-lamichhane-ph-d-58455028b",
  githubUrl: "https://github.com/manojlamichhane-ml",
  orcidUrl: "https://orcid.org/0009-0009-5581-6692",
  cvUrl: "/cv.pdf",
};

export const education = [
  {
    degree: "Ph.D. in Water Resources Engineering",
    focus: "GPA 4.00/4.00",
    institution: "South Dakota State University, Brookings, SD",
    period: "Aug 2026",
  },
  {
    degree: "M.S. in Water Resources Engineering",
    focus: "GPA 3.66/4.00 (WES Evaluation)",
    institution: "Tribhuvan University, Nepal",
    period: "Sep 2021",
  },
 ];

export const experience = [
  {
    role: "Water Resources Scientist",
    organization: "Knight Piésold",
    period: "May 2026 – Present",
    description:
      "Perform dam breach analyses to estimate breach outflow hydrographs and simulate downstream flood wave propagation, inundation extent, flow depths, velocities, and arrival times. Build, run, and troubleshoot 2D and 3D hydraulic models in FLO-2D, RiverFlow2D, and FLOW-3D. Develop Python scripts to automate pre-processing of model inputs and post-processing of outputs into depth, velocity, and hazard rasters. Use QGIS for terrain/DEM processing and production of inundation and hazard maps.",
  },
  {
    role: "Graduate Research Assistant",
    organization: "South Dakota State University, Brookings, SD",
    period: "Aug 2023 – Aug 2026",
    description:
      "Developed data-driven models to estimate soil moisture, evapotranspiration, and streamflow using multi-source satellite data. Applied distributed and semi-distributed hydrological models, achieving a 27% reduction in error for deep-layer soil moisture prediction. Automated data processing pipelines in Python and Google Earth Engine for real-time soil moisture prediction. Supported proposal development for NASA, USDA, and NSF.",
  },
  {
    role: "Summer Research Intern, HPC Laboratory",
    organization: "Mississippi State University, Starkville, MS",
    period: "Jun 2025 – Aug 2025",
    description:
      "Processed large climate, precipitation, and terrain datasets using high-performance computing for large-scale environmental analysis. Built an interactive ArcGIS Pro decision-support portal for evaluating environmental risk and land-surface conditions.",
  },
  {
    role: "Water Resources Engineer",
    organization: "Sentinel Engineering Consultancy, Kathmandu, Nepal",
    period: "Sep 2018 – Jun 2023",
    description:
      "Processed and analyzed large-scale terrain, survey, and environmental datasets across 30+ infrastructure projects, generating data products used in engineering design and permitting decisions. Applied GIS-based terrain analysis to convert raw geospatial data into model-ready inputs for infrastructure planning. Prepared technical data summaries and risk assessments for infrastructure and disaster-mitigation planning.",
  },
  {
    role: "Part-time Lecturer",
    organization: "Tribhuvan University, Nepal",
    period: "Apr 2020 – Jun 2023",
    description:
      "Taught Hydraulics, Hydrology, Fluid Mechanics, and Groundwater Engineering to undergraduate civil engineering students. Mentored students on applied modeling using HEC-RAS and HEC-HMS.",
  },
];

export const skills = [
  {
    category: "Water Resources — Hydraulics & Hydrology Modeling",
    items: [
      {
        name: "HEC-RAS (1D & 2D)",
        icon: "hec-ras.png",
        story:
          "My very first hydraulic model, and still the one everything else gets measured against. I've run 1D HEC-RAS on more than 50 bridge scour analyses, and used both 1D and 2D for flood inundation mapping and dam breach studies.",
      },
      {
        name: "HEC-HMS",
        icon: "hec-hms.png",
        story:
          "My first hydrologic model — the one that turns rainfall into runoff. I use it to derive return-period floods that feed straight into the hydraulic models downstream.",
      },
      {
        name: "FLO-2D",
        icon: "flo-2d.png",
        story:
          "The model waiting for me on day one at my first U.S. consulting job. I've used it for tailings dam breach analysis — both the breach itself and routing the flood wave downstream.",
      },
      {
        name: "RiverFlow2D",
        icon: "riverflow-2d.png",
        story:
          "My favorite 2D hydraulics engine, hands down — the sheer number of controls it gives you is addictive once you learn where they live. I use it for dam breach analysis.",
      },
      {
        name: "FLOW-3D",
        icon: "flow-3d.png",
        story:
          "The most powerful software in my toolkit. When a dam breach or bridge scour problem needs full 3D resolution, this is what I open.",
      },
      {
        name: "HY-8",
        icon: "hy-8.png",
        story: "The quiet workhorse for culvert analysis — sizing crossings and checking flow capacity.",
      },
      {
        name: "SWAT / SWAT+",
        icon: "swat.png",
        story:
          "A long-running relationship — I've used these models for years for rainfall-runoff, sediment, and nutrient modeling across entire watersheds.",
      },
      {
        name: "ArcGIS",
        icon: "arcgis.png",
        story:
          "My go-to for a long time — one of the most capable toolsets for data prep and visualization. For the heavy lifting, I write code inside it to automate the repetitive parts.",
      },
      {
        name: "QGIS",
        icon: "qgis.png",
        story:
          "I didn't fall for it right away. But once I started building real workflows in it, I became a convert — open source, capable, and I use it constantly for visualization, data prep, and scripting automation into hydraulic and hydrologic models.",
      },
      {
        name: "Civil 3D",
        icon: "civil-3d.png",
        story:
          "Where raw survey points become usable terrain — I've used it to turn field data into terrain surfaces, river alignments, and cross-sections that feed straight into HEC-RAS models.",
      },
    ],
  },
  {
    category: "Machine Learning & Data Science",
    items: [
      {
        name: "Machine Learning",
        icon: "machine-learning.png",
        story:
          "The thread running through my whole PhD — from predicting soil moisture to explaining why wheat yields vary field to field, I build models that turn satellite and climate data into answers.",
      },
      {
        name: "MLOps",
        icon: "mlops.png",
        story:
          "Models are only useful if they keep working after the first run. I build reproducible, end-to-end pipelines — automated batch training and inference on HPC clusters — so research models hold up outside a notebook.",
      },
      {
        name: "HPC",
        icon: "hpc.png",
        story:
          "Big remote sensing datasets don't move fast on a laptop. I run parallel jobs on Linux clusters via SLURM to process climate, terrain, and satellite data at a scale a single machine can't touch.",
      },
      {
        name: "Python",
        icon: "python.png",
        story:
          "My daily language — NumPy and Pandas for wrangling data, Scikit-learn, TensorFlow, and Keras for the modeling, Matplotlib for making sense of it visually.",
      },
      {
        name: "Google Earth Engine",
        icon: "google-earth-engine.png",
        story:
          "My platform of choice for planet-scale remote sensing — pulling, filtering, and processing satellite imagery at a scale that would be unworkable on a local machine.",
      },
      {
        name: "Java (GEE)",
        icon: "java.png",
        story:
          "Not my primary language, but the one I reach for inside Google Earth Engine's code editor when building large-scale remote sensing pipelines.",
      },
      {
        name: "R",
        icon: "r.png",
        story:
          "My statistics language — Mann-Kendall and Pettitt trend tests, OLS calibration, the kind of rigorous stats work journal reviewers expect done properly.",
      },
      {
        name: "FORTRAN",
        icon: "fortran.png",
        story:
          "An unusual one for a water resources engineer to know, but it comes up more than you'd think in legacy hydrologic and climate modeling code — I can read it, write it, and keep it running.",
      },
    ],
  },
];

export const projects = [
  {
    title: "Dam Breach Analysis & Hazard Mapping",
    summary:
      "2D/3D hydraulic modeling (FLO-2D, RiverFlow2D, FLOW-3D) of dam breach outflow hydrographs and downstream flood propagation, with Python and QGIS workflows automating model pre- and post-processing into hazard maps and report-ready figures.",
    tags: ["Hydraulic Modeling", "Dam Safety", "Python", "QGIS"],
  },
  {
    title: "Explainable ML for Hydrological Drivers of Yield Variability",
    summary:
      "Open-source research project applying explainable machine learning to identify the hydrological drivers behind sub-field dryland wheat yield variability.",
    tags: ["Machine Learning", "Hydrology", "GitHub"],
    link: "https://github.com/manojlamichhane-ml/Explainable-ML-reveals-hydrological-drivers-of-yield-variability",
  },
  {
    title: "Data-Driven Soil Moisture, ET & Streamflow Modeling",
    summary:
      "PhD research applying machine learning and deep learning to satellite remote sensing and climate data on a USDA-funded project, using Google Earth Engine and HPC clusters for large-scale processing.",
    tags: ["Remote Sensing", "Machine Learning", "USDA", "HPC"],
  },
  {
    title: "HPC Climate & Terrain Decision-Support Portal",
    summary:
      "Interactive ArcGIS Pro portal built during a summer research internship, processing large climate, precipitation, and terrain datasets on HPC clusters to support decisions on environmental risk and land-surface conditions.",
    tags: ["HPC", "ArcGIS Pro", "Climate Data"],
  },
];

export const publicationsNote =
  "14 peer-reviewed papers in high-impact Q1 journals and 21 oral/poster presentations at national and international conferences — full record and citation metrics on Google Scholar.";

export const publications = [
  {
    title:
      "Explainable machine learning reveals water-related drivers of sub-field dryland wheat yield variability",
    authors: "Lamichhane, M., Mehan, S., Mankin, K. R., Trooien, T., Maimaitijiang, M., & Rekabdarkolaee, H. M.",
    venue: "European Journal of Agronomy",
    year: "2026",
    link: "https://doi.org/10.1016/j.eja.2026.128296",
  },
  {
    title:
      "Daily Actual Evapotranspiration Estimation in Dryland Cropping Systems Using Parsimonious Machine Learning Frameworks",
    authors: "Lamichhane, M., Mehan, S., & Mankin, K. R.",
    venue: "Measurement: Digitalization",
    year: "2026",
    link: "https://doi.org/10.1016/j.meadig.2026.100044",
  },
  {
    title: "Assessment and forecasting of drought in Nepal using long short-term memory model",
    authors: "Lamichhane, M., Jha, A. N., Ankon, S. B., Suwal, N., Khatakho, R., & Ansari, A.",
    venue: "Theoretical and Applied Climatology",
    year: "2026",
    link: "https://doi.org/10.1007/s00704-026-06298-5",
  },
  {
    title:
      "Multi-Layer Root Zone Soil Moisture Estimation Using Field and Remote Sensing Data Fusion with Machine Learning in Semi-Arid Croplands",
    authors: "Lamichhane, M., Mehan, S., & Mankin, K. R.",
    venue: "Vadose Zone Journal",
    year: "2025",
    link: "https://doi.org/10.1002/vzj2.70047",
  },
  {
    title:
      "Surface Soil Moisture Prediction Using Multimodal Remote Sensing Data Fusion and Machine Learning Algorithms in Semi-Arid Agricultural Region",
    authors: "Lamichhane, M., Mehan, S., & Mankin, K. R.",
    venue: "Science of Remote Sensing",
    year: "2025",
    link: "https://doi.org/10.1016/j.srs.2025.100255",
  },
  {
    title:
      "Soil Moisture Prediction Using Remote Sensing and Machine Learning Algorithms: A Review on Progress, Challenges, and Opportunities",
    authors: "Lamichhane, M., Mehan, S., & Mankin, K. R.",
    venue: "Remote Sensing",
    year: "2025",
    link: "https://doi.org/10.3390/rs17142397",
  },
  {
    title: "Assessing Hydropower Production Potential with Multisite Hydrological Modeling in the Koshi River Basin, Nepal",
    authors: "Jha, A., Bhattarai, U., Lamichhane, M., Mehan, S., Bhattarai, P., & Sanyam, G.",
    venue: "Energy Conversion and Management: X",
    year: "2025",
    link: "https://doi.org/10.1016/j.ecmx.2025.101283",
  },
  {
    title:
      "Predictive, interpretive and optimizable machine learning models for fluidized bed gasifiers to increase hydrogen production and reduce tar yield",
    authors: "Kafle, S., Lamichhane, M., & Adhikari, S.",
    venue: "International Journal of Hydrogen Energy",
    year: "2025",
    link: "https://doi.org/10.1016/j.ijhydene.2025.152187",
  },
  {
    title:
      "A Review of Current Trends, Challenges, and Future Perspectives in Machine Learning Applications to Water Resources in Nepal",
    authors: "Chaulagain, S., Lamichhane, M., & Chaulagain, U.",
    venue: "Journal of Hazardous Materials Advances",
    year: "2025",
    link: "https://doi.org/10.1016/j.hazadv.2025.100678",
  },
  {
    title: "Evaluating different drought products for assessing drought and implications on agriculture in Nepal",
    authors: "Chaulagain, S., Lamichhane, M., Chaulagain, U., Gyawali, S., Shrestha, S., & Pandey, V. P.",
    venue: "Results in Engineering",
    year: "2025",
    link: "https://doi.org/10.1016/j.rineng.2025.104205",
  },
  {
    title:
      "Evaluating empirical and machine learning approaches for reference evapotranspiration estimation using limited climatic variables in Nepal",
    authors: "Shrestha, E., Poudyal, S., Ghimire, A., Maharjan, S., Lamichhane, M., & Mehan, S.",
    venue: "Results in Engineering",
    year: "2025",
    link: "https://doi.org/10.1016/j.rineng.2025.104254",
  },
  {
    title: "Shift in Streamflow Regime in Headwater Catchments: Causes and Impacts",
    authors: "Mehan, S., Lamichhane, M., & Jha, A.",
    venue: "Navigating the Nexus: Hydrology, Agriculture, Pollution and Climate Change, Vol. 1 (Springer Nature)",
    year: "2025",
    link: "https://link.springer.com/chapter/10.1007/978-3-031-76532-2_1",
  },
  {
    title:
      "Assessing the impact of climate change on streamflow in the Tamor River Basin, Nepal: an analysis using SWAT and CMIP6 scenarios",
    authors: "Subedi, S. R., Lamichhane, M., Dhungana, S., Chalise, B., Bhattarai, S., Chaulagain, U., & Khatiwada, R.",
    venue: "Discover Civil Engineering",
    year: "2024",
    link: "https://doi.org/10.1007/s44290-024-00143-2",
  },
  {
    title:
      "Integrating solar-induced chlorophyll fluorescence with traditional remote sensing and environmental variables for enhanced rice yield prediction in Nepal using machine learning",
    authors: "Lamichhane, M., Chapagain, A. R., Mehan, S., Kafle, S., & Ames, D. P.",
    venue: "Remote Sensing Applications: Society and Environment",
    year: "2024",
    link: "https://doi.org/10.1016/j.rsase.2024.101371",
  },
  {
    title: "Assessment of Surface Water Availability of Kathmandu Valley Using SWAT Model",
    authors: "Pokhrel, M., Shakya, N., & Lamichhane, M.",
    venue: "Asian Journal of Water, Environment and Pollution",
    year: "2024",
    link: "https://doi.org/10.3233/AJW240041",
  },
  {
    title:
      "Assessing Climate Change Impacts on Streamflow and Baseflow in the Karnali River Basin, Nepal: A CMIP6 Multi-Model Ensemble Approach Using SWAT and Web-Based Hydrograph Analysis Tool",
    authors: "Lamichhane, M., Phuyal, S., Mahato, R., Shrestha, A., Pudasaini, U., Lama, S. D., Chapagain, A. R., Mehan, S., & Neupane, D.",
    venue: "Sustainability",
    year: "2024",
    link: "https://doi.org/10.3390/su16083262",
  },
  {
    title: "Assessment of Future Water Availability and Irrigation Water Demand Under Climate Change in the Kankai River Basin, Nepal",
    authors: "Lamichhane, M., Mishra, Y., & Bhattarai, P.",
    venue: "Journal of Earth Science & Climatic Change",
    year: "2022",
    link: "https://doi.org/10.4172/2157-7617.1000639",
  },
  {
    title: "Impact of climate change on crop water requirement of Kamala irrigation system, Nepal",
    authors: "Dawadi, S., Mishra, Y., Lamichhane, M., & Tamrakar, J.",
    venue: "Advances in Engineering and Technology: An International Journal",
    year: "2022",
    link: "https://doi.org/10.3126/aet.v2i01.50440",
  },
  {
    title:
      "Out-performing bias-corrected GCM models and CMIP-6 based precipitation and temperature projections for the Bagmati irrigation area",
    authors: "Raila, N. S., Acharya, R., Ghimire, S., Adhikari, S., Khanal, S., Mishra, Y., & Lamichhane, M.",
    venue: "Journal of Advanced College of Engineering and Management",
    year: "2022",
    link: "https://doi.org/10.3126/jacem.v7i01.47342",
  },
  {
    title: "Comparison of available river flow and irrigation water demand of Kankai irrigation system",
    authors: "Lamichhane, M., Mishra, Y., & Bhattarai, P.",
    venue: "IOE Graduate Conference",
    year: "2021",
    link: "http://conference.ioe.edu.np/ioegc10/papers/ioegc-10-053-10073.pdf",
  },
];

export const awards = [
  {
    title: "Outstanding Oral Presentation",
    issuer: "2025 ASABE North Central Intersectional Conference, MN",
    year: "2026",
  },
  {
    title: "ABE Graduate Scholarship Winner",
    issuer: "South Dakota State University",
    year: "2025",
  },
  {
    title: "Outstanding Oral Presentation",
    issuer: "2025 ASABE North Central Intersectional Conference, SD",
    year: "2025",
  },
  {
    title: "Third Place, 3-Minute Thesis Competition",
    issuer: "Department of ABE, SDSU",
    year: "2025",
  },
  {
    title: "Best Presentation Award",
    issuer: "AGU 2024, AGU Remote Sensing Technical Committee",
    year: "2024",
  },
  {
    title: "Travel Award for a Conference",
    issuer: "South Dakota State University",
    year: "2024",
  },
  {
    title: "Outstanding Oral Presentation",
    issuer: "ASABE North Central Regional Section Meeting, SD",
    year: "2024",
  },
];

export const certificates = [
  { title: "Engineer-in-Training (EIT), Certified", year: "" },
  { title: "PE Civil: Water Resources & Environmental — Exam Passed", year: "" },
];

export const service = [
  {
    title: "Peer Reviewer, Springer Nature & Elsevier",
    detail: "20+ manuscripts reviewed in water resources, hydrology, and environmental modeling.",
    year: "2024 – Present",
  },
  {
    title: "Trainer, NSF I-GUIDE 2024 Workshop, Boulder, CO",
    detail: "One-week training on GeoAI applications to predict field-scale actual evapotranspiration.",
    year: "2024",
  },
  {
    title: "Student Panelist, 2025 Great Plains Water Conference",
    detail: "Discussed how Water Resources Research Institutes prepare graduate students for industry and academia.",
    year: "2025",
  },
];

export const memberships = [
  "American Geophysical Union (AGU), 2024 – Present",
  "Committee Member, American Society of Nepalese Engineers, 2024 – Present",
];
