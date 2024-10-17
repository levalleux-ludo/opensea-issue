async function main() {
  console.log("Hello World");
};

main().then(() => {
  console.log("Success");
}).catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
