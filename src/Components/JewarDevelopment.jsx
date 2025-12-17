import React from "react";
import "../Styles/componentstyles/JewarDevelopment.css";

const developmentData = [
  {
    title: "Jewar International Airport",
    img: "https://letsdigg.in/wp-content/uploads/2025/02/image-2.png",
    desc: "A world-class international airport under construction that will be one of the largest in Asia, boosting connectivity and economic growth."
  },
  {
    title: "Proposed ISBT",
    img: "https://d13ir9awo5x8gl.cloudfront.net/dyn-res/news/news_1721499151071518149.webp",
    desc: "A major Inter State Bus Terminal is proposed, ensuring better public transport access for long-distance travelers and residents."
  },
  {
    title: "International Cricket Stadium",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Uppal_stadium_Rajiv_Gandhi_International_Cricket_Stadium.jpg/960px-Uppal_stadium_Rajiv_Gandhi_International_Cricket_Stadium.jpg",
    desc: "A top-tier cricket stadium is in the pipeline to host international tournaments, boosting tourism and economy in the region."
  },
  {
    title: "Proposed Night Safari",
    img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202503/g-240723266-16x9_0.jpg?VersionId=CdrL3FdjzFbwRlovccHsj7taDIgIvlfd",
    desc: "India’s first night safari is planned here, promoting wildlife tourism and unique entertainment."
  },
  {
    title: "Budh International Circuit",
    img: "https://akm-img-a-in.tosshub.com/sites/dailyo//resources/202309/maxresdefault-1220923022639.jpeg",
    desc: "India's only F1 race track situated nearby, ideal for high-profile motorsport events."
  },
  {
    title: "Delhi-Mumbai Industrial Corridor",
    img: "https://globalgrowthforum.com/wp-content/uploads/2022/04/DMICB1MDHL.jpg",
    desc: "One of India's most ambitious infrastructure projects connecting major industrial hubs."
  },
  {
    title: "Eastern Peripheral Expressway",
    img: "https://pbs.twimg.com/media/EQLfUO4U0AInHLk.jpg:large",
    desc: "A high-speed expressway easing traffic congestion and enabling rapid connectivity across NCR."
  },
  {
    title: "Freight Corridor By Indian Railways",
    img: "https://cms-cd.apmterminals.com/pipavav/-/media/mainsite/asia-and-pacific/Pipavav/services/cabotage-movement.jpg",
    desc: "High-capacity freight corridor to facilitate industrial logistics and transportation."
  },
  {
    title: "Proposed Mono Rail",
    img: "https://urbantransportnews.com/assets/uploads/gallary/20210219152734.jpg",
    desc: "Planned monorail project for internal mobility around Jewar region and connecting towns."
  },
  {
    title: "World Class Universities",
    img: "https://www.studyinchina.com.my/web/page/tsinghua-university-is-the-25th-best-in-the-world/uploads/Rankings/qs20162.jpg",
    desc: "Many global-standard universities and higher education institutes are coming up around Jewar."
  },
  {
    title: "Hospitals",
    img: "https://static.vecteezy.com/system/resources/thumbnails/036/372/442/small_2x/hospital-building-with-ambulance-emergency-car-on-cityscape-background-cartoon-illustration-vector.jpg",
    desc: "Multiple advanced multi-specialty hospitals are planned to provide premium healthcare."
  },
  {
    title: "Tech Zone",
    img: "https://lanzhou-hightechzone.com/wp-content/uploads/2022/01/Dinglian-Park-2-scaled.jpg",
    desc: "Integrated tech parks and zones supporting IT, startups, and innovation-based infrastructure."
  }
];

const JewarDevelopment = () => {
  return (
    <div className="development-container">
      <h1 className="page-title">Nearby Development</h1>

      <div className="grid-container">
        {developmentData.map((item, index) => (
          <div key={index} className="development-card">
            <img src={item.img} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      <section className="feature-section">
        <h2>Why Invest in Our Plots Near Jewar Airport?</h2>
        <ul>
          <li>✅ Prime location close to International Airport</li>
          <li>✅ Assured returns & future appreciation</li>
          <li>✅ Near Olympic Village, industrial zones & residential projects</li>
          <li>✅ Great connectivity (Yamuna Expressway, RRTS)</li>
          <li>✅ Legal documentation & Gated society</li>
          <li>✅ Immediate registry & possession available</li>
          <li>✅ 24x7 security, water, and electricity facilities</li>
        </ul>
      </section>
    </div>
  );
};

export default JewarDevelopment;
