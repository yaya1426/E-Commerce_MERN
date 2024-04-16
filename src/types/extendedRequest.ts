import { Request } from "express";

export interface ExtendRequest extends Request {
  user?: any;
}
