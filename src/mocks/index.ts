import { JSONData } from "../types";

// const ARRAY_SIZE = 3;
const ARRAY_SIZE = 100;

// Example:
// { id: 1, title: "Title 1" },
// { id: 2, title: "Title 2" },

export const test1: JSONData = Array.from(
  { length: ARRAY_SIZE },
  (v, index) => ({
    id: index,
    title: `Title ${index}`,
  })
);

// Example:
// { name: "Name 1", description: "Description 1" },
// { name: "Name 2", description: "Description 2", link: "google.com" },

export const test2: JSONData = Array.from(
  { length: ARRAY_SIZE },
  (v, index) => {
    const o: JSONData = {
      name: "Name 2",
      description: "Description 2",
    };

    if (index % 2 === 0) {
      o.link = "google.com";
    }

    return o;
  }
);
