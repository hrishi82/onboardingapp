import { useNavigate } from "react-router-dom";
import "./form.css";
import { useState } from "react";
import { useData } from "../../../context/dataContext";

export const SetWorkspaceTypePage = () => {
  const [selectedSpace, setSelectedSpace] = useState({
    forIndividual: true,
    forGroup: false,
  });
  const { dispatch } = useData();
  const navigate = useNavigate();

  const handleClick = (selectionType) => {

    if (selectionType === "forIndividual") {
      dispatch({ type: "SET_PLAN_OF_USE", payload: "personal" });
      setSelectedSpace({ forIndividual: true, forGroup: false });
    }
    if (selectionType === "forGroup") {
      dispatch({ type: "SET_PLAN_OF_USE", payload: "team" });
      setSelectedSpace({ forIndividual: false, forGroup: true });
    }

  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_FORM_PROGRESS", payload: "STEP4" });
    navigate("/profilecompletepage");
  };
  return (
    <div className="main-form-container">
      <div className="form-Wrapper">
        <div className="form-text-container">
          <h1 className="form-text-main-heading">
            How are you planning to use Eden?
          </h1>
          <h4 className="form-text-sub-heading">
            We'll streamline your setup experience accordingly
          </h4>
        </div>
        <div className="workspace-type-selection-container">
          <div
            className={`workspace-type-option-container H-spacing-right-reg ${
              selectedSpace.forIndividual && "selected-workspace"
            }`}
            
            onClick={() => handleClick("forIndividual")}
          >
            <div className="workspace-type-option-favicon-container">
              <i
                className={`fa-solid fa-user ${
                  selectedSpace.forIndividual && "selected-workspace-favicon"
                }`}
              ></i>
            </div>
            <div className="workspace-type-option-text-container">
              <h4>For Myself</h4>
              <p>Write better. Think more clearly. Stay organized.</p>
            </div>
          </div>
          <div
            className={`workspace-type-option-container ${
              selectedSpace.forGroup && "selected-workspace"
            }`}
            onClick={() => handleClick("forGroup")}
          >
            <div className="workspace-type-option-favicon-container">
              <i
                className={`fa-solid fa-users ${
                  selectedSpace.forGroup && "selected-workspace-favicon"
                }`}
              ></i>
            </div>
            <div className="workspace-type-option-text-container">
              <h4>With my team</h4>
              <p>Wikis, docs, tasks and projects, all in one place.</p>
            </div>
          </div>
        </div>
        <div className="form-btn-container">
          <button
            className="form-submit-btn"
            onClick={(e) => formSubmitHandler(e)}
          >
            Create Workspace
          </button>
        </div>
      </div>
    </div>
  );
};
