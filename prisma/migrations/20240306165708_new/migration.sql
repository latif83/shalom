/*
  Warnings:

  - You are about to drop the `events` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `members` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `pastors` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "events";

-- DropTable
DROP TABLE "members";

-- DropTable
DROP TABLE "pastors";

-- CreateTable
CREATE TABLE "shalom_pastors" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "f_name" TEXT NOT NULL,
    "l_name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "shalom_pastors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shalom_members" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "f_name" TEXT NOT NULL,
    "l_name" TEXT NOT NULL,
    "title" TEXT,
    "address" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "shalom_members_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shalom_events" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "des" TEXT NOT NULL,
    "sDate" TIMESTAMP(3) NOT NULL,
    "eDate" TIMESTAMP(3) NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "shalom_events_pkey" PRIMARY KEY ("id")
);
