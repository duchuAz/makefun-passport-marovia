import { copyFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const artifact = join(here, "entry.png");

const destination = process.env.OUTPUT_DIR ?? "/output";
await mkdir(destination, { recursive: true });
await copyFile(artifact, join(destination, "entry.png"));

console.log(`copied entry.png -> ${join(destination, "entry.png")}`);
