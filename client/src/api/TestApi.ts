/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { CreateTestDto, UpdateDto } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class TestApi<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags test-api
   * @name TestApiControllerFindAll
   * @request GET:/test-api
   */
  testApiControllerFindAll = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/test-api`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags test-api
   * @name TestApiControllerCreateOne
   * @request POST:/test-api
   */
  testApiControllerCreateOne = (
    data: CreateTestDto,
    params: RequestParams = {},
  ) =>
    this.request<CreateTestDto, any>({
      path: `/test-api`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags test-api
   * @name TestApiControllerFindOne
   * @request GET:/test-api/{id}
   */
  testApiControllerFindOne = (id: string, params: RequestParams = {}) =>
    this.request<CreateTestDto, void>({
      path: `/test-api/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags test-api
   * @name TestApiControllerUpdateOne
   * @request PUT:/test-api/{id}
   */
  testApiControllerUpdateOne = (
    id: string,
    data: UpdateDto,
    params: RequestParams = {},
  ) =>
    this.request<CreateTestDto, void>({
      path: `/test-api/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags test-api
   * @name TestApiControllerRemoveOne
   * @request DELETE:/test-api/{id}
   */
  testApiControllerRemoveOne = (id: string, params: RequestParams = {}) =>
    this.request<CreateTestDto, void>({
      path: `/test-api/${id}`,
      method: "DELETE",
      format: "json",
      ...params,
    });
}
