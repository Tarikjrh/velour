import { useEffect, useMemo, useState } from "react";
import productsData from "../../../productsData/productsData";
import Fuse from "fuse.js";

// ----------------------------------------------------------------------

export function useGetProducts() {
  const data = productsData; // Read from the local file
  const isLoading = false; // Simulate no loading
  const error = null; // Simulate no errors

  const memoizedValue = useMemo(
    () => ({
      products: data?.products || [],
      productsLoading: isLoading,
      productsError: error,
      productsValidating: false, // No validation for local data
      productsEmpty: !isLoading && !data?.products.length,
    }),
    [data]
  );

  return memoizedValue;
}

// ----------------------------------------------------------------------

export function useGetProduct(productId) {
  const data = productsData; // Read from the local file
  const isLoading = false; // Simulate no loading
  const error = null; // Simulate no errors

  const product = data?.products?.find((item) => item.id === productId);

  const memoizedValue = useMemo(
    () => ({
      product,
      productLoading: isLoading,
      productError: error,
      productValidating: false, // No validation for local data
    }),
    [product]
  );

  return memoizedValue;
}

// ----------------------------------------------------------------------

export function useSearchProducts(query) {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error] = useState(null); // No error simulation

  // Fuse.js configuration
  const fuse = useMemo(() => {
    return new Fuse(productsData, {
      keys: ["name", "description", "tags", "category"], // Search by name and description
      threshold: 0.3, // Adjust for search sensitivity (lower is stricter)
      includeScore: true,
    });
  }, [productsData]);

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      const timeout = setTimeout(() => {
        const results = fuse.search(query).map((result) => result.item); // Extract item from Fuse results
        console.log("🚀 ~ timeout ~ results:", results);
        setSearchResults(results);
        setIsLoading(false);
      }, 500); // Fake 500ms delay

      return () => clearTimeout(timeout); // Cleanup on query change
    } else {
      setSearchResults([]);
    }
  }, [query, fuse]);

  const memoizedValue = useMemo(
    () => ({
      searchResults,
      searchLoading: isLoading,
      searchError: error,
      searchValidating: false, // No validation for local data
      searchEmpty: !isLoading && !searchResults.length,
    }),
    [searchResults, isLoading]
  );

  return memoizedValue;
}
