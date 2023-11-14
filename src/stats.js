import eth from "./assets/images/icon-ethereum.svg"
import clock from './assets/images/icon-clock.svg'
function Stats() {
    let ethAmount = "0.041 ETH";
    let hours = '3 days left'
  return (
    <div className="statistic">
      <div>
        <img src={eth}/>
        <h2 style={styles.eth}>{ethAmount}</h2>
      </div>
      <div>
        <img src={clock} />
        <h2 style={styles.hour}>{hours}</h2>
      </div>

    </div>
  );
}
const styles = {
    eth: {
        color: "#00FFF8",
        fontSize: "15px",
        fontWeight: 600
    },
    hour: {
        color: '#8BACD9',
        fontSize: '15px',
        fontWeight: 400,

    }
}
export default Stats;
