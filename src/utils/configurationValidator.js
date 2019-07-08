/**
 * 验证多环境应用配置是否完整
 * @param configs
 *  eg: {
 *    dev: {},
 *    prod: {},
 *    test: {}
 *  }
 * @return <Array> invalid keys
 */
export default function configurationValidator (configs) {
    const envs = Object.keys(configs)
    const configKeys = Array.from(new Set(envs.map(env => Object.keys(configs[env]))
        .reduce((prev, next) => prev.concat(next), [])))
    const invalidKeys = []
    configKeys.forEach(key => {
        for (let index = 0; index < envs.length; index++) {
            const env = envs[index]
            if (!(key in configs[env])) {
                invalidKeys.push({
                    key,
                    env
                })
            }
        }
    })
    return invalidKeys
}
