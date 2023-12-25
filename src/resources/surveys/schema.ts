import Joi from 'joi'

import { ISurveyRequestBody } from './types/request-body/base'

export const surveySchema = Joi.object<ISurveyRequestBody>({
  phone_number: Joi.string().required(),
  retail_assistance_service: Joi.number().required(),
  product_availability: Joi.number().required(),
  shop_display_atmosphere: Joi.number().required(),
  overall_shopping_experience: Joi.number().required(),
  suggestions: Joi.string().optional()
}).required()
