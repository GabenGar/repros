/**
 * https://remix.run/docs/en/main/guides/gotchas#typeof-window-checks
 */
export const isBrowser = typeof document === "undefined"
