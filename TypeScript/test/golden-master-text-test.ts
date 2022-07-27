import { printSystem } from "./items";
import { SystemImpl } from "./SystemOut";

export let days: number = 2;
if (process.argv.length > 2) {
  days = +process.argv[2];
}

printSystem(days, new SystemImpl());
