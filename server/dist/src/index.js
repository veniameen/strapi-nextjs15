"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
exports.default = {
    /**
     * An asynchronous register function that runs before
     * your application is initialized.
     *
     * This gives you an opportunity to extend code.
     */
    register({ strapi }) {
        const router = strapi.server.router;
        router.get('/', async (ctx, next) => {
            const indexPath = path_1.default.join(strapi.dirs.static.public, 'index.html');
            if (fs_1.default.existsSync(indexPath)) {
                ctx.type = 'html';
                ctx.body = fs_1.default.createReadStream(indexPath);
            }
            else {
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
    bootstrap({ strapi }) { },
};
