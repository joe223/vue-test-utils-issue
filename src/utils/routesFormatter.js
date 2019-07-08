export default function routesFormatter (routes, idxStack = []) {
    return routes.map((route, index) => {
        const newIdxStack = idxStack.concat(index)

        if (route.children && route.children.length) {
            route.children = routesFormatter(route.children, newIdxStack)
        }
        if (route.meta) {
            route.meta.$idx = newIdxStack.join('-')
        }
        return route
    })
}
