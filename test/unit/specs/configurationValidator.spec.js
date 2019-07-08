import configurationValidator from '@/utils/configurationValidator'

describe('configurationValidator', () => {
    it('validate', () => {
        const configs = {
            prod: {
                version: 1
            },
            test: {
                type: 2
            },
            dev: {
                version: 2
            }
        }
        const result = [
            {
                key: 'version',
                env: 'test'
            },
            {
                key: 'type',
                env: 'prod'
            },
            {
                key: 'type',
                env: 'dev'
            }
        ]

        expect(configurationValidator(configs)).toEqual(result)
    })
})
