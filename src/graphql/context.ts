import { PrismaClient } from '@prisma/client';
import { MicroRequest } from 'apollo-server-micro/dist/types';
import { ServerResponse } from 'node:http';


import prisma from '../lib/prisma';

export type Context = {
  prisma: PrismaClient,
}
interface ContextKeys {
  request:  MicroRequest,
  response: ServerResponse
}
export async function createContext( { request, response }: ContextKeys): Promise<Context> {
  return {
    prisma,
  };
}
