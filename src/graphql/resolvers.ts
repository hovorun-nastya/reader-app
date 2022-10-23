export const resolvers = {
  Query: {
    users: (_parent: any, _arguments: any, context: { prisma: { user: { findMany: () => any; }; }; }) => {
      return context.prisma.user.findMany();
    }
  },
};
