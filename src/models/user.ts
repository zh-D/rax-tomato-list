// src/models/user.ts
// @ts-ignore
export const delay = (time) => new Promise((resolve) => setTimeout(() => resolve(), time));

export default {
  state: {
    isLogin: false,
  },

  // 定义改变该模型状态的纯函数
  reducers: {
    update(prevState) {
      return {
        isLogin: !prevState.isLogin,
      };
    },
  },

  //   定义处理该模型副作用的函数
  effects: (dispatch) => ({
    async getUserInfo() {
      await delay(1000);
      dispatch.user.update({
        login: true,
      });
    },
  }),
};
