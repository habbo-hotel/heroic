import Database from  '../../server'
export default class Model extends Database.Model {

  get tableName () {
    return 'cms_store_packages'
  }

}
