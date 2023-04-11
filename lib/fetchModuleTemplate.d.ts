import { ModuleTemplate } from './deployContract';
type Response = {
    Message: string;
    ok: boolean;
    data: ModuleTemplate;
};
export declare const fetchModuleTemplate: (moduleTemplateId: string) => Promise<Response>;
export {};
