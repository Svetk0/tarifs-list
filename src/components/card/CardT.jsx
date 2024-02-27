import { useState } from "react";
import { data } from "../data/DataInfo";
import styles from "./CardT.module.css";
let isActive = false;

function CardT(props) {
  const [selected, setSelected] = useState(false);
  const handleChange = () => {
    setSelected(!selected);
};

  return (
    <>
      {props.data.map((el, index) => {
        // selected === true
        //   ?
        //   isActive = true
        //   :
        //   isActive = false;

       return (
         <div
           className={selected ? styles.cardImportant : styles.card}
           key={index}
           onClick={handleChange}
         >
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
      )})}
    </>)
}


console.log(data);
export default CardT;
