-- CreateEnum
CREATE TYPE "Category" AS ENUM ('food', 'clothes', 'cosmetics', 'medicines', 'toys', 'other');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('recieved', 'returned');

-- CreateTable
CREATE TABLE "rows" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "category" "Category",
    "description" TEXT,
    "owner" TEXT,
    "price" INTEGER,
    "status" "Status",
    "date" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "rows_pkey" PRIMARY KEY ("id")
);
