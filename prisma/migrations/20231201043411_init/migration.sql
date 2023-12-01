-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "almacenamiento" INTEGER NOT NULL,
    "memoria" INTEGER NOT NULL,
    "procesador" TEXT NOT NULL,
    "resolucion" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
