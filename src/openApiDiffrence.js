const newSpec = require("./openapis/newSpec.json");
const oldSpec = require("./openapis/oldSpec.json");

const openapiDiff = require("openapi-diff");

const callThis = async () => {
  const result = await openapiDiff.diffSpecs({
    sourceSpec: {
      content: JSON.stringify(newSpec),
      //location: './openapis/newSpec.json',
      format: "openapi3",
    },
    destinationSpec: {
      content: JSON.stringify(oldSpec),
      //location: './openapis/oldSpec.json',
      format: "openapi3",
    },
  });
  //console.log(result);

  console.log("# Breaking Changes\n");
  //@ts-ignore
  result.breakingDifferences.forEach((item) => {
    if (item.action === "remove") {
      console.log("\n## Removed the following items:\n");
      //@ts-ignore
      item.sourceSpecEntityDetails.forEach((changeItem) => {
        Object.entries(changeItem.value).forEach(([httpMethod, value]) => {
          console.log(
            `- Removed ${httpMethod} method from endpoint ${changeItem.location}`
          );
        });
      });
    }
  });

  console.log("\n# Non Breaking Changes\n");
  //@ts-ignore
  result.nonBreakingDifferences.forEach((item) => {
    if (item.action === "add") {
      console.log("\n## Added the following items:\n");
      //@ts-ignore
      item.destinationSpecEntityDetails.forEach((changeItem) => {
        Object.entries(changeItem.value).forEach(([httpMethod, value]) => {
          console.log(
            `- Added ${httpMethod} method to endpoint ${changeItem.location}`
          );
        });
      });
    }
  });
};

callThis();
