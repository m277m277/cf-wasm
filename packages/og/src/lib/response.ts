import { render, type RenderOptions } from "./render";

export type ImageResponseOptions = RenderOptions & {
	format?: "svg" | "png";
} & ConstructorParameters<typeof Response>[1];

export default class ImageResponse extends Response {
	constructor(element: React.ReactElement, options?: ImageResponseOptions) {
		const isSvg = options?.format === "svg";
		const result = new ReadableStream({
			async start(controller) {
				const renderer = render(element, options);
				const result2 = (await (isSvg ? renderer.asSvg() : renderer.asPng()))
					.image;
				if (typeof result2 === "string") {
					controller.enqueue(new TextEncoder().encode(result2));
				} else {
					controller.enqueue(result2);
				}
				controller.close();
			}
		});
		const headers = new Headers(options?.headers);
		headers.set("Content-Type", isSvg ? "image/svg+xml" : "image/png");
		super(result, {
			headers,
			status: options?.status,
			statusText: options?.statusText
		});
	}
}