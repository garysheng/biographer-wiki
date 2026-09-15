import wiki from './wiki.config.json';
import { defineWikiConfig } from '@supersuit/docusaurus-preset-wiki';

// Everything a family wiki shares lives in the preset. Per-wiki additions go in the
// second argument: themeConfig deep-merges onto the defaults, any other key replaces its default.
export default defineWikiConfig(wiki);
