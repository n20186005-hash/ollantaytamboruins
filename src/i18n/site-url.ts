const canonicalHost = "www.ollantaytamboruins.com";
const configuredHost = process.env.CURRENT_SITE_DOMAIN;

export const siteUrl = `https://${!configuredHost || configuredHost === "ollantaytamboruins.com" ? canonicalHost : configuredHost}`;
