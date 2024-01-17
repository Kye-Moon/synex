import type { Config } from 'drizzle-kit';

export default {
  schema: './src/drizzle/schema.ts',
  driver: 'pg',
  dbCredentials: {
    connectionString: `postgresql://postgres:3bCAcffbgEgGgCbAd6fFGfc4-Aa-5fC*@monorail.proxy.rlwy.net:19113/railway`,
  },
} as Config;
