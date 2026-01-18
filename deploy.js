import { publish } from "gh-pages";

publish(
  "build",
  {
    dotfiles: true,
    add: true,
  },
  (err) => {
    if (err) {
      console.error("Error publishing to gh-pages:", err);
    } else {
      console.log("Successfully published to gh-pages");
    }
  },
);
