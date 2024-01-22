"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRequest = void 0;
const n8n_workflow_1 = require("n8n-workflow");
class getRequest {
    constructor() {
        this.description = {
            displayName: "getRequest",
            name: "getRequest",
            group: ['transform'],
            version: 1,
            description: "get request to a url",
            defaults: {
                name: "getRequest",
            },
            inputs: ['main'],
            outputs: ['main'],
            properties: [
                {
                    displayName: "Parameter 1",
                    name: "url",
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
                const parameters = [this.getNodeParameter('url', itemIndex, '')];
                console.log(parameters);
                const func = eval('() => async function get(url){const resp = await fetch(url);const respJson = await resp.json(); return respJson};');
                console.log(1);
                console.log(await func());
                console.log(await func()(...parameters));
                output.push(await func()(...parameters));
                console.log(output);
                console.log(2);
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
exports.getRequest = getRequest;
//# sourceMappingURL=getRequest.node.js.map