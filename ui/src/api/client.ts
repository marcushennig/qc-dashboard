import { DefaultService } from './generated';
import { OpenAPI } from './generated/core/OpenAPI';

// Set the base URL for the API
OpenAPI.BASE = import.meta.env.VITE_API_BASE_URL;
OpenAPI.TOKEN = () => import.meta.env.VITE_API_TOKEN || '';

/**
 * Wrapper Api client for interacting with the backend services.
 * This client provides methods to call various API endpoints.
 * Each method corresponds to a specific service and handles the request and response.
 * It also includes error handling and logging for better debugging.
 * @module Api
 */
export const Api = {
  
    /**
     * Compute the cosine of a number.
     * @param x number input
     * @returns Promise<number>
     * */
    async cosine(x: number): Promise<number> {
        try {
        const result = await DefaultService.getCosineApiCosineGet(x);
        console.log(`[Api.cosine] Result:`, result);
        return result;
        } catch (error) {
        console.error(`[Api.cosine] Error:`, error);
        throw error;
        }
    },
    
    /**
     * Get the surface data as a 2D array.
     * @returns Promise<number[][]>
     * */
    async surface(): Promise<number[][]> {
        try {
        const result = await DefaultService.getSurfaceApiSurfaceGet();
        console.log(`[Api.surface] Result:`, result);
        return result;
        } catch (error) {
        console.error(`[Api.surface] Error:`, error);
        throw error;
        }
    },
}