/**
 * @author hjl
 * @func 根据path判断是否在数组配置中
 * @params {path string}
 * @return boolean 
 */
export const isPathPartlyExisted = (path) => {
  let pathRes = path.split('/')
  if (pathRes[1] && pathRes[1] === 'home') return true
  return false
}