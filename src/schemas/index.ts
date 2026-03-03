import z from "zod"

import { WeekDay } from "../generated/prisma/enums.js"

export const ErrorSchema = z.object({
	error: z.string(),
	code: z.string(),
})

export const WorkoutPlanSchema = z.object({
	id: z.uuid(),
	name: z.string().trim().min(1),
	userId: z.string(),
	isActive: z.boolean(),
	createdAt: z.date(),
	workoutDays: z.array(
		z.object({
			id: z.string(),
			name: z.string().trim().min(1),
			weekDay: z.enum(WeekDay),
			isRest: z.boolean().default(false),
			estimatedDurationInSeconds: z.number().min(1),
			coverImageUrl: z.url().optional(),
			exercises: z.array(
				z.object({
					id: z.string(),
					order: z.number().min(0),
					name: z.string().trim().min(1),
					sets: z.number().min(1),
					reps: z.number().min(1),
					restTimeInSeconds: z.number().min(1),
				}),
			),
		}),
	),
})

export const WorkoutPlanInputSchema = z.object({
	name: z.string().trim().min(1),
	workoutDays: z.array(
		z.object({
			name: z.string().trim().min(1),
			weekDay: z.enum(WeekDay),
			isRest: z.boolean().default(false),
			estimatedDurationInSeconds: z.number().min(1),
			coverImageUrl: z.url().optional(),
			exercises: z.array(
				z.object({
					order: z.number().min(0),
					name: z.string().trim().min(1),
					sets: z.number().min(1),
					reps: z.number().min(1),
					restTimeInSeconds: z.number().min(1),
				}),
			),
		}),
	),
})

export const WorkoutSessionOutputSchema = z.object({
	workoutSessionId: z.uuid(),
})
