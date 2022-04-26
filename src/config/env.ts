interface Config {
    jwtSecret: string;
    databaseURL: string;
}

export const config: Config = {
    jwtSecret: process.env.JWT_SECRET,
    databaseURL: process.env.DATABASE_URL,
};
