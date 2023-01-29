const { createWebpackConfigAsync } = require("expo-yarn-workspaces/webpack");

module.exports = async function (env, argv) {
  const config = await createWebpackConfigAsync(
    {
      ...env,
      node: {
        fs : false,
        global: false,
        __filename: false,
        __dirname: false,
      },
      babel: {
        dangerouslyAddModulePathsToTranspile: [
          "@ui-kitten/components",
          "@my-workspace/my-ui",
        ],
      },
    },
    argv
  );
  return config;
};
