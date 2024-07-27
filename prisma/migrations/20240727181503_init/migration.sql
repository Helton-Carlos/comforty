-- CreateTable
CREATE TABLE "Products" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "beforePrice" INTEGER NOT NULL,
    "categorie" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "unid" INTEGER NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);
