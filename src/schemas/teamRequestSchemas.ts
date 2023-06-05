import z from 'zod';

export const changeTeamNameSchema = z
    .object({
        title: z.string().min(4),
    })
    .strict();

export const createTeamSchema = z // check if it takes extra fields
    .object({
        title: z.string().min(4),
        members: z.array(z.string()).max(4),
    })
    .strict();
