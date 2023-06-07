import z from 'zod';

export const addSubmissionSchema = z
    .object({
        title: z.string().min(4),
        description: z.string().max(100),
        links: z
            .array(
                z
                    .string()
                    .regex(
                        /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/
                    )
            )
            .max(5),
        track: z.number(),
    })
    .strict();

export const editSubmissionSchema = z
    .object({
        title: z.string(),
        description: z.string().max(100),
        links: z
            .array(
                z
                    .string()
                    .regex(
                        /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/
                    )
            )
            .max(5),
        files: z.array(z.string()),
    })
    .strict();
