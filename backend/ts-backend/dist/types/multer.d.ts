import { Request } from 'express';
export interface MulterFile extends Express.Multer.File {
    filename: string;
}
export interface MulterRequest extends Request {
    files?: {
        [fieldname: string]: MulterFile[];
    };
}
//# sourceMappingURL=multer.d.ts.map