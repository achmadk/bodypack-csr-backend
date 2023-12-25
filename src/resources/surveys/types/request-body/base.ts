export interface ISurveyRequestBody {
  phone_number: string
  retail_assistance_service: number
  product_availability: number
  shop_display_atmosphere: number
  overall_shopping_experience: number
  /**
   * @default null
   */
  suggestions?: string
}
