// utils

import { paramCase } from "../utils/change-case";

// ----------------------------------------------------------------------

export const paths = {
  catalog: {
    root: () => `/catalog`,
    details: (id) => `/configurator/${id}`,
  },
};
