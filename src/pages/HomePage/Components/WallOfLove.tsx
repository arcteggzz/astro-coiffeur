import styles from "../Styles/WallOfLove.module.scss";
import reviews from "../reviews";
import picture1 from "../../../assets/images/01.png";
import picture2 from "../../../assets/images/02.jpg";
import picture3 from "../../../assets/images/03.jpg";
import picture4 from "../../../assets/images/04.jpg";
import picture5 from "../../../assets/images/05.jpg";
import picture6 from "../../../assets/images/06.jpg";
import picture7 from "../../../assets/images/07.jpg";
import picture8 from "../../../assets/images/08.jpg";

type SingleReviewProps = {
  name: string;
  handle: string;
  comment: string;
  profile_picture: string;
};

const SingleReview = ({
  comment,
  name,
  handle,
  profile_picture,
}: SingleReviewProps) => {
  return (
    <div className={styles.single_item_container}>
      <div className={styles.card_top}>
        {/* <div className={styles.dummy_image}></div> */}
        <img src={profile_picture} alt="profile picture" />
        <div className={styles.header_text_container}>
          <h6>{name}</h6>
          <p>{`@${handle}`}</p>
        </div>
      </div>
      <h5>{comment}</h5>
    </div>
  );
};

const WallOfLove = () => {
  const profile_pictures = [
    picture1,
    picture2,
    picture3,
    picture4,
    picture5,
    picture6,
    picture7,
    picture8,
  ];

  return (
    <section className={styles.WallOfLove}>
      <div className={styles.WallOfLove_header}>
        <h2>Wall of Love</h2>
        <p>Here's what people are saying about Coiffeur</p>
      </div>

      <div className={styles.carousel_slider_container}>
        <div className={styles.top_carousel}>
          {reviews?.slice(0, 4).map((review, index) => {
            return (
              <>
                <SingleReview
                  key={`${review.name}`}
                  comment={review.comment}
                  handle={review.handle}
                  name={review.name}
                  profile_picture={profile_pictures[index]}
                />
              </>
            );
          })}
          {reviews?.slice(0, 4).map((review, index) => {
            return (
              <>
                <SingleReview
                  key={`${review.name}`}
                  comment={review.comment}
                  handle={review.handle}
                  name={review.name}
                  profile_picture={profile_pictures[index]}
                />
              </>
            );
          })}
        </div>
        <div className={styles.bottom_carousel}>
          {reviews?.slice(-4).map((review, index) => {
            return (
              <>
                <SingleReview
                  key={`${review.name}`}
                  comment={review.comment}
                  handle={review.handle}
                  name={review.name}
                  profile_picture={profile_pictures[index + 4]}
                />
              </>
            );
          })}
          {reviews?.slice(-4).map((review, index) => {
            return (
              <>
                <SingleReview
                  key={`${review.name}`}
                  comment={review.comment}
                  handle={review.handle}
                  name={review.name}
                  profile_picture={profile_pictures[index + 4]}
                />
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WallOfLove;
