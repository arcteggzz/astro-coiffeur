import styles from "./SingleItemForSale.module.scss";
import dummy from "./dummy.jpg";

interface SingleItemForSaleType {
  image?: string;
  name: string;
  cost: number;
}

const SingleItemForSale = ({
  cost,
  image = dummy,
  name,
}: SingleItemForSaleType) => {
  return (
    <>
      <div className={styles.SingleItemForSale}>
        <img src={image} alt="" />
        <p>{name}</p>
        <p>NGN{cost}</p>
      </div>
    </>
  );
};

export default SingleItemForSale;
