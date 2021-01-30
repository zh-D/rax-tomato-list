/* md5: 2a53038b0d84b63f04dc592ed48b63eb */
/* Rap仓库id: 276879 */
/* Rapper版本: 1.1.6 */
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

/**
 * 本文件由 Rapper 同步 Rap 平台接口，自动生成，请勿修改
 * Rap仓库 地址: http://rap2.taobao.org/repository/editor?id=276879
 */

import {createFetch, IModels} from './request'
import * as commonLib from 'rap/runtime/commonLib'

const {defaultFetch} = commonLib
let fetch = createFetch({}, {fetchType: commonLib.FetchType.BASE})

export const overrideFetch = (fetchConfig: commonLib.RequesterOption) => {
  fetch = createFetch(fetchConfig, {fetchType: commonLib.FetchType.AUTO})
}
export {fetch, createFetch, defaultFetch}
export type Models = IModels
