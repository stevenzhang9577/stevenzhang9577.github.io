'use strict';

// The sitemap plugin starts generating its file with the first post or page.
hexo.extend.generator.register('empty-home-sitemap', function (locals) {
  if (locals.posts.length || locals.pages.length) return;
  const url = new URL('/', this.config.url).href;
  return {
    path: 'sitemap.xml',
    data: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${url}</loc></url></urlset>\n`
  };
});
