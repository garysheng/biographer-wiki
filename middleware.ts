// Vercel Routing Middleware for an OPEN wiki: the family bot-block and the one-page share
// layer, from the preset. A gated wiki: createMiddleware({ gate: createPasswordGate() }).
export { default } from '@supersuit/docusaurus-preset-wiki/middleware';

// Vercel reads `config` STATICALLY from this file, so it cannot come from the package: a
// re-export is invisible to it and the middleware runs on every path, which on a gated wiki
// 401s its own og cards and manifest. The literal is the package's; `wiki check middleware`
// refuses a build where it drifts.
export const config = {
  matcher: [
    '/((?!assets/|img/|skills/|generators/|favicon\\.ico|robots\\.txt|sitemap\\.xml|manifest\\.json|.*\\.(?:js|css|png|jpe?g|gif|svg|webp|ico|woff2?|ttf|map|json|webmanifest|xml)$).*)',
  ],
  runtime: 'edge',
};
