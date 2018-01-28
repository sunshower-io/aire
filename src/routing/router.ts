import {RouteConfig} from "aurelia-router";

export class StructureAwareRouter {

    protected routeConfig(cfgs: RouteConfig[]) : RouteRelationship {
        return StructureAwareRouter.routeConfig(cfgs);
    }
    
    
    protected children(parent: RouteConfig[], path: string): RouteConfig[] {
        return StructureAwareRouter.children(parent, path);
    }
    
    hasAnyChildren(parent: RouteConfig[]) : boolean {
        return StructureAwareRouter.hasAnyChildren(parent);
    }
    
    hasChildren(parent: RouteConfig[], path: string) : boolean {
        return StructureAwareRouter.hasChildren(parent, path);
    }
}


export module StructureAwareRouter {

    const mappings: Map<RouteConfig[], Map<string, RouteConfig[]>> =
        new Map<RouteConfig[], Map<string, RouteConfig[]>>();

    export function hasAnyChildren(parent: RouteConfig[]) {
        let p = mappings.get(parent);
        return !!p;
    }
    
    export function hasChildren(parent: RouteConfig[], path: string) : boolean {
        let p = mappings.get(parent);
        if(p) {
            let c = p.get(path);
            return !!c;
        }
        return false;
    }

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
        return new Relationship(cfgs);
    }

    class Relationship {
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

export interface RouteRelationship {

    isChildOf(parent: RouteConfig[], path: string): void;
}


