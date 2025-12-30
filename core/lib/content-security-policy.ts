import builder from 'content-security-policy-builder';

const makeswiftEnabled = !!process.env.MAKESWIFT_SITE_API_KEY;

const makeswiftBaseUrl = process.env.MAKESWIFT_BASE_URL || 'https://app.makeswift.com';

const frameAncestors = makeswiftEnabled ? makeswiftBaseUrl : 'none';

// customize the directives as needed
export const cspHeader = builder({
  directives: {
    baseUri: ['self'],
    frameAncestors: [frameAncestors],
    // Allow 'unsafe-eval' for Three.js/React Three Fiber 3D rendering
    scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
    // connectSrc: ['self'],
    // formAction: ['self'],
    // defaultSrc: ['self'],
    // styleSrc: ['self'],
    // imgSrc: ['self'],
    // connectSrc: ['self'],
    // fontSrc: ['self'],
    // objectSrc: ['none'],
    // mediaSrc: ['self'],
    // frameSrc: ['self'],
    // childSrc: ['self'],
    // manifestSrc: ['self'],
    // workerSrc: ['self'],
    // prefetchSrc: ['self'],
    // navigateTo: ['self'],
    // reportUri: ['none'],
  },
});
