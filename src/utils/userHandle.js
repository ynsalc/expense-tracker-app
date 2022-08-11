import store from "store/store";
import { setUser } from "store/auth";

const userHandle = (data) => {
  store.dispatch(setUser(data));
};

export default userHandle;