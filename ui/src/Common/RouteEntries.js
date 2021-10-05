import { Route, Switch } from "react-router-dom";
import constants from "./UI_constatns";
import QuoteWall from "./HomePage/QuoteWall";

export default () => {
  return (
    <Switch>
      <Route path={constants.BOOK_REVIEW}>book review</Route>
      <Route path={constants.WRITE_REVIEW}>write review</Route>
      <Route path={constants.UPCOMING_READING}>upcoming reading</Route>
      <Route path={constants.HOME}>
        <QuoteWall />
      </Route>
      <Route path="/">
        <QuoteWall />
      </Route>
    </Switch>
  );
};
