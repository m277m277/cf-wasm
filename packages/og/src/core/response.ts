import type { ReactNode } from 'react';
import { CONTAINER } from './constants';
import { type PngResult, type RenderOptions, render, type SvgResult } from './render';
import type { VNode } from './satori';
import type { MayBePromise, OnlyProps } from './types';

/** Base response options */
export interface BaseResponseOptions extends OnlyProps<ResponseInit, 'headers' | 'status' | 'statusText' | 'cf'> {
  format?: 'svg' | 'png';
}

/** An interface representing options for BaseResponse */
export interface ImageResponseOptions extends RenderOptions, BaseResponseOptions {}

/** Base response class */
export class BaseResponse extends Response {
  constructor(input: () => MayBePromise<[ReactNode | VNode, RenderOptions | undefined]>, options: BaseResponseOptions = {}) {
    const isSvg = options?.format === 'svg';
    const result = new ReadableStream({
      start(controller) {
        Promise.resolve(input())
          .then(([element, renderOptions]): Promise<SvgResult | PngResult> => {
            const renderer = render(element, renderOptions);
            return isSvg ? renderer.asSvg() : renderer.asPng();
          })
          .then(({ image }) => {
            const bytes = typeof image === 'string' ? CONTAINER.encoder.encode(image) : image;
            controller.enqueue(bytes);
            controller.close();
          })
          .catch((e) => {
            controller.error(e);
          });
      },
    });
    const headers = new Headers(options?.headers);
    if (!headers.has('Cache-Control')) {
      headers.set('Cache-Control', 'public, immutable, no-transform, max-age=31536000');
    }
    headers.set('Content-Type', isSvg ? 'image/svg+xml' : 'image/png');
    const responseInit: ResponseInit = {
      headers,
      status: options?.status,
      statusText: options?.statusText,
    };
    if (options && typeof options === 'object') {
      // Add `cf` options if provided
      if ('cf' in options) {
        Object.assign(responseInit, { cf: options.cf });
      }
    }
    super(result, responseInit);
  }
}

/** A class for rendering {@link ReactNode} to image as {@link Response} */
export class ImageResponse extends BaseResponse {
  /**
   * Creates an instance of {@link ImageResponse}
   *
   * @param element The {@link ReactNode}
   * @param options The {@link ImageResponseOptions}
   */
  constructor(element: ReactNode | VNode, options?: ImageResponseOptions) {
    super(() => [element, options], options);
  }
}
