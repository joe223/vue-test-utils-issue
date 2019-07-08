import routesFormatter from '@/utils/routesFormatter'

describe('routesFormatter', () => {
    it('return routes with $idx property', () => {
        const routes = [
            {
                path: '/',
                meta: {
                    title: 'hello'
                },
                children: [
                    {
                        path: 'a',
                        meta: {
                            title: 'world'
                        },
                        children: []
                    }
                ]
            }
        ]
        const result = [
            {
                path: '/',
                meta: {
                    title: 'hello',
                    $idx: '0'
                },
                children: [
                    {
                        path: 'a',
                        meta: {
                            title: 'world',
                            $idx: '0-0'
                        },
                        children: []
                    }
                ]
            }
        ]

        expect(routesFormatter(routes)).toEqual(result)
    })
})
