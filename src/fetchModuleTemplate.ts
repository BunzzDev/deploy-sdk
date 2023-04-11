import { httpClient } from './utils/httpClient'; 
import { ModuleTemplate } from './deployContract';

type Response = {
  Message: string;
  ok: boolean;
  data: ModuleTemplate;
}

export const fetchModuleTemplate = async (moduleTemplateId: string): Promise<Response> => {
  const endpoint = `moduleTemplates/${moduleTemplateId}`;

  try {
    return await httpClient.get<Response>(endpoint);
  } catch (err) {
    console.log(err);
    throw new Error(`Failed to fetch module template: ${err.message}`);
  }
};
