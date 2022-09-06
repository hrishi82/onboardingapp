import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useData } from "../../../context/dataContext";
import "./form.css";

export const SetNamePage = () => {
  const [formData, setFormData] = useState({ fullName: "", displayName: "" });
  const { dispatch } = useData();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_NAME", payload: formData.fullName });
    dispatch({ type: "SET_DISPLAY_NAME", payload: formData.displayName });
    setFormData({ fullName: "", displayName: "" })
    
    dispatch({ type: "SET_FORM_PROGRESS", payload: "STEP2" });
    navigate("/setworkspacenamepage");
  };

  return (
    <div className="main-form-container">
      <form className="form-Wrapper" onSubmit={(e) => formSubmitHandler(e)}>
        <div className="form-text-container">
          <h1 className="form-text-main-heading">
            Welcome! First things first...
          </h1>
          <h4 className="form-text-sub-heading">
            You can always change them later
          </h4>
        </div>
        <div className="form-input-container">
          <div className="form-input-field-wrapper">
            <label htmlFor="fullName" className="form-input-field-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-input-field"
              id="fullName"
              name="fullName"
              value={formData.fullName || ""}
              placeholder="Steve Jobs"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-input-field-wrapper">
            <label htmlFor="displayName" className="form-input-field-label">
              Display Name
            </label>
            <input
              type="text"
              className="form-input-field"
              id="displayName"
              name="displayName"
              value={formData.displayName || ""}
              placeholder="Steve"
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="form-btn-container">
          <button className="form-submit-btn" type="submit">
            Create Workspace
          </button>
        </div>
      </form>
    </div>
  );
};
