// import { Request } from 'express';

// export interface MulterRequest extends Request {
//     files?: {
//         [fieldname: string]: Express.Multer.File[];
//     };
// }

import { Request } from 'express';
import multer from 'multer';

export interface MulterFile extends Express.Multer.File {
    filename: string;
}

export interface MulterRequest extends Request {
    files?: {
        [fieldname: string]: MulterFile[];
    };
}