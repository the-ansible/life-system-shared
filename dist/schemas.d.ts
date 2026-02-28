import { z } from 'zod';
export declare const sourceSchema: z.ZodObject<{
    type: z.ZodString;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    type: z.ZodString;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    type: z.ZodString;
}, z.ZodTypeAny, "passthrough">>;
export declare const peopleDataSchema: z.ZodObject<{
    name: z.ZodString;
    context: z.ZodOptional<z.ZodString>;
    follow_ups: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    name: z.ZodString;
    context: z.ZodOptional<z.ZodString>;
    follow_ups: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    name: z.ZodString;
    context: z.ZodOptional<z.ZodString>;
    follow_ups: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, z.ZodTypeAny, "passthrough">>;
export declare const projectsDataSchema: z.ZodObject<{
    name: z.ZodString;
    status: z.ZodOptional<z.ZodString>;
    next_action: z.ZodOptional<z.ZodString>;
    notes: z.ZodOptional<z.ZodString>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    name: z.ZodString;
    status: z.ZodOptional<z.ZodString>;
    next_action: z.ZodOptional<z.ZodString>;
    notes: z.ZodOptional<z.ZodString>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    name: z.ZodString;
    status: z.ZodOptional<z.ZodString>;
    next_action: z.ZodOptional<z.ZodString>;
    notes: z.ZodOptional<z.ZodString>;
}, z.ZodTypeAny, "passthrough">>;
export declare const ideasDataSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
}, z.ZodTypeAny, "passthrough">>;
export declare const adminDataSchema: z.ZodObject<{
    description: z.ZodOptional<z.ZodString>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    description: z.ZodOptional<z.ZodString>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    description: z.ZodOptional<z.ZodString>;
}, z.ZodTypeAny, "passthrough">>;
export declare const recordBaseSchema: z.ZodObject<{
    id: z.ZodString;
    category: z.ZodEnum<["people", "projects", "ideas", "admin"]>;
    created_at: z.ZodDate;
    updated_at: z.ZodDate;
    archived_at: z.ZodNullable<z.ZodDate>;
    tags: z.ZodArray<z.ZodString, "many">;
    confidence: z.ZodNumber;
    human_verified: z.ZodBoolean;
    search_text: z.ZodString;
    source: z.ZodObject<{
        type: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        type: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        type: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>;
    data: z.ZodRecord<z.ZodString, z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    id: string;
    category: "people" | "projects" | "ideas" | "admin";
    created_at: Date;
    updated_at: Date;
    archived_at: Date | null;
    tags: string[];
    confidence: number;
    human_verified: boolean;
    search_text: string;
    source: {
        type: string;
    } & {
        [k: string]: unknown;
    };
    data: Record<string, unknown>;
}, {
    id: string;
    category: "people" | "projects" | "ideas" | "admin";
    created_at: Date;
    updated_at: Date;
    archived_at: Date | null;
    tags: string[];
    confidence: number;
    human_verified: boolean;
    search_text: string;
    source: {
        type: string;
    } & {
        [k: string]: unknown;
    };
    data: Record<string, unknown>;
}>;
/** Schema for creating a new record (server-generated fields omitted) */
export declare const recordCreateSchema: z.ZodObject<{
    category: z.ZodEnum<["people", "projects", "ideas", "admin"]>;
    tags: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    confidence: z.ZodNumber;
    human_verified: z.ZodDefault<z.ZodBoolean>;
    search_text: z.ZodString;
    source: z.ZodObject<{
        type: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        type: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        type: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>;
    data: z.ZodRecord<z.ZodString, z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    category: "people" | "projects" | "ideas" | "admin";
    tags: string[];
    confidence: number;
    human_verified: boolean;
    search_text: string;
    source: {
        type: string;
    } & {
        [k: string]: unknown;
    };
    data: Record<string, unknown>;
}, {
    category: "people" | "projects" | "ideas" | "admin";
    confidence: number;
    search_text: string;
    source: {
        type: string;
    } & {
        [k: string]: unknown;
    };
    data: Record<string, unknown>;
    tags?: string[] | undefined;
    human_verified?: boolean | undefined;
}>;
export declare const inboxLogSchema: z.ZodObject<{
    id: z.ZodString;
    original_text: z.ZodString;
    category: z.ZodNullable<z.ZodEnum<["people", "projects", "ideas", "admin"]>>;
    destination_name: z.ZodNullable<z.ZodString>;
    record_id: z.ZodNullable<z.ZodString>;
    confidence: z.ZodNumber;
    status: z.ZodEnum<["filed", "needs_review", "fixed", "error", "dismissed"]>;
    created_at: z.ZodDate;
    slack_ts: z.ZodNullable<z.ZodString>;
    slack_thread_ts: z.ZodNullable<z.ZodString>;
    slack_channel_id: z.ZodNullable<z.ZodString>;
    raw_ai_response: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strip", z.ZodTypeAny, {
    status: "filed" | "needs_review" | "fixed" | "error" | "dismissed";
    id: string;
    category: "people" | "projects" | "ideas" | "admin" | null;
    created_at: Date;
    confidence: number;
    original_text: string;
    destination_name: string | null;
    record_id: string | null;
    slack_ts: string | null;
    slack_thread_ts: string | null;
    slack_channel_id: string | null;
    raw_ai_response: Record<string, unknown> | null;
}, {
    status: "filed" | "needs_review" | "fixed" | "error" | "dismissed";
    id: string;
    category: "people" | "projects" | "ideas" | "admin" | null;
    created_at: Date;
    confidence: number;
    original_text: string;
    destination_name: string | null;
    record_id: string | null;
    slack_ts: string | null;
    slack_thread_ts: string | null;
    slack_channel_id: string | null;
    raw_ai_response: Record<string, unknown> | null;
}>;
export declare const recordLinkSchema: z.ZodObject<{
    source_id: z.ZodString;
    target_id: z.ZodString;
    link_type: z.ZodString;
    created_at: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    created_at: Date;
    source_id: string;
    target_id: string;
    link_type: string;
}, {
    created_at: Date;
    source_id: string;
    target_id: string;
    link_type: string;
}>;
export declare const janeSessionSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: string;
    createdAt: string;
    updatedAt: string;
}, {
    name: string;
    id: string;
    createdAt: string;
    updatedAt: string;
}>;
export declare const janeCommandResultSchema: z.ZodObject<{
    text: z.ZodString;
    costUsd: z.ZodNullable<z.ZodNumber>;
    inputTokens: z.ZodNullable<z.ZodNumber>;
    outputTokens: z.ZodNullable<z.ZodNumber>;
    durationMs: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    text: string;
    costUsd: number | null;
    inputTokens: number | null;
    outputTokens: number | null;
    durationMs: number | null;
}, {
    text: string;
    costUsd: number | null;
    inputTokens: number | null;
    outputTokens: number | null;
    durationMs: number | null;
}>;
export declare const janeCommandSchema: z.ZodObject<{
    id: z.ZodString;
    prompt: z.ZodString;
    status: z.ZodString;
    model: z.ZodNullable<z.ZodString>;
    tool: z.ZodString;
    thinkingMode: z.ZodBoolean;
    errorMessage: z.ZodNullable<z.ZodString>;
    pid: z.ZodNullable<z.ZodNumber>;
    sessionId: z.ZodNullable<z.ZodString>;
    processAlive: z.ZodNullable<z.ZodBoolean>;
    createdAt: z.ZodString;
    startedAt: z.ZodNullable<z.ZodString>;
    finishedAt: z.ZodNullable<z.ZodString>;
    result: z.ZodNullable<z.ZodObject<{
        text: z.ZodString;
        costUsd: z.ZodNullable<z.ZodNumber>;
        inputTokens: z.ZodNullable<z.ZodNumber>;
        outputTokens: z.ZodNullable<z.ZodNumber>;
        durationMs: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        text: string;
        costUsd: number | null;
        inputTokens: number | null;
        outputTokens: number | null;
        durationMs: number | null;
    }, {
        text: string;
        costUsd: number | null;
        inputTokens: number | null;
        outputTokens: number | null;
        durationMs: number | null;
    }>>;
}, "strip", z.ZodTypeAny, {
    status: string;
    id: string;
    createdAt: string;
    prompt: string;
    model: string | null;
    tool: string;
    thinkingMode: boolean;
    errorMessage: string | null;
    pid: number | null;
    sessionId: string | null;
    processAlive: boolean | null;
    startedAt: string | null;
    finishedAt: string | null;
    result: {
        text: string;
        costUsd: number | null;
        inputTokens: number | null;
        outputTokens: number | null;
        durationMs: number | null;
    } | null;
}, {
    status: string;
    id: string;
    createdAt: string;
    prompt: string;
    model: string | null;
    tool: string;
    thinkingMode: boolean;
    errorMessage: string | null;
    pid: number | null;
    sessionId: string | null;
    processAlive: boolean | null;
    startedAt: string | null;
    finishedAt: string | null;
    result: {
        text: string;
        costUsd: number | null;
        inputTokens: number | null;
        outputTokens: number | null;
        durationMs: number | null;
    } | null;
}>;
export declare const janeExecutionViewSchema: z.ZodObject<{
    commandId: z.ZodString;
    executionId: z.ZodString;
    executionStatus: z.ZodNullable<z.ZodString>;
    executionType: z.ZodNullable<z.ZodString>;
    taskType: z.ZodNullable<z.ZodString>;
    role: z.ZodNullable<z.ZodString>;
    initiatingCommandId: z.ZodNullable<z.ZodString>;
    sessionId: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    command: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        prompt: z.ZodString;
        status: z.ZodString;
        model: z.ZodNullable<z.ZodString>;
        tool: z.ZodString;
        thinkingMode: z.ZodBoolean;
        errorMessage: z.ZodNullable<z.ZodString>;
        pid: z.ZodNullable<z.ZodNumber>;
        sessionId: z.ZodNullable<z.ZodString>;
        processAlive: z.ZodNullable<z.ZodBoolean>;
        createdAt: z.ZodString;
        startedAt: z.ZodNullable<z.ZodString>;
        finishedAt: z.ZodNullable<z.ZodString>;
        result: z.ZodNullable<z.ZodObject<{
            text: z.ZodString;
            costUsd: z.ZodNullable<z.ZodNumber>;
            inputTokens: z.ZodNullable<z.ZodNumber>;
            outputTokens: z.ZodNullable<z.ZodNumber>;
            durationMs: z.ZodNullable<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            text: string;
            costUsd: number | null;
            inputTokens: number | null;
            outputTokens: number | null;
            durationMs: number | null;
        }, {
            text: string;
            costUsd: number | null;
            inputTokens: number | null;
            outputTokens: number | null;
            durationMs: number | null;
        }>>;
    }, "strip", z.ZodTypeAny, {
        status: string;
        id: string;
        createdAt: string;
        prompt: string;
        model: string | null;
        tool: string;
        thinkingMode: boolean;
        errorMessage: string | null;
        pid: number | null;
        sessionId: string | null;
        processAlive: boolean | null;
        startedAt: string | null;
        finishedAt: string | null;
        result: {
            text: string;
            costUsd: number | null;
            inputTokens: number | null;
            outputTokens: number | null;
            durationMs: number | null;
        } | null;
    }, {
        status: string;
        id: string;
        createdAt: string;
        prompt: string;
        model: string | null;
        tool: string;
        thinkingMode: boolean;
        errorMessage: string | null;
        pid: number | null;
        sessionId: string | null;
        processAlive: boolean | null;
        startedAt: string | null;
        finishedAt: string | null;
        result: {
            text: string;
            costUsd: number | null;
            inputTokens: number | null;
            outputTokens: number | null;
            durationMs: number | null;
        } | null;
    }>>;
    commandEnrichmentError: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    createdAt: string;
    updatedAt: string;
    sessionId: string | null;
    commandId: string;
    executionId: string;
    executionStatus: string | null;
    executionType: string | null;
    taskType: string | null;
    role: string | null;
    initiatingCommandId: string | null;
    command: {
        status: string;
        id: string;
        createdAt: string;
        prompt: string;
        model: string | null;
        tool: string;
        thinkingMode: boolean;
        errorMessage: string | null;
        pid: number | null;
        sessionId: string | null;
        processAlive: boolean | null;
        startedAt: string | null;
        finishedAt: string | null;
        result: {
            text: string;
            costUsd: number | null;
            inputTokens: number | null;
            outputTokens: number | null;
            durationMs: number | null;
        } | null;
    } | null;
    commandEnrichmentError: boolean;
}, {
    createdAt: string;
    updatedAt: string;
    sessionId: string | null;
    commandId: string;
    executionId: string;
    executionStatus: string | null;
    executionType: string | null;
    taskType: string | null;
    role: string | null;
    initiatingCommandId: string | null;
    command: {
        status: string;
        id: string;
        createdAt: string;
        prompt: string;
        model: string | null;
        tool: string;
        thinkingMode: boolean;
        errorMessage: string | null;
        pid: number | null;
        sessionId: string | null;
        processAlive: boolean | null;
        startedAt: string | null;
        finishedAt: string | null;
        result: {
            text: string;
            costUsd: number | null;
            inputTokens: number | null;
            outputTokens: number | null;
            durationMs: number | null;
        } | null;
    } | null;
    commandEnrichmentError: boolean;
}>;
export declare const janeExecutionsListSchema: z.ZodObject<{
    executions: z.ZodArray<z.ZodObject<{
        commandId: z.ZodString;
        executionId: z.ZodString;
        executionStatus: z.ZodNullable<z.ZodString>;
        executionType: z.ZodNullable<z.ZodString>;
        taskType: z.ZodNullable<z.ZodString>;
        role: z.ZodNullable<z.ZodString>;
        initiatingCommandId: z.ZodNullable<z.ZodString>;
        sessionId: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        command: z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            prompt: z.ZodString;
            status: z.ZodString;
            model: z.ZodNullable<z.ZodString>;
            tool: z.ZodString;
            thinkingMode: z.ZodBoolean;
            errorMessage: z.ZodNullable<z.ZodString>;
            pid: z.ZodNullable<z.ZodNumber>;
            sessionId: z.ZodNullable<z.ZodString>;
            processAlive: z.ZodNullable<z.ZodBoolean>;
            createdAt: z.ZodString;
            startedAt: z.ZodNullable<z.ZodString>;
            finishedAt: z.ZodNullable<z.ZodString>;
            result: z.ZodNullable<z.ZodObject<{
                text: z.ZodString;
                costUsd: z.ZodNullable<z.ZodNumber>;
                inputTokens: z.ZodNullable<z.ZodNumber>;
                outputTokens: z.ZodNullable<z.ZodNumber>;
                durationMs: z.ZodNullable<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                text: string;
                costUsd: number | null;
                inputTokens: number | null;
                outputTokens: number | null;
                durationMs: number | null;
            }, {
                text: string;
                costUsd: number | null;
                inputTokens: number | null;
                outputTokens: number | null;
                durationMs: number | null;
            }>>;
        }, "strip", z.ZodTypeAny, {
            status: string;
            id: string;
            createdAt: string;
            prompt: string;
            model: string | null;
            tool: string;
            thinkingMode: boolean;
            errorMessage: string | null;
            pid: number | null;
            sessionId: string | null;
            processAlive: boolean | null;
            startedAt: string | null;
            finishedAt: string | null;
            result: {
                text: string;
                costUsd: number | null;
                inputTokens: number | null;
                outputTokens: number | null;
                durationMs: number | null;
            } | null;
        }, {
            status: string;
            id: string;
            createdAt: string;
            prompt: string;
            model: string | null;
            tool: string;
            thinkingMode: boolean;
            errorMessage: string | null;
            pid: number | null;
            sessionId: string | null;
            processAlive: boolean | null;
            startedAt: string | null;
            finishedAt: string | null;
            result: {
                text: string;
                costUsd: number | null;
                inputTokens: number | null;
                outputTokens: number | null;
                durationMs: number | null;
            } | null;
        }>>;
        commandEnrichmentError: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        createdAt: string;
        updatedAt: string;
        sessionId: string | null;
        commandId: string;
        executionId: string;
        executionStatus: string | null;
        executionType: string | null;
        taskType: string | null;
        role: string | null;
        initiatingCommandId: string | null;
        command: {
            status: string;
            id: string;
            createdAt: string;
            prompt: string;
            model: string | null;
            tool: string;
            thinkingMode: boolean;
            errorMessage: string | null;
            pid: number | null;
            sessionId: string | null;
            processAlive: boolean | null;
            startedAt: string | null;
            finishedAt: string | null;
            result: {
                text: string;
                costUsd: number | null;
                inputTokens: number | null;
                outputTokens: number | null;
                durationMs: number | null;
            } | null;
        } | null;
        commandEnrichmentError: boolean;
    }, {
        createdAt: string;
        updatedAt: string;
        sessionId: string | null;
        commandId: string;
        executionId: string;
        executionStatus: string | null;
        executionType: string | null;
        taskType: string | null;
        role: string | null;
        initiatingCommandId: string | null;
        command: {
            status: string;
            id: string;
            createdAt: string;
            prompt: string;
            model: string | null;
            tool: string;
            thinkingMode: boolean;
            errorMessage: string | null;
            pid: number | null;
            sessionId: string | null;
            processAlive: boolean | null;
            startedAt: string | null;
            finishedAt: string | null;
            result: {
                text: string;
                costUsd: number | null;
                inputTokens: number | null;
                outputTokens: number | null;
                durationMs: number | null;
            } | null;
        } | null;
        commandEnrichmentError: boolean;
    }>, "many">;
    total: z.ZodNumber;
    limit: z.ZodNumber;
    offset: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    executions: {
        createdAt: string;
        updatedAt: string;
        sessionId: string | null;
        commandId: string;
        executionId: string;
        executionStatus: string | null;
        executionType: string | null;
        taskType: string | null;
        role: string | null;
        initiatingCommandId: string | null;
        command: {
            status: string;
            id: string;
            createdAt: string;
            prompt: string;
            model: string | null;
            tool: string;
            thinkingMode: boolean;
            errorMessage: string | null;
            pid: number | null;
            sessionId: string | null;
            processAlive: boolean | null;
            startedAt: string | null;
            finishedAt: string | null;
            result: {
                text: string;
                costUsd: number | null;
                inputTokens: number | null;
                outputTokens: number | null;
                durationMs: number | null;
            } | null;
        } | null;
        commandEnrichmentError: boolean;
    }[];
    total: number;
    limit: number;
    offset: number;
}, {
    executions: {
        createdAt: string;
        updatedAt: string;
        sessionId: string | null;
        commandId: string;
        executionId: string;
        executionStatus: string | null;
        executionType: string | null;
        taskType: string | null;
        role: string | null;
        initiatingCommandId: string | null;
        command: {
            status: string;
            id: string;
            createdAt: string;
            prompt: string;
            model: string | null;
            tool: string;
            thinkingMode: boolean;
            errorMessage: string | null;
            pid: number | null;
            sessionId: string | null;
            processAlive: boolean | null;
            startedAt: string | null;
            finishedAt: string | null;
            result: {
                text: string;
                costUsd: number | null;
                inputTokens: number | null;
                outputTokens: number | null;
                durationMs: number | null;
            } | null;
        } | null;
        commandEnrichmentError: boolean;
    }[];
    total: number;
    limit: number;
    offset: number;
}>;
export declare const communicationEventSchema: z.ZodObject<{
    id: z.ZodString;
    parentId: z.ZodOptional<z.ZodString>;
    sessionId: z.ZodString;
    channelType: z.ZodString;
    direction: z.ZodEnum<["inbound", "outbound"]>;
    contentType: z.ZodLiteral<"markdown">;
    content: z.ZodString;
    metadata: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    timestamp: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    sessionId: string;
    channelType: string;
    direction: "inbound" | "outbound";
    contentType: "markdown";
    content: string;
    metadata: Record<string, unknown>;
    timestamp: string;
    parentId?: string | undefined;
}, {
    id: string;
    sessionId: string;
    channelType: string;
    direction: "inbound" | "outbound";
    contentType: "markdown";
    content: string;
    timestamp: string;
    parentId?: string | undefined;
    metadata?: Record<string, unknown> | undefined;
}>;
/** Input schema for the publish API — id is optional (server generates if omitted) */
export declare const communicationEventInputSchema: z.ZodObject<{
    parentId: z.ZodOptional<z.ZodString>;
    sessionId: z.ZodString;
    channelType: z.ZodString;
    direction: z.ZodEnum<["inbound", "outbound"]>;
    contentType: z.ZodLiteral<"markdown">;
    content: z.ZodString;
    metadata: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    timestamp: z.ZodString;
} & {
    id: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    sessionId: string;
    channelType: string;
    direction: "inbound" | "outbound";
    contentType: "markdown";
    content: string;
    metadata: Record<string, unknown>;
    timestamp: string;
    id?: string | undefined;
    parentId?: string | undefined;
}, {
    sessionId: string;
    channelType: string;
    direction: "inbound" | "outbound";
    contentType: "markdown";
    content: string;
    timestamp: string;
    id?: string | undefined;
    parentId?: string | undefined;
    metadata?: Record<string, unknown> | undefined;
}>;
//# sourceMappingURL=schemas.d.ts.map