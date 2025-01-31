/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { WorkerEntrypoint } from 'cloudflare:workers';
import { Env } from '../worker-configuration';

export default class extends WorkerEntrypoint<Env> {
	async add(a: number, b: number): Promise<number> {
		await this.env.NOTIFY_WORKER.notify('Adding ' + a + ' and ' + b);
		return a + b;
	}

	override async fetch(request: Request): Promise<Response> {
		return new Response('Hello, world!');
	}
}
