import { useEffect, useState } from "react";
import { returnURL } from "../../../services/cryptoAPI";
import styles from "../styles/table.module.css";
export default function CoinTable() {
  // set states
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(returnURL());
      const json = await res.json();
      setCoins(json);
    };
    getData();
  }, []);
  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Name</th>
            <th>Price</th>
            <th>Last 24h</th>
            <th>Total Voluem</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {coins.map(
            ({
              id,
              name,
              current_price,
              image,
              symbol,
              price_change_percentage_24h: price_change,
              total_volume,
            }) => (
              <tr key={id}>
                <td>
                  <div>
                    <img src={image} alt={name + " Logo"} />
                    <h2>{symbol}</h2>
                  </div>
                </td>
                <td>{name}</td>
                <td>{current_price.toLocaleString()}</td>
                <td className={price_change < 0 ? styles.alert : styles.succes}>
                  {price_change.toFixed(2)}%
                </td>
                <td>{total_volume.toLocaleString()}</td>
                <td className={price_change < 0 ? styles.alert : styles.succes}>
                  {price_change < 0 ? "false" : "true"}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
