module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/script/');

  eleventyConfig.addPassthroughCopy('json');

  return {
    dir: {
      input: 'src',
      output: '_site', //tutorial = dist
      includes: 'templates', // tutorial = templates
      data: '_data',
    },
    templateFormats: ['html', 'md', 'css', 'liquid', 'njk', 'js'],
    htmlTemplateEngine: 'liquid',
    markdownTemplateEngine: 'liquid',
    passThroughFileCopy: true,
  };
};
