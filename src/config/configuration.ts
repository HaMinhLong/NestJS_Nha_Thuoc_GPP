const int = (val: string | undefined, num: number): number =>
  val ? (isNaN(parseInt(val)) ? num : parseInt(val)) : num;

export default () => ({
  port: int(process.env.PORT, 10) || 3000,
  database: {
    host: process.env.DATABASE_HOST,
    port: int(process.env.DATABASE_PORT, 10) || 5432,
  },
});