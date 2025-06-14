import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    // Bersihkan data lama
    await prisma.$executeRawUnsafe(`SET FOREIGN_KEY_CHECKS = 0`);
    await prisma.products.deleteMany();
    await prisma.shop.deleteMany();
    await prisma.users.deleteMany();
    await prisma.$executeRawUnsafe(`SET FOREIGN_KEY_CHECKS = 1`);

    for (let i = 1; i <= 20; i++) {
        const username = faker.internet.userName();
        const email = faker.internet.email();
        const rawPassword = 'password123';
        const hashedPassword = await bcrypt.hash(rawPassword, 10);

        // Buat user
        const user = await prisma.users.create({
            data: {
                username,
                email,
                password: hashedPassword,
                createdAt: new Date(),
            },
        });

        // Buat shop milik user
        const shop = await prisma.shop.create({
            data: {
                nama: `Toko ${faker.word.words(1)}`,
                deskripsi: faker.lorem.sentence(),
                ownerId: user.id,
                createdAt: new Date(),
            },
        });

        // Buat 2 produk per shop
        for (let j = 1; j <= 2; j++) {
            await prisma.products.create({
                data: {
                    nama: `${faker.commerce.product()} ${faker.commerce.productAdjective()}`,
                    deskripsi: faker.lorem.paragraph(),
                    harga: 1000 * (j + i),
                    stok: 10 * j,
                    shopId: shop.id,
                    createdAt: new Date(),
                },
            });
        }
    }

    console.log('✅ Seeder selesai. Data berhasil dimasukkan.');
}

main()
    .catch((e) => {
        console.error('❌ Error saat seeding:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

