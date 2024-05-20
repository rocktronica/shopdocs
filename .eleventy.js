const { DateTime } = require("luxon");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("static");
  eleventyConfig.addPassthroughCopy({ output: "downloads" });

  eleventyConfig.addFilter("getH1Text", function (value) {
    return value.match(/<h1>([^<>]*)<\/h1>/)[1];
  });

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  return {
    dir: {
      input: "docs",
      includes: "../_includes", // break out of 11ty's input assumption
      output: "_site",
    },
    pathPrefix: "/shopdocs/",
  };
};
