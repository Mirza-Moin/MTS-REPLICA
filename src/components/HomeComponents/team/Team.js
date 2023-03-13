import React from "react";
import TeamMember from "../../ReuseableComponents/teamMemberCard/TeamMember";
import "./team.scss";

function Team() {
  return (
    <main className="team-container">

      <main className="team">
        <div className="team-header">
          <h1>META TIGER TEAM</h1>
          <p>
          Join us from the first step in our roar-some adventure to educate the
          world about the plight of the tiger and support their vital
          preservation!
        </p>
        </div>
      </main>

      <div className="members">
        <div className="top">
        <TeamMember
            name="NAME"
            position="position"
            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus,"
            icon={true}
            size="large"
          />
          <TeamMember
            name="NAME"
            position="position"
            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus,"
            icon={true}
            size="large"
          />
          <TeamMember
            name="NAME"
            position="position"
            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus,"
            icon={true}
            size="large"
          />
          <TeamMember
            name="NAME"
            position="position"
            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus,"
            icon={true}
            size="large"
          />
        </div>
        <div className="center">
        <TeamMember name="NAME" position="position" size="medium" />
          <TeamMember name="NAME" position="position" size="medium" />
          <TeamMember name="NAME" position="position" size="medium" />
          <TeamMember name="NAME" position="position" size="medium" />
          <TeamMember name="NAME" position="position" size="medium" />
          <TeamMember name="NAME" position="position" size="medium" />
        </div>
        <div className="bootom"></div>
      </div>
      {/* <div className="members">
       
        <div className="center">
          <TeamMember name="NAME" position="position" size="medium" />
          <TeamMember name="NAME" position="position" size="medium" />
          <TeamMember name="NAME" position="position" size="medium" />
          <TeamMember name="NAME" position="position" size="medium" />
          <TeamMember name="NAME" position="position" size="medium" />
          <TeamMember name="NAME" position="position" size="medium" />
          <TeamMember name="NAME" position="position" size="medium" />
          <TeamMember name="NAME" position="position" size="medium" />
          <TeamMember name="NAME" position="position" size="medium" />
          <TeamMember name="NAME" position="position" size="medium" />
          <TeamMember name="NAME" position="position" size="medium" />
          <TeamMember name="NAME" position="position" size="medium" />
          <TeamMember name="NAME" position="position" size="medium" />
          <TeamMember name="NAME" position="position" size="medium" />
        </div>
        <div className="bottom">
          <TeamMember name="NAME" position="position" size="small" />
          <TeamMember name="NAME" position="position" size="small" />
          <TeamMember name="NAME" position="position" size="small" />
          <TeamMember name="NAME" position="position" size="small" />
          <TeamMember name="NAME" position="position" size="small" />
          <TeamMember name="NAME" position="position" size="small" />
        </div>
      </div> */}
    </main>
  );
}

export default Team;
