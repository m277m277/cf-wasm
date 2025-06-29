import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';
import { initResvg } from '../core/resvg';

const filename = url.fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const resvgWasmBinary = fs.readFileSync(path.resolve(dirname, '../core/resvg.wasm'));
const resvgWasmModule = new WebAssembly.Module(resvgWasmBinary);

initResvg(resvgWasmModule);

export { resvgWasmModule };
export {
  type CustomFontsOptions,
  type FontOptions,
  Resvg,
  type ResvgRenderOptions,
  type SystemFontsOptions,
} from '../core/resvg';
