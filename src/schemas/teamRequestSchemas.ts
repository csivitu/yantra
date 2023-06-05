import z from 'zod';

export const changeTeamNameSchema = z
    .object({
        title: z.string().min(4),
        members: z.NEVER,
    })
    .strict();

export const createTeamSchema = z // check if it takes extra fields
    .object({
        title: z.string().min(4),
        members: z.array(z.string()).min(4).max(4),
    })
    .strict();
