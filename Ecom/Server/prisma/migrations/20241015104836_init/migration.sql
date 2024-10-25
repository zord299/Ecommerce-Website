-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Products" (
    "pid" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "src" TEXT NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("pid")
);

-- CreateTable
CREATE TABLE "CustomerDetails" (
    "cid" SERIAL NOT NULL,
    "card_number" TEXT NOT NULL,
    "expiry_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CustomerDetails_pkey" PRIMARY KEY ("cid")
);

-- CreateTable
CREATE TABLE "CartItems" (
    "id" SERIAL NOT NULL,
    "cid" INTEGER NOT NULL,

    CONSTRAINT "CartItems_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CartItems" ADD CONSTRAINT "CartItems_cid_fkey" FOREIGN KEY ("cid") REFERENCES "CustomerDetails"("cid") ON DELETE RESTRICT ON UPDATE CASCADE;
