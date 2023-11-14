import avatar from './assets/images/image-avatar.png'
function Author() {
  let main = "Creation of";
  let span = "Jules Wyvern";
  return (
    <div className="author-footer">
      <img src={avatar} alt='person' style={styles.img}/>
      <p style={styles.main}>
        {main}
        <span style={styles.span}>{span}</span>
      </p>
    </div>
  );
}
const styles = {
  main: {
    fontSize: "15px",
    fontWeight: 400,
  },
  span: {
    fontSize: "15px",
    fontWeight: 400,
    marginLeft: "5px",
  },
  img: {
    width: '33px',
    height: '33px',
    borderRadius: '33px',
    border: "1px solid white"

  }
};
export default Author;
