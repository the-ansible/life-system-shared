import type { z } from 'zod';
import type {
  recordBaseSchema,
  recordCreateSchema,
  inboxLogSchema,
  recordLinkSchema,
  sourceSchema,
  peopleDataSchema,
  projectsDataSchema,
  ideasDataSchema,
  adminDataSchema,
  janeSessionSchema,
  janeCommandResultSchema,
  janeCommandSchema,
  janeExecutionViewSchema,
  janeExecutionsListSchema,
  classificationHintsSchema,
  communicationEventSchema,
  communicationEventInputSchema,
  eventParticipantSchema,
} from './schemas.js';

export type Record = z.infer<typeof recordBaseSchema>;
export type RecordCreate = z.infer<typeof recordCreateSchema>;
export type InboxLog = z.infer<typeof inboxLogSchema>;
export type RecordLink = z.infer<typeof recordLinkSchema>;
export type Source = z.infer<typeof sourceSchema>;

export type PeopleData = z.infer<typeof peopleDataSchema>;
export type ProjectsData = z.infer<typeof projectsDataSchema>;
export type IdeasData = z.infer<typeof ideasDataSchema>;
export type AdminData = z.infer<typeof adminDataSchema>;

export type JaneSession = z.infer<typeof janeSessionSchema>;
export type JaneCommandResult = z.infer<typeof janeCommandResultSchema>;
export type JaneCommand = z.infer<typeof janeCommandSchema>;
export type JaneExecutionView = z.infer<typeof janeExecutionViewSchema>;
export type JaneExecutionsList = z.infer<typeof janeExecutionsListSchema>;

export type ClassificationHints = z.infer<typeof classificationHintsSchema>;
export type EventParticipant = z.infer<typeof eventParticipantSchema>;
export type CommunicationEvent = z.infer<typeof communicationEventSchema>;
export type CommunicationEventInput = z.infer<typeof communicationEventInputSchema>;
