function requireAll(requireContext){
  return requireContext.keys().map(requireContext);
}
var windows = requireAll(require.context('./windows', true,/.*/));
var scenes = requireAll(require.context('./scenes', true,/.*/));
var sprites = requireAll(require.context('./sprites', true,/.*/));
var managers = requireAll(require.context('./managers', true,/.*/));
var game = requireAll(require.context('./game', true,/.*/));
var utils = require('./utils');

exports = {
  windows: windows,
  scenes: scenes,
  sprites: sprites,
  managers: managers,
  game: game,
  utils: utils
};
