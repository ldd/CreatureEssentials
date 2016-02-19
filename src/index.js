function requireAll(requireContext){
  return requireContext.keys().map(requireContext);
}
var windows = requireAll(require.context('./windows', true,/.*/));
var scenes = requireAll(require.context('./scenes', true,/.*/));
var managers = requireAll(require.context('./managers', true,/.*/));

exports = {
  windows: windows,
  scenes: scenes,
  managers: managers
};
