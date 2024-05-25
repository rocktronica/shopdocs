const { basename } = require("node:path");
const { DateTime } = require("luxon");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const Fs = require("fs");

const getPrettyDate = (dateObj) =>
  DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("static");
  eleventyConfig.addPassthroughCopy({ output: "downloads" });
  eleventyConfig.addPassthroughCopy({ misc: "downloads" });

  eleventyConfig.addGlobalData("misc", async () => {
    const { globby } = await import("globby");

    return (await globby("misc")).map((path) => ({
      filename: basename(path),

      // TODO: fix modified time getting mungled by deploy process
      lastUpdated: getPrettyDate(Fs.statSync(path).mtime),
    }));
  });

  eleventyConfig.addFilter("getH1Text", function (value) {
    return value.match(/<h1>([^<>]*)<\/h1>/)[1];
  });

  eleventyConfig.addFilter("postDate", (dateObj) => getPrettyDate(dateObj));

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
