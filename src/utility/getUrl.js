const env = import.meta.env;

export default function getUrl() {
  if (env.PROD) {
    return env.VITE_PROD_SERVER_URL;
  }
  return env.VITE_DEV_SERVER_URL;
}
