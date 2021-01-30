/* md5: 28bf0ca53e50d2fb2ee655b9aadf7062 */
/* Rap仓库id: 276879 */
/* Rapper版本: 1.1.6 */
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

/**
 * 本文件由 Rapper 同步 Rap 平台接口，自动生成，请勿修改
 * Rap仓库 地址: http://rap2.taobao.org/repository/editor?id=276879
 */

import * as commonLib from 'rap/runtime/commonLib'
import * as reduxLib from 'rap/runtime/reduxLib'
import {RequestTypes} from './redux'

export interface IModels {
  /**
   * 接口名：获取TODO列表
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276879&mod=438584&itf=1870135
   */
  'GET/todo/getList': {
    Req: {
      /**
       * 传入id时，返回指定id事务的数据（用于单个数据编辑修改时使用）
       */
      id?: string
    }
    Res: {
      /**
       * 业务逻辑是否成功
       */
      success: boolean
      /**
       * 业务反馈信息
       */
      message: string
      /**
       * 列表数据
       */
      data: {
        /**
         * 唯一标识
         */
        id: number
        /**
         * 事务名称
         */
        name: string
        /**
         * 事务创建时间
         */
        createDate: string
        /**
         * 事务优先级
         */
        priority: number
        /**
         * 事务是否完成
         */
        isFinish: boolean
      }[]
    }
  }

  /**
   * 接口名：完成TODO
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276879&mod=438584&itf=1870286
   */
  'GET/todo/finish': {
    Req: {
      id: number
      /**
       * 完成的时间
       */
      endDate: string
    }
    Res: {
      success: boolean
      message: string
    }
  }

  /**
   * 接口名：删除TODO
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276879&mod=438584&itf=1870190
   */
  'DELETE/todo': {
    Req: {
      id: number
    }
    Res: {
      success: boolean
      message: string
    }
  }

  /**
   * 接口名：添加TODO
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276879&mod=438584&itf=1870191
   */
  'PUT/todo': {
    Req: {
      name: string
      createDate: string
      priority?: number
    }
    Res: {
      success: boolean
      message: string
    }
  }

  /**
   * 接口名：收藏
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276879&mod=438584&itf=1870197
   */
  'POST/todo/fav': {
    Req: {
      id: number
    }
    Res: {
      success: boolean
      message: string
    }
  }

  /**
   * 接口名：获取可视化数据
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276879&mod=438584&itf=1870199
   */
  'GET/todo/getHeat': {
    Req: {}
    Res: {
      success: boolean
      message: string
      data: {
        value: number
        tag: number
        endDate: string
        name: string
        id: number
        createDate: string
      }[]
    }
  }

  /**
   * 接口名：修改TODO
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276879&mod=438584&itf=1870291
   */
  'POST/todo/edit': {
    Req: {
      name: string
      createDate: string
    }
    Res: {
      success: boolean
      message: string
    }
  }
}

type ResSelector<T> = T

export interface IResponseTypes {
  'GET/todo/getList': ResSelector<IModels['GET/todo/getList']['Res']>
  'GET/todo/finish': ResSelector<IModels['GET/todo/finish']['Res']>
  'DELETE/todo': ResSelector<IModels['DELETE/todo']['Res']>
  'PUT/todo': ResSelector<IModels['PUT/todo']['Res']>
  'POST/todo/fav': ResSelector<IModels['POST/todo/fav']['Res']>
  'GET/todo/getHeat': ResSelector<IModels['GET/todo/getHeat']['Res']>
  'POST/todo/edit': ResSelector<IModels['POST/todo/edit']['Res']>
}

export function createFetch(fetchConfig: commonLib.RequesterOption, extraConfig?: {fetchType?: commonLib.FetchType}) {
  if (!extraConfig || !extraConfig.fetchType) {
    console.warn(
      'Rapper Warning: createFetch API will be deprecated, if you want to customize fetch, please use overrideFetch instead, since new API guarantees better type consistency during frontend lifespan. See detail https://www.yuque.com/rap/rapper/overridefetch'
    )
  }
  const rapperFetch = commonLib.getRapperRequest(fetchConfig)
  const sendRapperFetch = (modelName: keyof typeof RequestTypes, requestParams: commonLib.IUserFetchParams) => {
    const {extra} = requestParams
    if (extra && extra.type === 'normal') {
      return rapperFetch(requestParams)
    } else {
      const action = {
        type: '$$RAPPER_REQUEST',
        payload: {...requestParams, modelName, types: RequestTypes[modelName]},
      }
      return reduxLib.dispatchAction(action, rapperFetch)
    }
  }

  return {
    /**
     * 接口名：获取TODO列表
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=276879&mod=438584&itf=1870135
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/todo/getList': (req?: IModels['GET/todo/getList']['Req'], extra?: commonLib.IExtra) => {
      return sendRapperFetch('GET/todo/getList', {
        url: '/todo/getList',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/todo/getList']>
    },

    /**
     * 接口名：完成TODO
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=276879&mod=438584&itf=1870286
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/todo/finish': (req?: IModels['GET/todo/finish']['Req'], extra?: commonLib.IExtra) => {
      return sendRapperFetch('GET/todo/finish', {
        url: '/todo/finish',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/todo/finish']>
    },

    /**
     * 接口名：删除TODO
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=276879&mod=438584&itf=1870190
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'DELETE/todo': (req?: IModels['DELETE/todo']['Req'], extra?: commonLib.IExtra) => {
      return sendRapperFetch('DELETE/todo', {
        url: '/todo',
        method: 'DELETE',
        params: req,
        extra,
      }) as Promise<IResponseTypes['DELETE/todo']>
    },

    /**
     * 接口名：添加TODO
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=276879&mod=438584&itf=1870191
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'PUT/todo': (req?: IModels['PUT/todo']['Req'], extra?: commonLib.IExtra) => {
      return sendRapperFetch('PUT/todo', {
        url: '/todo',
        method: 'PUT',
        params: req,
        extra,
      }) as Promise<IResponseTypes['PUT/todo']>
    },

    /**
     * 接口名：收藏
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=276879&mod=438584&itf=1870197
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/todo/fav': (req?: IModels['POST/todo/fav']['Req'], extra?: commonLib.IExtra) => {
      return sendRapperFetch('POST/todo/fav', {
        url: '/todo/fav',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/todo/fav']>
    },

    /**
     * 接口名：获取可视化数据
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=276879&mod=438584&itf=1870199
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/todo/getHeat': (req?: IModels['GET/todo/getHeat']['Req'], extra?: commonLib.IExtra) => {
      return sendRapperFetch('GET/todo/getHeat', {
        url: '/todo/getHeat',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/todo/getHeat']>
    },

    /**
     * 接口名：修改TODO
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=276879&mod=438584&itf=1870291
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/todo/edit': (req?: IModels['POST/todo/edit']['Req'], extra?: commonLib.IExtra) => {
      return sendRapperFetch('POST/todo/edit', {
        url: '/todo/edit',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/todo/edit']>
    },
  }
}
