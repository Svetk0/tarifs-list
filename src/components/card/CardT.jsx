import { data } from "../data/DataInfo";
import styles from "./CardT.module.css";
//let isActive = false;

function CardT(props) {
  return (
    <>
      {props.data.map((el, index) => (
        // {
        //     { el.category } === 'new'
        //         ? isActive = { true }
        //     : isActive = { false }}
        //<div className={isActive ? {styles.cardImportant} : {styles.card} } key={index}></div>

        <div className={styles.card} key={index}>
          <h2 className={styles.name}> {el.name}</h2>

          <div className={styles.itemProperties}>
            <div className={styles.priceContainer}>
              <div className={styles.priceTextTop}>руб</div>

              <div className={styles.price}>{el.price}</div>
              <div className={styles.priceTextBottom}>/мес</div>
            </div>
            <div className={styles.speed}>до {el.speed} Мбит/сек</div>

            <div className={styles.info}>{el.info}</div>
          </div>
        </div>
      ))}
    </>

    //console.log(data);
  );
}
console.log(data);
export default CardT;
