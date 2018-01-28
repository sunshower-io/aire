import {RouteConfig} from "aurelia-router";

export class StructureAwareRouter {

    protected routeConfig(cfgs: RouteConfig[]) : StructureAwareRouter.RouteRelationship {
        return StructureAwareRouter.routeConfig(cfgs);
    }
    
    
    protected children(parent: RouteConfig[], path: string): RouteConfig[] {
        return StructureAwareRouter.children(parent, path);
    }
}


export module StructureAwareRouter {

    const mappings: Map<RouteConfig[], Map<string, RouteConfig[]>> =
        new Map<RouteConfig[], Map<string, RouteConfig[]>>();


    export function children(parent: RouteConfig[], path: string): RouteConfig[] {
        let children = mappings.get(parent);
        if(!children) {
            throw new Error("No children of route found with path: " + path);
        }
        let p = children.get(path) ;
        if(!p) {
            throw new Error("No children of route found with path: " + path);
        }
        return p;
    }


    export function routeConfig(cfgs: RouteConfig[]): RouteRelationship {
        return new RouteRelationship(cfgs);
    }


    export class RouteRelationship {
        private path: string;
        private parent: RouteConfig[];

        constructor(private child: RouteConfig[]) {

        }

        isChildOf(parent: RouteConfig[], path: string): void {
            this.path = path;
            this.parent = parent;

            let childMappings = mappings.get(parent);
            if (!childMappings) {
                childMappings = new Map<string, RouteConfig[]>();
                mappings.set(parent, childMappings);
            }
            childMappings.set(path, this.child);
        }
    }
}




