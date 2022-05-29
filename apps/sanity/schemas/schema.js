// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Import Pages
import * as pages from "./pages";

// Import Components
import * as components from "./components";

// Import Collections
import * as blocks from "./blocks";

// Import Collections
import { generalModules, homeModules } from "./modules";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    ...Object.values(pages),
    ...Object.values(components),
    ...Object.values(blocks),
    ...generalModules,
    ...homeModules,
  ]),
});
