import z from "zod";
import { loginUser } from "../schema/test";

type loginUserInputTS = z.infer<typeof loginUser>;

export type { loginUserInputTS };
