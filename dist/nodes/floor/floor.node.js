"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.floor = void 0;
const n8n_workflow_1 = require("n8n-workflow");
class floor {
    constructor() {
        this.description = {
            displayName: "floor",
            name: "floor",
            group: ['transform'],
            version: 1,
            description: "floor",
            defaults: {
                name: "floor",
            },
            inputs: ['main'],
            outputs: ['main'],
            properties: [
                {
                    displayName: "Parameter 1",
                    name: "d",
                    type: 'string',
                    default: '',
                    placeholder: 'Placeholder value',
                    description: 'The description text',
                }
            ],
        };
    }
    async execute() {
        const items = this.getInputData();
        console.log(items);
        const output = [];
        for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
            try {
                const parameters = [this.getNodeParameter('d', itemIndex, '')];
                console.log(parameters);
                const func = eval('() => function floor(d){return Math.floor(d)};');
                console.log(await func());
                console.log(await func()(...parameters));
                output.push(await func()(...parameters));
            }
            catch (error) {
                if (this.continueOnFail()) {
                    items.push({ json: this.getInputData(itemIndex)[0].json, error, pairedItem: itemIndex });
                    return this.prepareOutputData(items);
                }
                else {
                    if (error.context) {
                        error.context.itemIndex = itemIndex;
                        throw error;
                    }
                    throw new n8n_workflow_1.NodeOperationError(this.getNode(), error, {
                        itemIndex,
                    });
                }
            }
        }
        console.log(output);
        return [this.helpers.returnJsonArray(output)];
    }
}
exports.floor = floor;
//# sourceMappingURL=floor.node.js.map