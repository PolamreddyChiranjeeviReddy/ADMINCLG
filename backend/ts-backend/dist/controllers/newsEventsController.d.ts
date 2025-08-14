import { Request, Response } from 'express';
export declare const createEvent: (req: Request, res: Response) => Promise<void>;
export declare const getAllEvents: (_req: Request, res: Response) => Promise<void>;
export declare const updateEvent: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteEvent: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=newsEventsController.d.ts.map