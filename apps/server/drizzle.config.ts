import type { Config } from 'drizzle-kit';

export default {
  schema: './src/drizzle/schema.ts',
  driver: 'pg',
  dbCredentials: {
    connectionString: `postgresql://postgres:0WFCzc3YgNe0VSXAvJtW@containers-us-west-91.railway.app:7695/railway`,
  },
} as Config;
