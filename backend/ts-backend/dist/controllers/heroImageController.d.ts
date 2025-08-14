import { Request, Response } from "express";
import { MulterRequest } from "../types/multer";
export declare const createHeroImage: (req: MulterRequest, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getHeroImages: (_req: Request, res: Response) => Promise<void>;
export declare const updateHeroImage: (req: MulterRequest, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteHeroImage: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=heroImageController.d.ts.map