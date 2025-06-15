export function getDomainUrl(path: string = ''): string {
  // Get the current hostname
  const hostname = typeof window !== 'undefined' ? window.location.hostname : '';
  
  // If we're on a subdomain, use the main domain
  if (hostname === 'support.ibrowe.com' || hostname === 'marketing.ibrowe.com') {
    return `https://ibrowe.com${path}`;
  }
  
  // Otherwise, use the current domain
  return path;
} 