// utils

import { paramCase } from "../utils/change-case";

// ----------------------------------------------------------------------

export const paths = {
  contact_us: {
    root: `/contact`,
  },
  catalog: {
    root: `/catalog`,
    details: (id) => `/configurator/${id}`,
  },
};
