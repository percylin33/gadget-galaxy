/*
  Warnings:

  - The primary key for the `Product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `almacenamiento` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `memoria` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `procesador` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `resolucion` on the `Product` table. All the data in the column will be lost.
  - Added the required column `brand` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descriotion` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `id` on the `Product` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Product" DROP CONSTRAINT "Product_pkey",
DROP COLUMN "almacenamiento",
DROP COLUMN "memoria",
DROP COLUMN "procesador",
DROP COLUMN "resolucion",
ADD COLUMN     "brand" INTEGER NOT NULL,
ADD COLUMN     "category" INTEGER NOT NULL,
ADD COLUMN     "descriotion" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "price" INTEGER NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "Product_pkey" PRIMARY KEY ("id");
