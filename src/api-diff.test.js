//@ts-ignore
var newSpec = require('./openapis/newSpec.json');
var oldSpec = require('./openapis/oldSpec.json');
var openapiDiff = require('openapi-diff');
//test('compare newSpec with oldSpec', async () => {
var result = await openapiDiff.diffSpecs({
    sourceSpec: {
        content: JSON.stringify(newSpec),
        //location: './openapis/newSpec.json',
        format: 'openapi3'
    },
    destinationSpec: {
        content: JSON.stringify(oldSpec),
        //location: './openapis/oldSpec.json',
        format: 'openapi3'
    }
});
console.log(result);
console.log("# Breaking Changes\n");
//@ts-ignore
result.breakingDifferences.forEach(function (item) {
    console.log(item);
    if (item.action === "remove") {
        console.log("Removed the following items:");
        //@ts-ignore
        item.sourceSpecEntityDetails.forEach(function (changeItem) {
            Object.entries(changeItem.value).forEach(function (_a) {
                var httpMethod = _a[0], value = _a[1];
                console.log("Removed ".concat(httpMethod, " method from endpoint ").concat(changeItem.location));
            });
        });
    }
    console.log("%s", item.action);
});
console.log("# Non Breaking Changes\n");
//@ts-ignore
result.nonBreakingDifferences.forEach(function (item) {
    if (item.action === "add") {
        //@ts-ignore
        item.destinationSpecEntityDetails.forEach(function (changeItem) {
            Object.entries(changeItem.value).forEach(function (_a) {
                var httpMethod = _a[0], value = _a[1];
                console.log("Added ".concat(httpMethod, " method to endpoint ").concat(changeItem.location));
            });
            console.log(changeItem);
        });
    }
    console.log("%s", item.action);
});
//}
//expect(true).toBe(false);
//});
