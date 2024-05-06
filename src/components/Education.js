import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap, FaBookReader, FaLaptopCode } from "react-icons/fa";
import "./Education.css";



const Education = () => {
  const educationData = [
    {
      institution: "College of Engineering and Technology",
      course: "B.Tech (Information Technology)",
      grades: "CGPA: 8.23",
      location: "Bhubaneswar, Odisha",
      time: "2017 - 2021",
      icon: <FaLaptopCode />,
    },
    {
      institution: "Vidyashram Public School",
      course: "XII (CBSE)",
      grades: "Percentage: 86.4%",
      location: "Kota, Rajasthan",
      time: "2014 - 2016",
      icon: <FaBookReader />,
    },
    {
      institution: "Little Flower School",
      course: "X (ICSE)",
      grades: "Percentage: 95.6%",
      location: "Balangir, Odisha",
      time: "2004 - 2014",
      icon: <FaGraduationCap />,
    },
  ];

  return (
    <div className="education-container">
      <VerticalTimeline>
        {educationData.map((education, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--education"
            date={education.time}
            iconStyle={{ background: "#333", color: "#fff" }}
            icon={education.icon}
          >
            <h3 className="vertical-timeline-element-title">
              {education.institution}
            </h3>
            <h5 className="vertical-timeline-element-subtitle">
              {education.course}
            </h5>
            <p>{education.grades}</p>
            <p>Location: {education.location}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Education;
