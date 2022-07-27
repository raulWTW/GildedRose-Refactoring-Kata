export interface SystemOut {
  print(text: string);
  printEmptyLine();
}

export class SystemImpl implements SystemOut {
  print(text: string) {
    console.log(text);
  }

  printEmptyLine() {
    console.log();
  }
}
