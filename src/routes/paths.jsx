// utils

// ----------------------------------------------------------------------

export const paths = {
  contact_us: {
    root: `/contact`,
  },
  catalog: {
    root: `/catalog`,
    collection: (id) => `/catalog/${id}`,
    details: (id) => `/configurator/${id}`,
  },
};
