/**
 * Foodie API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface Offer {
  readonly id?: number;
  title?: string;
  description?: string;
  category?: CategoryEnum;
  city?: CityEnum;
  distance?: string;
  delivery_date?: string;
  photo_url?: string;
  user_id: number;
}
export type CategoryEnum = 'Food' | 'Drinks' | 'Plants';
export const CategoryEnum = {
  Food: 'Food' as CategoryEnum,
  Drinks: 'Drinks' as CategoryEnum,
  Plants: 'Plants' as CategoryEnum,
};
export type CityEnum = 'Warsaw' | 'Wroclaw' | 'Cracow' | 'Lodz' | 'Szczecin';
export const CityEnum = {
  Warsaw: 'Warsaw' as CityEnum,
  Wroclaw: 'Wroclaw' as CityEnum,
  Cracow: 'Cracow' as CityEnum,
  Lodz: 'Lodz' as CityEnum,
  Szczecin: 'Szczecin' as CityEnum,
};
