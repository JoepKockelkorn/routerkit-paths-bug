import { TypedRoute } from "@routerkit/core";
export type TypedRoutes = {
    a: {
        root: TypedRoute<["/", "a"]>;
    };
    b: {
        root: TypedRoute<["/", "b"]>;
    };
};
