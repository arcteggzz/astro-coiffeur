import styles from "../Styles/MeetTheTeam.module.scss";
import imageOne from "../images/teamMemberOne.jpg";
import imageTwo from "../images/teamMemberFour.jpg";
import imageThree from "../images/teamMemberThree.jpg";

const SingleTeamMember = ({
  imageSrc,
  name,
  position,
}: {
  name: string;
  position: string;
  imageSrc: string;
}) => {
  return (
    <>
      <div className={styles.SingleTeamMember}>
        <img src={imageSrc} alt="" className={styles.team_member_image} />
        <h5 className={styles.member_name}>{name}</h5>
        <p className={styles.member_position}>{position}</p>
      </div>
    </>
  );
};

const MeetTheTeam = () => {
  const teamMembers = [
    {
      name: "Lorem Didie",
      imageSrc: imageOne,
      position: "Owner",
    },
    {
      name: "Nene Esom",
      imageSrc: imageTwo,
      position: "Stylist",
    },
    {
      name: "Crystal Nomski",
      imageSrc: imageThree,
      position: "Retail Barber",
    },
  ];

  return (
    <section className={styles.MeetTheTeam}>
      <h2 className={styles.team_text}>Meet the team</h2>

      <div className={styles.member_teams_container}>
        {teamMembers.map((teamMember) => {
          return (
            <>
              <SingleTeamMember
                key={teamMember.name}
                imageSrc={teamMember.imageSrc}
                name={teamMember.name}
                position={teamMember.position}
              />
            </>
          );
        })}
      </div>
    </section>
  );
};

export default MeetTheTeam;
