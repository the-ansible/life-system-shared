export declare const CATEGORIES: readonly ["people", "projects", "ideas", "admin"];
export type Category = (typeof CATEGORIES)[number];
export declare const INBOX_STATUSES: readonly ["filed", "needs_review", "fixed", "error", "dismissed"];
export type InboxStatus = (typeof INBOX_STATUSES)[number];
export declare const CONFIDENCE_THRESHOLDS: {
    /** Above this, auto-file without review */
    readonly AUTO_FILE: 0.85;
    /** Below this, hold for human review */
    readonly NEEDS_REVIEW: 0.6;
};
//# sourceMappingURL=constants.d.ts.map