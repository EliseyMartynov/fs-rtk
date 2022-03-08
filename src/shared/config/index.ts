const getEnvVar = (key: string) => {
  if (import.meta.env[key] === undefined) {
    throw new Error(`Env variable ${key} is required`);
  }
  return import.meta.env[key] || "";
};

export const API_URL = getEnvVar("VITE_APP_API_URL");

export const NODE_ENV = getEnvVar("VITE_NODE_ENV");

export const isDevEnv = NODE_ENV === "development";
export const isProdEnv = NODE_ENV === "production";
