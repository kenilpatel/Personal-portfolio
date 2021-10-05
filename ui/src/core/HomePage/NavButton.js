import constants from "../../common/UI_constatns";

const NavButton = () => {
  return (
    <div className="nav-button">
      <div className="col text-center">
        <a href={constants.BOOK_REVIEW}>
          <div className="ui button" tabIndex="0">
            <div className="visible content big-font bold">Book Review</div>
          </div>
        </a>
        <a href={constants.UPCOMING_READING}>
          <div className="ui button" tabIndex="0">
            <div className="visible content big-font bold">
              Upcoming readings
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default NavButton;
