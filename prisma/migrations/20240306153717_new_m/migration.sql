-- AlterTable
ALTER TABLE "members" ALTER COLUMN "title" DROP NOT NULL;

-- CreateTable
CREATE TABLE "events" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "des" TEXT NOT NULL,
    "sDate" TIMESTAMP(3) NOT NULL,
    "eDate" TIMESTAMP(3) NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);
