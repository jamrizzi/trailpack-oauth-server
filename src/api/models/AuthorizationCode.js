import Model from 'trails/model';

export default class AuthorizationCode extends Model {
  static config(app, orm) {
    if (!app) throw new Error("'app' not defined");
    const { AuthorizationCode } = require(`./${
      app.config.database.orm
    }`).default;
    return AuthorizationCode.config(app, orm);
  }

  static schema(app, orm) {
    if (!app) throw new Error("'app' not defined");
    const { AuthorizationCode } = require(`./${
      app.config.database.orm
    }`).default;
    return AuthorizationCode.schema(app, orm);
  }
}
