import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        baseUrl: "http://lojaebac.ebaconline.art.br/",
        execTimeout: 8 * 1000,
    },
});
