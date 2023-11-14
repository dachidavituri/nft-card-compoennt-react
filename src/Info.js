import rectangle from "./assets/images/image-equilibrium.jpg";
import view from './assets/images/icon-view.svg'
function Info() {
  let title = "Equilibrium #3429";
  let description = "Our Equilibrium collection promotes balance and calm.";
  return (
    <div>
      <div class="image">
        <img src={rectangle}  alt="rect" style={styles.img}/>
        <div>
          <img src={view} alt="rect" />
        </div>
      </div>
      <h1 style={styles.title} className="title">
        {title}
      </h1>
      <p style={styles.desc}>{description}</p>
    </div>
  );
}
const styles = {
  title: {
    fontSize: "22px",
    fontWeight: 600,
    textAlign: "left",
    marginTop: "24px",
  },
  desc: {
    color: "#8BACD9",
    fontSize: "18px",
    fontWeight: 300,
    lineHeight: "26px",
    textAlign: "left",
    marginTop: "12px",
  },
  img: {
    width: "100%",
    borderRadius: "8px",
  },
};
export default Info;
