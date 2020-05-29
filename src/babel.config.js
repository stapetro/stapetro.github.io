module.exports = function(api) {
  const presets = [];
  const plugins = [];
  const isTest = api.env('test');

  if (isTest) {
    presets.push(['@babel/preset-env', {targets: {node: 'current'}}]);
  }

  api.cache(true);

  return {
    presets,
    plugins,
  };
};
