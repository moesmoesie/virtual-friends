import * as pages from "./pages";
import * as components from "./components";
import * as blocks from "./blocks";
import * as modules from "./modules";

export const pageSchemaTypes = Object.values(pages);
export const componentSchemaTypes = Object.values(components);
export const blockSchemaTypes = Object.values(blocks);
export const moduleSchemaTypes = Object.values(modules);

export const schemaTypes = [
  ...pageSchemaTypes,
  ...componentSchemaTypes,
  ...blockSchemaTypes,
  ...moduleSchemaTypes,
];
