export const resolvers = {
  Query: {
    users: (_parent, _arguments, context) => {
      return context.prisma.user.findMany();
    }
  },
};
