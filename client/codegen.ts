import type { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from "@next/env";

const projectDir = process.cwd();
loadEnvConfig(projectDir);

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.NEXT_PUBLIC_GRAPHQL_API_URL,
  documents: "**/*.graphql",
  generates: {
    "__generated__/": {
      preset: "client",
      plugins: ["typescript", "typescript-operations"],
      config: {
        avoidOptionals: true,
        documentMode: "string",
        skipTypename: true,
        dedupeOperationSuffix: true,
        preResolveTypes: true,
      },
      presetConfig: {
        dedupeFragments: true,
        fragmentMasking: false,
      },
    },
  },
  hooks: {
    afterAllFileWrite: ["prettier --write __generated__/**/*.ts"],
  },
};

export default config;
