import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useData } from "../../../context/dataContext";

export const SetWorkspaceNamePage = () => {

  const [formData, setFormData] = useState({workspaceName: '', workspaceURL:''})

  const { dispatch } = useData();
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formSubmitHandler = (e) =>{
      e.preventDefault();
      dispatch({ type: "SET_WORKSPACE_NAME", payload: formData.workspaceName });
      dispatch({ type: "SET_WORKSPACE_URL", payload: formData.workspaceURL });
      setFormData({workspaceName: '', workspaceURL:''})

      dispatch({ type: "SET_FORM_PROGRESS", payload: "STEP3" });
      navigate("/setworkspacetypepage")
  }

    return (
        <div className="main-form-container">
          <form className="form-Wrapper" onSubmit={(e) => formSubmitHandler(e)}>
            <div className="form-text-container">
              <h1 className="form-text-main-heading">Let's set up a home for all your work</h1>
              <h4 className="form-text-sub-heading">You can always create another workspace later</h4>
            </div>
            <div className="form-input-container">
              <div className="form-input-field-wrapper">
                <label htmlFor="workspaceName" className="form-input-field-label">
                  Workspace Name
                </label>
                <input type="text" className="form-input-field" id="workspaceName" name="workspaceName" placeholder="Eden" onChange={(e) => handleChange(e)}/>
              </div>
              <div className="form-input-field-wrapper">
                <label htmlFor="workspaceURL" className="form-input-field-label">
                  Workspace URL <span>(optional)</span>
                </label>
                <input type="email" className="form-input-field" id='workspaceURL' name="workspaceURL" onChange={(e) => handleChange(e)} placeholder="www.eden.com/"/>
              </div>
            </div>
            <div className="form-btn-container">
              <button className="form-submit-btn" type="submit">Create Workspace</button>
            </div>
          </form>
        </div>
    );
  };
  