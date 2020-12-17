import React from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

import "./Timeline.scss";

const TimelineComp = () => {
  return (
    <Timeline lineColor={"#ddd"}>
      <TimelineItem
        key="001"
        dateText="March 2020 – Present"
        dateInnerStyle={{ background: "#2c4d6e", color: "#fff" }}
      >
        <h3 className="padding-bottom-sm">Software Engineer, Apadmi</h3>
        <p>
          • &nbsp;Write software in a variety of languages, always ensuring the
          quality of the work delivered is of the highest standard.
        </p>
        <p>• &nbsp;Independently producing solid engineering solutions.</p>
        <p>
          • &nbsp;Liaising with other front-end and back-end developers,
          designers, testers and implementation staff.
        </p>
        <p>
          • &nbsp;Present to the wider team with updates on projects and
          technology changes.
        </p>
        <p>
          • &nbsp;Interpreting customer requirements to deliver efficient,
          functional solutions.
        </p>
        <p>
          • &nbsp;Understand and use development environments and associated
          tools.
        </p>
        <p>
          • &nbsp;Ensuring the high quality of your work – regularly testing and
          documenting code in line with project policy and subjecting it to code
          reviews.
        </p>
        <p>
          • &nbsp;Assisting in investigating and resolving web/software bugs.
        </p>
      </TimelineItem>
      <TimelineItem
        key="002"
        dateText="Jan 2020 – Present"
        dateInnerStyle={{ background: "#2c4d6e", color: "#fff" }}
        bodyContainerStyle={{
          background: "#ddd",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
        }}
      >
        <h3 className="padding-bottom-sm">Managing Director, PelTech</h3>
        <p>• &nbsp;Developing software for clients.</p>
        <p>• &nbsp;Quoting clients for costs of software.</p>
        <p>• &nbsp;Developing production grade front end web architecture.</p>
        <p>
          • &nbsp;Ensuring cross-platform optimisation across required devices.{" "}
        </p>
        <p>• &nbsp;Meeting both technical and business needs. </p>
        <p>
          • &nbsp;Staying abreast of developments in web applications and
          programming languages.
        </p>
      </TimelineItem>
      <TimelineItem
        key="003"
        dateText="March 2019 – March 2020"
        dateInnerStyle={{ background: "#2c4d6e", color: "#fff" }}
      >
        <h3 className="padding-bottom-sm">
          Frontend Developer, Think Money Group
        </h3>
        <p>
          • &nbsp;Building the front end of web based applications using the
          latest techniques and technologies (full websites, customer journeys,
          landing pages, HTML ads).
        </p>
        <p>
          • &nbsp;Working in a cross functional team, and attending SCRUMs and
          project meetings.
        </p>
        <p>
          • &nbsp;Liaising with other front-end and back-end developers,
          designers, SEO team, PPC, testers and implementation staff.
        </p>
        <p>
          • &nbsp;Ensuring cross-platform optimisation across required devices.
        </p>
        <p>
          • &nbsp;Interpreting customer requirements to deliver efficient,
          functional solutions.
        </p>
        <p>
          • &nbsp;Keeping up-to-date with latest technologies and suggest when
          appropriate to implement.
        </p>
        <p>
          • &nbsp;Assisting in investigating and resolving web/software bugs.
        </p>
      </TimelineItem>
      <TimelineItem
        key="004"
        dateText="Jan 2019 – April 2019"
        dateInnerStyle={{ background: "#2c4d6e", color: "#fff" }}
        bodyContainerStyle={{
          background: "#ddd",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
        }}
      >
        <h3 className="padding-bottom-sm">Lead Frontend Developer, Dyne</h3>
        <h4>Contract</h4>
        <p>
          • &nbsp;Using React inc Redux combined with Typescript ( Graphql )
          Node.
        </p>
        <p>
          • &nbsp;Coordinating with, and implementing handovers from, the design
          team.
        </p>
        <p>• &nbsp;Developing production grade front end web architecture.</p>
        <p>
          • &nbsp;Ensuring cross-platform optimisation across required devices.{" "}
        </p>
        <p>
          • &nbsp;Conceptualising and implementing robust QA and testing
          frameworks.{" "}
        </p>
        <p>
          • &nbsp;Taking ownership of, and managing / seeing through a project
          from conception to finalisation.{" "}
        </p>
        <p>• &nbsp;Meeting both technical and business needs. </p>
        <p>
          • &nbsp;Staying abreast of developments in web applications and
          programming languages.
        </p>
      </TimelineItem>
      <TimelineItem
        key="005"
        dateText="Sep 2018 – Nov 2018"
        dateInnerStyle={{ background: "#2c4d6e", color: "#fff" }}
      >
        <h3 className="padding-bottom-sm">
          FullStack Developer, Eversmart Energy
        </h3>
        <h4>Contract</h4>
        <p>• &nbsp;Developing software in time for release date. </p>
        <p>• &nbsp;Making sure that the system is ready for launch day. </p>
        <p>
          • &nbsp;Checking that the full website is reponsive on all browsers{" "}
        </p>
        <p>• &nbsp;Fixing errors or simplying code. </p>
        <p>• &nbsp;Ensure consistency throughout.</p>
      </TimelineItem>
      <TimelineItem
        key="006"
        dateText="Jun 2018 – Sep 2018"
        dateInnerStyle={{ background: "#2c4d6e", color: "#fff" }}
        bodyContainerStyle={{
          background: "#ddd",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
        }}
      >
        <h3 className="padding-bottom-sm">
          Software Developer, Manchester Metropolitan University
        </h3>
        <h4>Contract</h4>
        <p>• &nbsp;Develop a bespoke application for real-world use.</p>
        <p>
          • &nbsp;Research, design, implement and test a custom web application
          to support the creation of augmented reading lists.
        </p>
        <p>
          • &nbsp;An application which allows tutors to upload documents which
          can then be annotated with simplifications and explanations where
          necessary.
        </p>
        <p>
          • &nbsp;Participating in ongoing research and making a difference to
          the learning experience of other students.
        </p>
        <p>• &nbsp;Ensure consistency and maximise efficiency.</p>
      </TimelineItem>
      <TimelineItem
        key="007"
        dateText="May 2013 – Aug 2015"
        dateInnerStyle={{ background: "#2c4d6e", color: "#fff" }}
      >
        <h3 className="padding-bottom-sm">
          Managing Director of Andy Holdings Ltd
        </h3>
        <p>
          • &nbsp;Assisted the clients with refurbishments and other duties as
          required, working in line with health and safety.
        </p>
        <p>
          • &nbsp;Supplied all deliveries to the clients personally which made
          me dependable and punctual.
        </p>
        <p>
          • &nbsp;Managed my time for projects and their deadlines which helped
          me learn to work under pressure.
        </p>
        <p>• &nbsp;Delivered high standards to exceed the customers’ needs.</p>
      </TimelineItem>
      <TimelineItem
        key="008"
        dateText="Oct 2012 – Mar 2013"
        dateInnerStyle={{ background: "#2c4d6e", color: "#fff" }}
        bodyContainerStyle={{
          background: "#ddd",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
        }}
      >
        <h3 className="padding-bottom-sm">
          Co-Founder of Avanti Construction & Maintenance
        </h3>
        <p>
          • &nbsp;Learnt the fundamentals of owning a business and the
          responsibilities associated.
        </p>
        <p>
          • &nbsp;Read over contracts thoroughly and ensure that contract
          requirement is met.
        </p>
        <p>
          • &nbsp;Made cost estimations for different types of refurbishments
          with various scales of projects.
        </p>
        <p>
          • &nbsp;Lead a team of over fifteen employees which strongly improved
          my responsibility skills.
        </p>
      </TimelineItem>
      <TimelineItem
        key="009"
        dateText="Mar 2011 – May 2011"
        dateInnerStyle={{ background: "#2c4d6e", color: "#fff" }}
      >
        <h3 className="padding-bottom-sm">
          IT Technician, Systems Services, Gibraltar
        </h3>
        <p>
          • &nbsp;Installed and configured internet content filtering system for
          client businesses.
        </p>
        <p>
          • &nbsp;Installed software on computers for customers independently.
        </p>
        <p>
          • &nbsp;Regularly took computers apart and rebuilt them for customers.
        </p>
        <p>• &nbsp;Found and replaced defected component(s)</p>
      </TimelineItem>
    </Timeline>
  );
};

export default TimelineComp;
