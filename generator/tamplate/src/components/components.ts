export default (Vue: any) => {
  const requireComponent = require.context("@/components", true, /\.(vue)$/);

  requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName);
    const componentName = componentConfig.default.name;
    Vue.component(componentName, componentConfig.default || componentConfig);
  });
};
