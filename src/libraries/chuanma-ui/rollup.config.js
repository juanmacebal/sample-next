import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

const packageJson = require("./package.json");

const components = ["Button", "Link"]; // Add your component names here

const createComponentConfig = (component) => [
  {
    input: `src/components/${component}/index.ts`,
    output: [
      {
        file: `dist/${component}/index.js`,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: `dist/${component}/index.esm.js`,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
      postcss({
        extract: `styles.css`,
        minimize: true,
      }),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: `src/components/${component}/index.ts`,
    output: [{ file: `dist/types/${component}.d.ts`, format: "es" }],
    plugins: [dts.default()],
    external: [/\.css$/],
  },
];

const createIndexConfig = () => ({
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json" }),
    terser(),
    postcss({
      extract: `styles.css`,
      minimize: true,
    }),
  ],
  external: ["react", "react-dom"],
});

const createTypeConfig = () => ({
  input: "src/index.ts",
  output: [{ file: "dist/types.d.ts", format: "es" }],
  plugins: [dts.default()],
  external: [/\.css$/],
});

export default [
  ...components.flatMap(createComponentConfig),
  createIndexConfig(),
  createTypeConfig(),
];
