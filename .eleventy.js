const filters = require('./utils/filters.js');
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
//Foo

// Transforms
const htmlMinTransform = require('./src/transforms/html-min-transform.js');

// Create a helpful production flag
const isProduction = process.env.NODE_ENV === 'production';

module.exports = (config) => {

  config.addPlugin(eleventyNavigationPlugin);

  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  config.setUseGitIgnore(false);

  // Only minify HTML if we are in production because it slows builds _right_ down
  if (isProduction) {
    config.addTransform('htmlmin', htmlMinTransform);
  }

  // Filters
  Object.keys(filters).forEach((filterName) => {
    config.addFilter(filterName, filters[filterName]);
  });

  // Make dates readable
  const {
    DateTime
  } = require("luxon");

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    config.addFilter('htmlDateString', (dateObj) => {
      return DateTime.fromJSDate(dateObj, {
        zone: 'utc'
      }).toFormat('yy-MM-dd');
    });

    config.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {
      zone: 'utc'
    }).toFormat("dd-MM-yy");
  });

  config.addFilter("yearOnly", dateObj => {
    return DateTime.fromJSDate(dateObj, {
      zone: 'utc'
    }).toFormat("yyyy");
  });

  // Image shortcode
  config.addShortcode('img', function (path, alt) {

      if (process.env.NODE_ENV === 'production') {
      return `<img src="https://res.cloudinary.com/benjand/image/fetch/q_auto,f_auto/https://elated-varahamihira-719e35.netlify.app/images/${path}" alt="${alt}">`
      }

      else {
      return `<img src="/images/${path}" alt="${alt}">`
      }
  })

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
