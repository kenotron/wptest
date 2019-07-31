const requireContext = require.context('./controls', true, /^.*$/, 'lazy');
for (const control of requireContext.keys()) {
  requireContext(control)
    .then(c => c.default())
    .then(msg => console.log(msg));
}
