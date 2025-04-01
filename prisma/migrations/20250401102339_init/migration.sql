-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" DATETIME,
    "image" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Authenticator" (
    "credentialID" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "credentialPublicKey" TEXT NOT NULL,
    "counter" INTEGER NOT NULL,
    "credentialDeviceType" TEXT NOT NULL,
    "credentialBackedUp" BOOLEAN NOT NULL,
    "transports" TEXT,

    PRIMARY KEY ("userId", "credentialID"),
    CONSTRAINT "Authenticator_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Pizza" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "smallPrice" INTEGER NOT NULL,
    "mediumPrice" INTEGER NOT NULL,
    "largePrice" INTEGER NOT NULL,
    "baseId" TEXT NOT NULL,
    "cheeseId" TEXT,
    "sauceId" TEXT,
    "stock" INTEGER NOT NULL DEFAULT 50,
    "imageSource" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Pizza_baseId_fkey" FOREIGN KEY ("baseId") REFERENCES "Base" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Pizza_cheeseId_fkey" FOREIGN KEY ("cheeseId") REFERENCES "Cheese" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Pizza_sauceId_fkey" FOREIGN KEY ("sauceId") REFERENCES "Sauce" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Base" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "availableQuantity" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Cheese" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "availableQuantity" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Sauce" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "availableQuantity" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Veggie" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "availableQuantity" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_PizzaToVeggie" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_PizzaToVeggie_A_fkey" FOREIGN KEY ("A") REFERENCES "Pizza" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_PizzaToVeggie_B_fkey" FOREIGN KEY ("B") REFERENCES "Veggie" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "Authenticator_credentialID_key" ON "Authenticator"("credentialID");

-- CreateIndex
CREATE UNIQUE INDEX "Base_name_key" ON "Base"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Cheese_name_key" ON "Cheese"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Sauce_name_key" ON "Sauce"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Veggie_name_key" ON "Veggie"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_PizzaToVeggie_AB_unique" ON "_PizzaToVeggie"("A", "B");

-- CreateIndex
CREATE INDEX "_PizzaToVeggie_B_index" ON "_PizzaToVeggie"("B");
