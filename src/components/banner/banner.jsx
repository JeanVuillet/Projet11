import "./banner.scss";

export function Banner({ number, color }) {
  return (
    <>
      <div className="pageHeader">
        <img
          src={`/src/assets/imgHeader${number}.jpeg`}
          alt="image header"
          className={`imgHeader${number}`}
        ></img>
        <div className="headerMessage" style={{ color: color }}>
          Chez vous, partout et ailleurs
        </div>
      </div>
    </>
  );
}
