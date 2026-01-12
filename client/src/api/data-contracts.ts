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

export interface CreateTestDto {
  /**
   * Id postu
   * @example 231
   */
  id: number;
  /**
   * Nazov postu
   * @example "Moj post"
   */
  title: string;
  /**
   * Obsah postu
   * @example "v tomto poste sa nachadza context"
   */
  content: string;
}

export interface UpdateDto {
  /**
   * Názov postu
   * @example "Aktualizovaný názov"
   */
  title?: string;
  /**
   * Obsah postu
   * @example "Aktualizovaný obsah."
   */
  content?: string;
}
