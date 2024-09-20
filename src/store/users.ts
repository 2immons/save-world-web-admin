import { defineStore } from "pinia";
import axios from "axios";
import { config } from "./config";
import Cookies from "js-cookie";

export const usersStore = defineStore("users", {
  state: () => ({
    displayName: Cookies.get("display_name"),
  }),

  actions: {
    setCookies(responseData: any) {
      Cookies.set("access_token", responseData.access_token);
      Cookies.set("token_expiration", responseData.expires_in);
      Cookies.set("display_name", responseData.display_name);
      this.displayName = responseData.display_name;
    },
    clearCookies() {
      Cookies.remove("access_token");
      Cookies.remove("token_expiration");
      Cookies.remove("display_name");
      this.displayName = "";
    },

    async logout() {
      this.clearCookies();
    },

    async createUser(regData: any) {
      try {
        const response = await axios.post(config.backendURL + "/auth/signup", {
          login: regData.login,
          password: regData.password,
          name: regData.name,
        });

        if (response.status === 201) {
          this.setCookies(response.data);
        }
      } catch (error) {
        // throw new Error("Произошла ошибка при регистрации: " + error.message);
      }
    },

    async loginUser(loginData: any) {
      try {
        const response = await axios.get(config.backendURL + "/auth/login", {
          params: {
            login: loginData.login,
            password: loginData.password,
          },
        });

        if (response.status === 200) {
          this.setCookies(response.data);
        }
      } catch (error) {
        // if (error.response && error.response.status === 403) {
        //   throw new Error("Неправильный пароль или логин");
        // } else {
        //   throw new Error("Произошла ошибка при авторизации: " + error.message);
        // }
      }
    },
  },

  getters: {},
});
