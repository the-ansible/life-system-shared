export const CATEGORIES = ['people', 'projects', 'ideas', 'admin'] as const;
export type Category = (typeof CATEGORIES)[number];

export const INBOX_STATUSES = ['filed', 'needs_review', 'fixed', 'error', 'dismissed'] as const;
export type InboxStatus = (typeof INBOX_STATUSES)[number];

export const CONFIDENCE_THRESHOLDS = {
  /** Above this, auto-file without review */
  AUTO_FILE: 0.85,
  /** Below this, hold for human review */
  NEEDS_REVIEW: 0.6,
} as const;
