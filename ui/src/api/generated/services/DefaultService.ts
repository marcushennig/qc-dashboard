/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DefaultService {
    /**
     * Get Cosine
     * @param x Input value for cosine calculation
     * @returns number Successful Response
     * @throws ApiError
     */
    public static getCosineApiCosineGet(
        x: number,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/cosine',
            query: {
                'x': x,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Surface
     * @returns number Successful Response
     * @throws ApiError
     */
    public static getSurfaceApiSurfaceGet(): CancelablePromise<Array<Array<number>>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/surface',
        });
    }
}
