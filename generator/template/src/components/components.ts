export default (Vue: any) => {
  const requireComponent = require.context("@/components", true, /\.(vue)$/);

  requireComponent.keys().forEach((fileName: string) => {
    const componentConfig = requireComponent(fileName);
    const componentName = fileName.substring(
      fileName.lastIndexOf("/") + 1,
      fileName.search(/(\.vue|\.js)/)
    );
    Vue.component(componentName, componentConfig.default || componentConfig);
  });
};
