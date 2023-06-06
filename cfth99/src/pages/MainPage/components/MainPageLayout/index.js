import { Link } from "react-router-dom";
import ROUTES from "../../../../routes/routesName";
import "./styles.css";

const MainPageLayout = () => {
  return (
    <>
      <div className="link">
        <Link to={ROUTES.FORM_PAGE}>Next Form</Link>
      </div>
      <h1>Test Zajchenko Yura</h1>
    </>
  );
};

export default MainPageLayout;
