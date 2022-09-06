import { useNavigate } from "react-router-dom";
import "./form.css";
import { useData } from "../../../context/dataContext";

export const ProfileCompletePage = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useData();

  const userData = state.data;

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "RESET_FORM_DATA" });
    navigate("/");
  };

  return (
    <div className="main-form-container">
      <div className="form-Wrapper">
        <div className="form-complete-favicon-container">
          <i className="fa-solid fa-circle-check"></i>
        </div>
        <div className="form-text-container">
          <h1 className="form-text-main-heading">
            {userData?.fullName === "" && userData?.displayName === ""
              ? "Congratulations!"
              : `Congratulations, ${
                  userData?.displayName
                    ? userData?.displayName
                    : userData?.fullName
                }!`}
          </h1>
          <h4 className="form-text-sub-heading">
            You have completed onboarding, you can start using the Eden!
          </h4>
        </div>

        <div className="form-btn-container">
          <button
            className="form-submit-btn"
            onClick={(e) => formSubmitHandler(e)}
          >
            Launch Eden
          </button>
        </div>
      </div>
    </div>
  );
};
