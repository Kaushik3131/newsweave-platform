import { prisma } from "../lib/prisma";

async function main() {
  await prisma.user.create({
    data: {
      clerkUserId: "test_clerk_id",
    },
  });

  console.log("User created");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
