"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.power = void 0;
const n8n_workflow_1 = require("n8n-workflow");
class power {
    constructor() {
        this.description = {
            displayName: "power",
            name: "power",
            group: ['transform'],
            version: 1,
            description: "raise a number to given power",
            defaults: {
                name: "power",
            },
            inputs: ['main'],
            outputs: ['main'],
            properties: [
                {
                    displayName: "Parameter 1",
                    name: "num",
                    type: 'string',
                    default: '',
                    placeholder: 'Placeholder value',
                    description: 'The description text',
                },
                {
                    displayName: "Parameter 2",
                    name: "pow",
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
                const parameters = [this.getNodeParameter('num', itemIndex, ''), this.getNodeParameter('pow', itemIndex, '')];
                console.log(parameters);
                const func = eval('() => function power(num, pow){return Math.pow(num, pow)};');
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
exports.power = power;
//# sourceMappingURL=power.node.js.map