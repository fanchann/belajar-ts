import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function main() {
    // Hapus data lama (optional, hati-hati di production)
    await prisma.refresh_tokens.deleteMany();
    await prisma.products.deleteMany();
    await prisma.shop.deleteMany();
    await prisma.users.deleteMany();

    const users = [];
    const shops = [];
    const products = [];

    for (let i = 1; i <= 10; i++) {
        const hashedPassword = await bcrypt.hash(`password${i}`, 10);

        const user = await prisma.users.create({
            data: {
                username: `user${i}`,
                email: `user${i}@example.com`,
                password: hashedPassword,
            },
        });
        users.push(user);

        const shop = await prisma.shop.create({
            data: {
                nama: `Toko ${i}`,
                deskripsi: `Deskripsi untuk toko ${i}`,
                ownerId: user.id,
            },
        });
        shops.push(shop);

        for (let j = 1; j <= 2; j++) {
            const product = await prisma.products.create({
                data: {
                    nama: `Produk ${j} dari Toko ${i}`,
                    deskripsi: `Deskripsi produk ${j} milik toko ${i}`,
                    harga: 1000 * j * i,
                    stok: 10 * j,
                    shopId: shop.id,
                },
            });
            products.push(product);
        }
    }

    console.log(`✅ Seeding selesai: ${users.length} users, ${shops.length} shops, ${products.length} products`);
}

main()
    .catch((e) => {
        console.error('❌ Error saat seeding:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
