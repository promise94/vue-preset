const fs = require("fs");
const del = require("del");
module.exports = (api, options, rootOptions) => {
  // 修改 `package.json` 里的字段
  api.extendPackage({
    dependencies: {
      axios: "^0.19.0"
    },
    devDependencies: {},
    scripts: {
      "serve:test": "vue-cli-service serve --mode test",
      "serve:pre": "vue-cli-service serve --mode pre",
      "serve:prod": "vue-cli-service serve --mode prod",
      "build:test": "vue-cli-service build --mode test",
      "build:pre": "vue-cli-service build --mode pre",
      "build:prod": "vue-cli-service build --mode prod",
      commit: "npx git-cz"
    },
    config: {
      commitizen: {
        path: "./node_modules/git-cz"
      }
    },
    gitHooks: {
      "commit-msg": "node scripts/verifyCommitMsg.ts"
    }
  });

  // 复制并用 ejs 渲染 `./template` 内所有的文件

  api.render("./template");

  del(["src/router?.ts", "src/store?.ts"]);
};
