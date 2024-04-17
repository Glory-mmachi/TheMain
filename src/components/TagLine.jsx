import Brackets from "../assets/svg/Brackets";
function TagLine({ className, children }) {
  return (
    <div className={`tagLine flex items-center ${className || ""}`}>
      {Brackets("left")}
      <div className=" mx-3 tetx-n-3">{children}</div>
      {Brackets("right")}
    </div>
  );
}

export default TagLine;
