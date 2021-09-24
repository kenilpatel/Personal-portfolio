import { Route } from "react-router-dom";
import constants from "./UI_constatns";

export default () => {
  return (
    <div>
      <Route path={constants.HOME}>home</Route>
      <Route path={constants.BOOK_REVIEW}>book review</Route>
      <Route path={constants.WRITE_REVIEW}>write review</Route>
      <Route path={constants.UPCOMING_READING}>upcoming reading</Route>
    </div>
  );
};
