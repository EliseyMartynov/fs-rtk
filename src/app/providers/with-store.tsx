import { Provider } from "react-redux";
// I don't like that we pass store here but whatever
import { store } from "../store";

export const withStore = (component: () => React.ReactNode) => () =>
  <Provider store={store}>{component()}</Provider>;
