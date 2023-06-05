import z from 'zod';

export const addSubmissionSchema = z
    .object({
        title: z.string().min(4),
        description: z.string().max(100),
        links: z.array(z.string()).min(4).max(5),
    })
    .strict();

export const editSubmissionSchema = z
    .object({
        description: z.string().max(100),
        links: z.array(z.string()).min(4).max(5),
    })
    .partial();
