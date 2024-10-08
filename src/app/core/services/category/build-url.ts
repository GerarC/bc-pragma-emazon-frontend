import { HttpParams } from "@angular/common/http";
export class BuildUrl {
    /**
     * Create a HttpParams object
     * @param args {unknown[]}
     * @returns {HttpParams}
     */
    static buildParams(...args: unknown[]): HttpParams {
        let params = new HttpParams();
        
        args.forEach(param => {
            if (param && typeof param === 'object' && !Array.isArray(param)) {
                Object.keys(param).forEach((key) => {
                    params = params.append(key, (param as Record<string, any>)[key]);
                });
            }
        });
        
		console.log(params)
        return params;
    }
}