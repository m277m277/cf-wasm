# @cf-wasm/resvg

## 0.1.24

### Patch Changes

- [`b603ad0`](https://github.com/fineshopdesign/cf-wasm/commit/b603ad006dfebedf333582090b54ac7be86b94b2) Thanks [@fineshop](https://github.com/fineshop)! - fix: add `default` conditional exports for `.wasm` and `.txt` files

## 0.1.23

### Patch Changes

- [`444362c`](https://github.com/fineshopdesign/cf-wasm/commit/444362c8e68c1f27220788f9ff2de780b861b34a) Thanks [@fineshop](https://github.com/fineshop)! - refactor: `initResvg` function

## 0.1.22

### Patch Changes

- [`9743f01`](https://github.com/fineshopdesign/cf-wasm/commit/9743f01376f3bb995ddb678dae438a1ed471beb0) Thanks [@fineshop](https://github.com/fineshop)! - chore: remove unnecessary `default` conditional exports

## 0.1.21

### Patch Changes

- [`b07af65`](https://github.com/fineshopdesign/cf-wasm/commit/b07af651316223f32d9df9503c730d094dd256f4) Thanks [@fineshop](https://github.com/fineshop)! - docs: update README

## 0.1.20

### Patch Changes

- [`c90bbc8`](https://github.com/fineshopdesign/cf-wasm/commit/c90bbc8245d6e2e1b1b8bd4e72565cdc98a696ad) Thanks [@fineshop](https://github.com/fineshop)! - fix: package.json

## 0.1.19

### Patch Changes

- [`0cd4a37`](https://github.com/fineshopdesign/cf-wasm/commit/0cd4a372a4ef89e1c8e5a08db2c94d66758dc015) Thanks [@fineshop](https://github.com/fineshop)! - fix: package.json

## 0.1.18

### Patch Changes

- [`906211f`](https://github.com/fineshopdesign/cf-wasm/commit/906211f5001cdf7346851a9ab8a83bbb7705103e) Thanks [@fineshop](https://github.com/fineshop)! - feat: add submodules for version `2.4.1` since it is lightweight, it is being used by `@cf-wasm/og`

## 0.1.17

### Patch Changes

- [`123f049`](https://github.com/fineshopdesign/cf-wasm/commit/123f0494287fd90fa7970a085c1735c0b76f88b3) Thanks [@fineshop](https://github.com/fineshop)! - fix: initialize function in `others` submodule

## 0.1.16

### Patch Changes

- [`7f00ec0`](https://github.com/fineshopdesign/cf-wasm/commit/7f00ec06f67cbfd3b9f494d43a18ac6fec59f498) Thanks [@fineshop](https://github.com/fineshop)! - fix: ensure `import.meta` is being used only in ES Module scope and `__filename` or `__dirname` only in Common JS scope to prevent the errors such as `__dirname is not defined in ES module scope`
  chore: add the `node:` prefix in Node.js core module imports

## 0.1.15

### Patch Changes

- [`a35fe1f`](https://github.com/fineshopdesign/cf-wasm/commit/a35fe1fd85388e5ff17de7c6b477c38155c22a61) Thanks [@fineshop](https://github.com/fineshop)! - fix: use esbuild for building modules to fix errors such as `ERR_MODULE_NOT_FOUND`, `ERR_UNSUPPORTED_DIR_IMPORT`, etc.

## 0.1.14

### Patch Changes

- [`058910e`](https://github.com/fineshopdesign/cf-wasm/commit/058910e62cfb65e0796eba0be383a56d883ff6cb) Thanks [@fineshop](https://github.com/fineshop)! - refactor: separate directory (./dist/dts) for .d.ts files to minimize bundle size

## 0.1.13

### Patch Changes

- [`8b56731`](https://github.com/fineshopdesign/cf-wasm/commit/8b567314f273adea4ec2af72ee9c05f894e212e4) Thanks [@fineshop](https://github.com/fineshop)! - feat: add submodule `others` (experimental)

## 0.1.12

## 0.1.11

### Patch Changes

- [`e2e9798`](https://github.com/fineshopdesign/cf-wasm/commit/e2e9798f817e3ca0e45f759ba6c623ee88ba9ab3) Thanks [@fineshop](https://github.com/fineshop)! - chore(photon): update build process
  chore(png): update build process
  chore: new packages `resvg`, `satori` and `og`
