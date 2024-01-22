import { INodeExecutionData, INodeType, INodeTypeDescription, IExecuteFunctions } from 'n8n-workflow';
export declare class sum implements INodeType {
    description: INodeTypeDescription;
    execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]>;
}
