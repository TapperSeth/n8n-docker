import { INodeExecutionData, INodeType, INodeTypeDescription, IExecuteFunctions } from 'n8n-workflow';
export declare class floor implements INodeType {
    description: INodeTypeDescription;
    execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]>;
}
