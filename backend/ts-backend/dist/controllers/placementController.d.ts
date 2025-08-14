import { Request, Response } from 'express';
export declare const createPlacement: (req: Request, res: Response) => Promise<void>;
export declare const getAllPlacements: (_req: Request, res: Response) => Promise<void>;
export declare const updatePlacement: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deletePlacement: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=placementController.d.ts.map