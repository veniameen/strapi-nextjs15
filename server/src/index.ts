import fs from 'fs';
import path from 'path';
import { Strapi } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }: { strapi: Strapi }) {
    const router = strapi.server.router;
    router.get('/', async (ctx, next) => {
      const indexPath = path.join(strapi.dirs.static.public, 'index.html');
      if (fs.existsSync(indexPath)) {
        ctx.type = 'html';
        ctx.body = fs.createReadStream(indexPath);
      } else {
        await next();
      }
    });
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }: { strapi: Strapi }) {},
};