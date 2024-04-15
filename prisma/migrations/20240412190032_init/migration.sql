-- CreateTable
CREATE TABLE "Bot" (
    "id" SERIAL NOT NULL,
    "agentId" TEXT NOT NULL,
    "chatBotTitle" TEXT NOT NULL,
    "welcomeMessage" TEXT NOT NULL,
    "widgetColor" TEXT NOT NULL,
    "collectVisitorInfo" BOOLEAN NOT NULL,
    "widgetButtonPosition" TEXT NOT NULL,
    "fontFamily" TEXT NOT NULL,
    "fontUrl" TEXT NOT NULL,
    "convoStarters" TEXT[],
    "profileDescription" TEXT NOT NULL,
    "placeholder" TEXT NOT NULL,
    "style" TEXT NOT NULL,
    "showPopupText" BOOLEAN NOT NULL,
    "popupText" TEXT NOT NULL,
    "expandByDefault" BOOLEAN NOT NULL,
    "removePoweredBy" BOOLEAN NOT NULL,
    "chatIsLocked" BOOLEAN NOT NULL,
    "typingMessage" TEXT NOT NULL,

    CONSTRAINT "Bot_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Bot_agentId_key" ON "Bot"("agentId");

-- AddForeignKey
ALTER TABLE "Bot" ADD CONSTRAINT "Bot_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
