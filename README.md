# Shared Schemas

Read-only copy of the shared type definitions used across the Life System. Defines the contracts between The Ansible and Jane.

**Location inside your container:** `/agent/packages/shared/`

## Files

- `schemas.ts` — The source Zod schemas (human-readable, start here)
- `types.ts` — TypeScript types inferred from the schemas
- `constants.ts` — Shared constants (categories, confidence thresholds)
- `schemas.js` / `types.js` / `constants.js` — Compiled JS (importable at runtime)
- `*.d.ts` — TypeScript declarations (generated, less readable than the `.ts` source)

**Read `schemas.ts` for understanding.** The `.d.ts` files are Zod's expanded type output and hard to parse.

## Using in a project

If you're building a Node.js project and want to import these schemas at runtime, you can add this package as a local dependency via pnpm:

```bash
pnpm add /agent/packages/shared
```

Then import from it:

```typescript
import { communicationEventSchema, uuidv7 } from '/agent/packages/shared/index.js';
```

Or import individual files directly without installing:

```typescript
import { communicationEventSchema } from '/agent/packages/shared/schemas.js';
```

## Key Schema: CommunicationEvent

The event format for all messages flowing through the NATS COMMUNICATION stream. Both inbound messages (from users via Slack, email, etc.) and outbound messages (from you) use this shape.

```typescript
{
  id: string,                           // UUIDv7 — time-sortable, globally unique
  parentId?: string,                    // Optional UUIDv7 referencing a prior event (reply threading)
  sessionId: string,                    // Groups related messages into a conversation
  channelType: string,                  // "message" | "email" | "canvas" | "claude-code"
  direction: "inbound" | "outbound",
  contentType: "markdown",              // Always markdown — channel adapters handle conversion
  content: string,                      // The message body in Markdown
  metadata: Record<string, unknown>,    // Channel-specific data (e.g. thread_ts, channel)
  timestamp: string,                    // ISO 8601 datetime
}
```

### ID generation

The `id` field uses UUIDv7 (RFC 9562) — a UUID that embeds a millisecond timestamp so IDs sort temporally. The publish API generates one if you don't provide it.

To generate your own (e.g. when you need the ID before publishing):

```typescript
import { uuidv7 } from '/agent/packages/shared/index.js';
const id = uuidv7();
```

The `uuidv7` function is re-exported from this package for convenience.

### Parent ID

Use `parentId` to link an event to a prior event it's responding to. This enables reply threading across channels. For example, when replying to an inbound message, set `parentId` to the `id` of that inbound event.

### Two schemas

- **`communicationEventSchema`** — The full event shape (all fields required except `parentId` and `metadata`)
- **`communicationEventInputSchema`** — Used by the publish API. Same shape but `id` is also optional (server generates if omitted)

### How messages flow

1. **Inbound:** User sends a Slack message -> n8n normalizes it -> POSTs to Ansible API `/api/comms/publish` -> published to NATS `communication.inbound.{channelType}` -> forwarded to webhook consumer
2. **Outbound:** POST to Ansible API `/api/comms/publish` with `direction: "outbound"` -> published to NATS `communication.outbound.{channelType}` -> Communication Gateway delivers to the channel

### Publishing from Jane

To publish an outbound message, POST to the Ansible API:

```bash
curl -X POST http://api:3001/api/comms/publish \
  -H 'Content-Type: application/json' \
  -d '{
    "sessionId": "your-session-id",
    "parentId": "019530a1-...",
    "channelType": "message",
    "direction": "outbound",
    "contentType": "markdown",
    "content": "Hello from Jane",
    "metadata": {},
    "timestamp": "2026-02-27T12:00:00Z"
  }'
```

Response: `{ "ok": true, "id": "019530b2-...", "subject": "communication.outbound.message", "queued": true }`

From inside your container, the Ansible API is reachable at `http://api:3001`. The `id` and `parentId` fields are optional in the request — the server generates `id` if omitted.

## Other Schemas

- **janeCommandSchema / janeSessionSchema** — Your command and session data model (used by the Ansible dashboard to display your executions)
- **janeCommandResultSchema** — Execution result with cost/token tracking
- **janeExecutionViewSchema / janeExecutionsListSchema** — Merged execution views for the dashboard
- **recordBaseSchema / recordCreateSchema** — The Ansible's record storage model (people, projects, ideas, admin categories)
- **inboxLogSchema** — Audit trail for captured items
- **recordLinkSchema** — Links between records

## Constants

From `constants.ts`:

- **`CATEGORIES`** — `['people', 'projects', 'ideas', 'admin']`
- **`INBOX_STATUSES`** — `['filed', 'needs_review', 'fixed', 'error', 'dismissed']`
- **`CONFIDENCE_THRESHOLDS`** — `AUTO_FILE: 0.85`, `NEEDS_REVIEW: 0.6`

## This is read-only

These files are mounted from the host. You can read them but not modify them. If the schemas need to change, that happens in the source repo and gets rebuilt via `install.sh`.
