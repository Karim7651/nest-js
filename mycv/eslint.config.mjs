// eslint.config.mjs
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['eslint.config.mjs'], // keep ignoring itself
  },
  // Do not include recommended configs or plugins
  // eslint.configs.recommended,
  // ...tseslint.configs.recommendedTypeChecked,
  // eslintPluginPrettierRecommended,
  // Any rules
  {
    rules: {},
  },
);
