import { Request, Response } from "express";
export declare function sendOtpEmail(toEmail: string, otp: string): Promise<void>;
export declare const registerUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const loginUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const seedAdmin: (req: Request, res: Response) => Promise<void>;
export declare const sendOtp: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const verifyOtp: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const resetPassword: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=userController.d.ts.map