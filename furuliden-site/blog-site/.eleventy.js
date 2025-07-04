const { DateTime } = require("luxon");


module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("date", (dateObj, format = "yyyy-LL-dd") => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(format);
  });

  // Kopiera statiska filer som ligger i "images", "styles", "favicon"
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("style.css");


  return {
    dir: {
      input: ".",              // Rotmapp
      includes: "_includes",   // Layouts, partials
      output: "../blog" // Output efter build
    

    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};