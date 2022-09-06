import "./progressbar.css";
import { useData } from "../../../context/dataContext";
export const ProgressBar = () => {

const {state} = useData()

    const progress = state.processStep

  return (
    <div className="main-progressbar-container">
      <div className={`progress-circle ${progress.step1 && "progress-circle-active"}`}>
        <span>1</span>
      </div>
      <div className={`progress-line ${progress.step1 && "progress-line-active"}`}></div>
      <div className={`progress-line ${progress.step2 && "progress-line-active"}`}></div>
      <div className={`progress-circle ${progress.step2 && "progress-circle-active"}`}>
        <span>2</span>
      </div>
      <div className={`progress-line ${progress.step2 && "progress-line-active"}`}></div>
      <div className={`progress-line ${progress.step3 && "progress-line-active"}`}></div>
      <div className={`progress-circle ${progress.step3 && "progress-circle-active"}`}>
        <span>3</span>
      </div>
      <div className={`progress-line ${progress.step3 && "progress-line-active"}`}></div>
      <div className={`progress-line ${progress.step4 && "progress-line-active"}`}></div>
      <div className={`progress-circle ${progress.step4 && "progress-circle-active"}`}>
        <span>4</span>
      </div>
    </div>
  );
};
