import Mocha from "mocha";
import path from "path";
import fs from "fs";
import chalk from "chalk";

const mocha = new Mocha();

function getTestFiles(dir: string): string[] {
  let testFiles: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      testFiles = testFiles.concat(getTestFiles(fullPath));
    } else if (entry.isFile() && entry.name === "test.ts") {
      testFiles.push(fullPath);
    }
  }

  return testFiles;
}

const testFiles = getTestFiles(__dirname);

testFiles.forEach(file => mocha.addFile(file));

mocha.run(failures => {
    if (failures === 0) {
      console.log(chalk.green("\n✅ All test have passed!"));
    } else {
      console.log(chalk.red(`\n❌ ${failures} tests didn't pass`));
    }
  })
  .on("pass", test => console.log(chalk.green(`✔ ${test.fullTitle()}`)))
  .on("fail", (test, err) => console.log(chalk.red(`✖ ${test.fullTitle()}: ${err.message}`)));