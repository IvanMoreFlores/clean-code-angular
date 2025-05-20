import { Provider } from "@angular/core";
import { ProductsUseCase } from "../../application/use-cases/products.use-cases";
import { ProductsRepository } from "../../domain/repositories/products.repository";
import { ProductsApiRepository } from "../repositories/products.api.repository";

export const productProviders: Provider[] = [
    {
        provide: ProductsRepository,
        useClass: ProductsApiRepository,
    },
    {
        provide: ProductsUseCase,
        useClass: ProductsUseCase,
    }
];