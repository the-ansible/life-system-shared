import { z } from 'zod';
import { CATEGORIES, INBOX_STATUSES } from './constants.js';

// --- Source metadata ---

export const sourceSchema = z.object({
  type: z.string(), // e.g. 'slack_capture', 'email_forward', 'jane'
}).passthrough();

// --- Category-specific data payloads ---

export const peopleDataSchema = z.object({
  name: z.string(),
  context: z.string().optional(),
  follow_ups: z.array(z.string()).optional(),
}).passthrough();

export const projectsDataSchema = z.object({
  name: z.string(),
  status: z.string().optional(),
  next_action: z.string().optional(),
  notes: z.string().optional(),
}).passthrough();

export const ideasDataSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
}).passthrough();

export const adminDataSchema = z.object({
  description: z.string().optional(),
}).passthrough();

// --- Records ---

export const recordBaseSchema = z.object({
  id: z.string().uuid(),
  category: z.enum(CATEGORIES),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  archived_at: z.coerce.date().nullable(),
  tags: z.array(z.string()),
  confidence: z.number().min(0).max(1),
  human_verified: z.boolean(),
  search_text: z.string(),
  source: sourceSchema,
  data: z.record(z.unknown()),
});

/** Schema for creating a new record (server-generated fields omitted) */
export const recordCreateSchema = z.object({
  category: z.enum(CATEGORIES),
  tags: z.array(z.string()).default([]),
  confidence: z.number().min(0).max(1),
  human_verified: z.boolean().default(false),
  search_text: z.string(),
  source: sourceSchema,
  data: z.record(z.unknown()),
});

// --- Inbox log ---

export const inboxLogSchema = z.object({
  id: z.string().uuid(),
  original_text: z.string(),
  category: z.enum(CATEGORIES).nullable(),
  destination_name: z.string().nullable(),
  record_id: z.string().uuid().nullable(),
  confidence: z.number().min(0).max(1),
  status: z.enum(INBOX_STATUSES),
  created_at: z.coerce.date(),
  slack_ts: z.string().nullable(),
  slack_thread_ts: z.string().nullable(),
  slack_channel_id: z.string().nullable(),
  raw_ai_response: z.record(z.unknown()).nullable(),
});

// --- Record links ---

export const recordLinkSchema = z.object({
  source_id: z.string().uuid(),
  target_id: z.string().uuid(),
  link_type: z.string(),
  created_at: z.coerce.date(),
});

// --- Jane session (groups related commands) ---

export const janeSessionSchema = z.object({
  id: z.string(),
  name: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

// --- Jane command result (from Jane API) ---

export const janeCommandResultSchema = z.object({
  text: z.string(),
  costUsd: z.number().nullable(),
  inputTokens: z.number().nullable(),
  outputTokens: z.number().nullable(),
  durationMs: z.number().nullable(),
});

export const janeCommandSchema = z.object({
  id: z.string().uuid(),
  prompt: z.string(),
  status: z.string(),
  model: z.string().nullable(),
  tool: z.string(),
  thinkingMode: z.boolean(),
  errorMessage: z.string().nullable(),
  pid: z.number().nullable(),
  sessionId: z.string().nullable(),
  processAlive: z.boolean().nullable(),
  createdAt: z.string(),
  startedAt: z.string().nullable(),
  finishedAt: z.string().nullable(),
  result: janeCommandResultSchema.nullable(),
});

// --- Jane execution view (merged: DB execution row + Jane API command) ---

export const janeExecutionViewSchema = z.object({
  commandId: z.string().uuid(),
  executionId: z.string().uuid(),
  executionStatus: z.string().nullable(),
  executionType: z.string().nullable(),
  taskType: z.string().nullable(),
  role: z.string().nullable(),
  initiatingCommandId: z.string().uuid().nullable(),
  sessionId: z.string().nullable(),
  createdAt: z.string(),
  updatedAt: z.string(),
  command: janeCommandSchema.nullable(),
  commandEnrichmentError: z.boolean(),
});

export const janeExecutionsListSchema = z.object({
  executions: z.array(janeExecutionViewSchema),
  total: z.number(),
  limit: z.number(),
  offset: z.number(),
});

// --- Classification hints (sender-supplied) ---

export const classificationHintsSchema = z.object({
  category: z.string().optional(),
  urgency: z.string().optional(),
  routing: z.string().optional(),
});

// --- Communication events ---

/** Identity of a message sender or recipient */
export const eventParticipantSchema = z.object({
  id: z.string(),                          // Stable identifier (e.g. "chris", "jane", "memory-worker")
  displayName: z.string().optional(),      // Human-readable name
  type: z.enum(["person", "system", "agent", "channel", "group"]),
});

export const communicationEventSchema = z.object({
  id: z.string().uuid(),                   // UUIDv7 — sortable, globally unique
  parentId: z.string().uuid().optional(),  // References a prior event (e.g. the message being replied to)
  sessionId: z.string(),
  channelType: z.string(),                // Abstract: "realtime" | "async" | "interactive" | "internal"
  direction: z.enum(["inbound", "outbound"]),
  contentType: z.literal("markdown"),
  content: z.string(),
  sender: eventParticipantSchema.optional(),     // Who sent this message
  recipients: z.array(eventParticipantSchema).optional(), // Who this message is for
  hints: classificationHintsSchema.optional(),
  metadata: z.record(z.unknown()).default({}),
  timestamp: z.string().datetime(),
});

/** Input schema for the publish API — id is optional (server generates if omitted) */
export const communicationEventInputSchema = communicationEventSchema.extend({
  id: z.string().uuid().optional(),
});
