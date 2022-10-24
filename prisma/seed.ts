import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: 'testemail@gmail.com',
      role: 'USER',
    },
  });
}

main()
  .catch(error => {
    console.error(error);
    throw new Error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
