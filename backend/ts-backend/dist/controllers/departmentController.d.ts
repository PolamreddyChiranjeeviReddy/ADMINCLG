import { Request, Response } from 'express';
import { MulterRequest } from '../types/multer';
export declare const getDepartment: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getDepartmentByCode: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateDepartmentByCode: (req: MulterRequest, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const addDepartment: (req: MulterRequest, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteDepartment: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=departmentController.d.ts.map