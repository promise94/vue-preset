import { LOGIN_USER, RESET_STATE } from "../mutation-types";
import { AuthState } from "../state-template";

const state: AuthState = {
  ...AuthState()
};

const getters = {
  GetLoginUser: (state: { loggedUser: any }) => state.loggedUser
};

const actions = {
  SetLoginUser({ commit }: { commit: any }, user: any) {
    commit(LOGIN_USER, user);
  },
  /**
   * 清空模块的state
   */
  RestState({ commit }: { commit: any }) {
    commit(RESET_STATE);
  }
};

const mutations = {
  [LOGIN_USER](state: AuthState, user: any) {
    state.loggedUser = user;
  },
  [RESET_STATE](state: AuthState) {
    state = AuthState();
  }
};

interface AuthState {
  loggedUser: any;
}

export default {
  state,
  getters,
  actions,
  mutations
};
