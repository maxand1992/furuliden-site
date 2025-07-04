const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Slug-filter för att generera URL-vänliga filnamn
  eleventyConfig.addFilter("slug", function(str) {
    return str.toLowerCase()
              .replace(/\s+/g, '-')
              .replace(/[^\w\-]+/g, '')
              .replace(/\-\-+/g, '-')
              .replace(/^-+|-+$/g, '');
  });

  // Datum-filter
  eleventyConfig.addFilter("date", (dateObj, format = "yyyy-LL-dd") => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(format);
  });

  // Kopiera statiska filer
  eleventyConfig.addPassthroughCopy("favicon.png");
  eleventyConfig.addPassthroughCopy("logo.png");

  return {
    dir: {
      input: ".",              // Rotmapp
      includes: "_includes",   // Layouts, partials
      output: "../blog/"       // Output till root/blog/
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};