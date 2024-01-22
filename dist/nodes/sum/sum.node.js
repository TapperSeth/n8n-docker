"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = void 0;
const n8n_workflow_1 = require("n8n-workflow");
class sum {
    constructor() {
        this.description = {
            displayName: "sum",
            name: "sum",
            group: ['transform'],
            version: 1,
            description: "sim",
            defaults: {
                name: "sum",
            },
            inputs: ['main'],
            outputs: ['main'],
            properties: [
                {
                    displayName: "Parameter 1",
                    name: "a",
                    type: 'string',
                    default: '',
                    placeholder: 'Placeholder value',
                    description: 'The description text',
                },
                {
                    displayName: "Parameter 2",
                    name: "b",
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
                const parameters = [this.getNodeParameter('a', itemIndex, ''), this.getNodeParameter('b', itemIndex, '')];
                console.log(parameters);
                const func = eval('() => function sum(a,b){return a+b};');
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
exports.sum = sum;
//# sourceMappingURL=sum.node.js.map