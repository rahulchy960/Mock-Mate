import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const MockMate = pgTable('Mock_Data', {
    id: serial('id').primaryKey(),
    jsonMockResp: text('jsonMockResp').notNull(),
    jobPosition: varchar('jobPosition').notNull(),
    jobDesc: varchar('jobDesc').notNull(),
    jobExperience: varchar('jobExperience').notNull(),
    createdBy: varchar('createdBy').notNull(),
    createdTime: varchar('createdTime'),
    mockId: varchar('mockId').notNull()
}) ;

export const UserAnswer = pgTable('User_Answer', {
    id: serial('id').primaryKey(),
    mockId: varchar('mockId').notNull(),
    Question: varchar('question').notNull(),
    correctAns: text('correctAns').notNull(),
    userAns: text('userAns').notNull(),
    feedback: text('feedback').notNull(),
    rating: varchar('rating').notNull(),
    createdBy: varchar('createdBy').notNull(),
    createdTime: varchar('createdTime')
})