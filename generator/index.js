const path = require("path");

module.exports = (api, options, rootOptions) => {
  // 复制并用 ejs 渲染 `./template` 内所有的文件
  
  api.render(path.resolve(__dirname, "./template"));

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
      "postcss-px-to-viewport": "^1.1.0"
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
