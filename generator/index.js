module.exports = (api, options, rootOptions) => {
  // 复制并用 ejs 渲染 `./template` 内所有的文件

  api.render("./template");

  // 修改 `package.json` 里的字段
  api.extendPackage({
    dependencies: {
      axios: "^0.19.0",
      "core-js": "^2.6.5",
      "register-service-worker": "^1.6.2",
      "vue-class-component": "^7.0.2",
      "vue-property-decorator": "^8.1.0",
      "vue-router": "^3.0.3",
      vuex: "^3.0.1"
    },
    devDependencies: {
      "git-cz": "^2.0.0",
      "compression-webpack-plugin": "^2.0.0",
      "vconsole-webpack-plugin": "^1.4.2",
      "postcss-px-to-viewport": "^1.1.0",
      "@types/chai": "^4.1.0",
      "@types/mocha": "^5.2.4",
      "@vue/cli-plugin-babel": "^3.10.0",
      "@vue/cli-plugin-e2e-nightwatch": "^3.10.0",
      "@vue/cli-plugin-eslint": "^3.10.0",
      "@vue/cli-plugin-pwa": "^3.10.0",
      "@vue/cli-plugin-typescript": "^3.10.0",
      "@vue/cli-plugin-unit-mocha": "^3.10.0",
      "@vue/eslint-config-prettier": "^5.0.0",
      "@vue/eslint-config-typescript": "^4.0.0",
      "@vue/test-utils": "1.0.0-beta.29",
      "babel-eslint": "^10.0.1",
      chai: "^4.1.2",
      eslint: "^5.16.0",
      "eslint-plugin-prettier": "^3.1.0",
      "eslint-plugin-vue": "^5.0.0",
      "node-sass": "^4.9.0",
      prettier: "^1.18.2",
      "sass-loader": "^7.1.0",
      typescript: "^3.4.3",
      "vue-template-compiler": "^2.6.10"
    },
    scripts: {
      "serve:test": "vue-cli-service serve --mode test",
      "serve:pre": "vue-cli-service serve --mode pre",
      "serve:prod": "vue-cli-service serve --mode prod",
      "build:test": "vue-cli-service build --mode test",
      "build:pre": "vue-cli-service build --mode pre",
      "build:prod": "vue-cli-service build --mode prod",
      commit: "git add . && npx git-cz"
    },
    config: {
      commitizen: {
        path: "./node_modules/git-cz"
      }
    },
    gitHooks: {
      "commit-msg": "node scripts/verifyCommitMsg.js"
    }
  });
};
