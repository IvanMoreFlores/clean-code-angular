import { Provider } from "@angular/core";
import {LoginUseCase} from "../../application/use-cases/login.use-case";
import {AuthRepository} from "../../domain/repositories/auth.repository";
import {AuthApiRepository} from "../repositories/auth-api.repository";

export const authProviders: Provider[] = [
    {
        provide: AuthRepository,
        useClass: AuthApiRepository,
    },
    {
        provide: LoginUseCase,
        useClass: LoginUseCase,
    }
];