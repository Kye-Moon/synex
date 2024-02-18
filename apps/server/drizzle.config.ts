import type { Config } from 'drizzle-kit';

export default {
  schema: './src/drizzle/schema.ts',
  driver: 'pg',
  dbCredentials: {
    connectionString: `postgresql://postgres:Bd2ca4f342fFG-BB*GeeecGaEe63*5EA@roundhouse.proxy.rlwy.net:39289/railway`,
  },
} as Config;
