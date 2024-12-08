/*
  Warnings:

  - A unique constraint covering the columns `[sessionId]` on the table `Item` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Item_sessionId_key" ON "Item"("sessionId");
