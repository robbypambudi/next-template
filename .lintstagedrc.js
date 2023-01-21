module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'yarn typecheck',

  // Lint & Prettify TS and JS files
  '**/*.(ts|tsx|js)': () => [`yarn lint:strict `, `yarn format:write`],

  // Prettify only Markdown and JSON files
  '**/*.(md|json)': () => `yarn format:write`,
};
