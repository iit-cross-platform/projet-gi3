const { createWebpackConfigAsync } = require("expo-yarn-workspaces/webpack");

module.exports = async function (env, argv) {
  const config = await createWebpackConfigAsync(
    {
      ...env,
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
