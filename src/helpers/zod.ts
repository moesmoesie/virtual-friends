import { any } from "zod";

export function fallback<T>(value: T) {
  return any().transform(() => value);
}
