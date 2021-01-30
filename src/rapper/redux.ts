/* md5: 7e538a15bfd66635e5e599f88cd9c15f */
/* Rap仓库id: 276879 */
/* Rapper版本: 1.1.6 */
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

/**
 * 本文件由 Rapper 同步 Rap 平台接口，自动生成，请勿修改
 * Rap仓库 地址: http://rap2.taobao.org/repository/editor?id=276879
 */

import {useSelector} from 'react-redux'
import {IModels, IResponseTypes} from './request'
import * as reduxLib from 'rap/runtime/reduxLib'
import {fetch} from './index'

/** 请求types */
export const RequestTypes = {
  'GET/todo/getList': ['GET/todo/getList_REQUEST', 'GET/todo/getList_SUCCESS', 'GET/todo/getList_FAILURE'],

  'GET/todo/finish': ['GET/todo/finish_REQUEST', 'GET/todo/finish_SUCCESS', 'GET/todo/finish_FAILURE'],

  'DELETE/todo': ['DELETE/todo_REQUEST', 'DELETE/todo_SUCCESS', 'DELETE/todo_FAILURE'],

  'PUT/todo': ['PUT/todo_REQUEST', 'PUT/todo_SUCCESS', 'PUT/todo_FAILURE'],

  'POST/todo/fav': ['POST/todo/fav_REQUEST', 'POST/todo/fav_SUCCESS', 'POST/todo/fav_FAILURE'],

  'GET/todo/getHeat': ['GET/todo/getHeat_REQUEST', 'GET/todo/getHeat_SUCCESS', 'GET/todo/getHeat_FAILURE'],

  'POST/todo/edit': ['POST/todo/edit_REQUEST', 'POST/todo/edit_SUCCESS', 'POST/todo/edit_FAILURE'],
}

/** store中存储的数据结构 */
interface IRapperStore {
  'GET/todo/getList': Array<
    reduxLib.IInterfaceInfo & {
      request: IModels['GET/todo/getList']['Req']
      response: IResponseTypes['GET/todo/getList']
    }
  >

  'GET/todo/finish': Array<
    reduxLib.IInterfaceInfo & {
      request: IModels['GET/todo/finish']['Req']
      response: IResponseTypes['GET/todo/finish']
    }
  >

  'DELETE/todo': Array<
    reduxLib.IInterfaceInfo & {
      request: IModels['DELETE/todo']['Req']
      response: IResponseTypes['DELETE/todo']
    }
  >

  'PUT/todo': Array<
    reduxLib.IInterfaceInfo & {
      request: IModels['PUT/todo']['Req']
      response: IResponseTypes['PUT/todo']
    }
  >

  'POST/todo/fav': Array<
    reduxLib.IInterfaceInfo & {
      request: IModels['POST/todo/fav']['Req']
      response: IResponseTypes['POST/todo/fav']
    }
  >

  'GET/todo/getHeat': Array<
    reduxLib.IInterfaceInfo & {
      request: IModels['GET/todo/getHeat']['Req']
      response: IResponseTypes['GET/todo/getHeat']
    }
  >

  'POST/todo/edit': Array<
    reduxLib.IInterfaceInfo & {
      request: IModels['POST/todo/edit']['Req']
      response: IResponseTypes['POST/todo/edit']
    }
  >
}
export type TRapperStoreKey = keyof IRapperStore

export const useResponse = {
  /**
   * 接口名：获取TODO列表
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276879&mod=438584&itf=1870135
   */
  'GET/todo/getList': function useData(
    filter?:
      | {request?: IModels['GET/todo/getList']['Req']}
      | {(storeData: IRapperStore['GET/todo/getList'][0]): boolean}
  ) {
    type Req = IModels['GET/todo/getList']['Req']
    type Item = IRapperStore['GET/todo/getList'][0]
    type Res = IResponseTypes['GET/todo/getList']
    return reduxLib.useResponseData<TRapperStoreKey, Req, Res | undefined, Item>('GET/todo/getList', filter)
  },

  /**
   * 接口名：完成TODO
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276879&mod=438584&itf=1870286
   */
  'GET/todo/finish': function useData(
    filter?: {request?: IModels['GET/todo/finish']['Req']} | {(storeData: IRapperStore['GET/todo/finish'][0]): boolean}
  ) {
    type Req = IModels['GET/todo/finish']['Req']
    type Item = IRapperStore['GET/todo/finish'][0]
    type Res = IResponseTypes['GET/todo/finish']
    return reduxLib.useResponseData<TRapperStoreKey, Req, Res | undefined, Item>('GET/todo/finish', filter)
  },

  /**
   * 接口名：删除TODO
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276879&mod=438584&itf=1870190
   */
  'DELETE/todo': function useData(
    filter?: {request?: IModels['DELETE/todo']['Req']} | {(storeData: IRapperStore['DELETE/todo'][0]): boolean}
  ) {
    type Req = IModels['DELETE/todo']['Req']
    type Item = IRapperStore['DELETE/todo'][0]
    type Res = IResponseTypes['DELETE/todo']
    return reduxLib.useResponseData<TRapperStoreKey, Req, Res | undefined, Item>('DELETE/todo', filter)
  },

  /**
   * 接口名：添加TODO
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276879&mod=438584&itf=1870191
   */
  'PUT/todo': function useData(
    filter?: {request?: IModels['PUT/todo']['Req']} | {(storeData: IRapperStore['PUT/todo'][0]): boolean}
  ) {
    type Req = IModels['PUT/todo']['Req']
    type Item = IRapperStore['PUT/todo'][0]
    type Res = IResponseTypes['PUT/todo']
    return reduxLib.useResponseData<TRapperStoreKey, Req, Res | undefined, Item>('PUT/todo', filter)
  },

  /**
   * 接口名：收藏
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276879&mod=438584&itf=1870197
   */
  'POST/todo/fav': function useData(
    filter?: {request?: IModels['POST/todo/fav']['Req']} | {(storeData: IRapperStore['POST/todo/fav'][0]): boolean}
  ) {
    type Req = IModels['POST/todo/fav']['Req']
    type Item = IRapperStore['POST/todo/fav'][0]
    type Res = IResponseTypes['POST/todo/fav']
    return reduxLib.useResponseData<TRapperStoreKey, Req, Res | undefined, Item>('POST/todo/fav', filter)
  },

  /**
   * 接口名：获取可视化数据
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276879&mod=438584&itf=1870199
   */
  'GET/todo/getHeat': function useData(
    filter?:
      | {request?: IModels['GET/todo/getHeat']['Req']}
      | {(storeData: IRapperStore['GET/todo/getHeat'][0]): boolean}
  ) {
    type Req = IModels['GET/todo/getHeat']['Req']
    type Item = IRapperStore['GET/todo/getHeat'][0]
    type Res = IResponseTypes['GET/todo/getHeat']
    return reduxLib.useResponseData<TRapperStoreKey, Req, Res | undefined, Item>('GET/todo/getHeat', filter)
  },

  /**
   * 接口名：修改TODO
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276879&mod=438584&itf=1870291
   */
  'POST/todo/edit': function useData(
    filter?: {request?: IModels['POST/todo/edit']['Req']} | {(storeData: IRapperStore['POST/todo/edit'][0]): boolean}
  ) {
    type Req = IModels['POST/todo/edit']['Req']
    type Item = IRapperStore['POST/todo/edit'][0]
    type Res = IResponseTypes['POST/todo/edit']
    return reduxLib.useResponseData<TRapperStoreKey, Req, Res | undefined, Item>('POST/todo/edit', filter)
  },
}

export const useAPI = {
  /**
   * 接口名：获取TODO列表
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276879&mod=438584&itf=1870135
   */
  'GET/todo/getList': function useData(
    requestParams?: IModels['GET/todo/getList']['Req'],
    extra?: reduxLib.IUseAPIExtra<IModels['GET/todo/getList']['Req']>
  ) {
    type Req = IModels['GET/todo/getList']['Req']
    type Res = IResponseTypes['GET/todo/getList']
    type IFetcher = typeof fetch['GET/todo/getList']
    return reduxLib.useAPICommon<TRapperStoreKey, Req, Res | undefined, IFetcher>({
      modelName: 'GET/todo/getList',
      fetcher: fetch['GET/todo/getList'],
      requestParams,
      extra,
    })
  },

  /**
   * 接口名：完成TODO
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276879&mod=438584&itf=1870286
   */
  'GET/todo/finish': function useData(
    requestParams?: IModels['GET/todo/finish']['Req'],
    extra?: reduxLib.IUseAPIExtra<IModels['GET/todo/finish']['Req']>
  ) {
    type Req = IModels['GET/todo/finish']['Req']
    type Res = IResponseTypes['GET/todo/finish']
    type IFetcher = typeof fetch['GET/todo/finish']
    return reduxLib.useAPICommon<TRapperStoreKey, Req, Res | undefined, IFetcher>({
      modelName: 'GET/todo/finish',
      fetcher: fetch['GET/todo/finish'],
      requestParams,
      extra,
    })
  },

  /**
   * 接口名：删除TODO
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276879&mod=438584&itf=1870190
   */
  'DELETE/todo': function useData(
    requestParams?: IModels['DELETE/todo']['Req'],
    extra?: reduxLib.IUseAPIExtra<IModels['DELETE/todo']['Req']>
  ) {
    type Req = IModels['DELETE/todo']['Req']
    type Res = IResponseTypes['DELETE/todo']
    type IFetcher = typeof fetch['DELETE/todo']
    return reduxLib.useAPICommon<TRapperStoreKey, Req, Res | undefined, IFetcher>({
      modelName: 'DELETE/todo',
      fetcher: fetch['DELETE/todo'],
      requestParams,
      extra,
    })
  },

  /**
   * 接口名：添加TODO
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276879&mod=438584&itf=1870191
   */
  'PUT/todo': function useData(
    requestParams?: IModels['PUT/todo']['Req'],
    extra?: reduxLib.IUseAPIExtra<IModels['PUT/todo']['Req']>
  ) {
    type Req = IModels['PUT/todo']['Req']
    type Res = IResponseTypes['PUT/todo']
    type IFetcher = typeof fetch['PUT/todo']
    return reduxLib.useAPICommon<TRapperStoreKey, Req, Res | undefined, IFetcher>({
      modelName: 'PUT/todo',
      fetcher: fetch['PUT/todo'],
      requestParams,
      extra,
    })
  },

  /**
   * 接口名：收藏
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276879&mod=438584&itf=1870197
   */
  'POST/todo/fav': function useData(
    requestParams?: IModels['POST/todo/fav']['Req'],
    extra?: reduxLib.IUseAPIExtra<IModels['POST/todo/fav']['Req']>
  ) {
    type Req = IModels['POST/todo/fav']['Req']
    type Res = IResponseTypes['POST/todo/fav']
    type IFetcher = typeof fetch['POST/todo/fav']
    return reduxLib.useAPICommon<TRapperStoreKey, Req, Res | undefined, IFetcher>({
      modelName: 'POST/todo/fav',
      fetcher: fetch['POST/todo/fav'],
      requestParams,
      extra,
    })
  },

  /**
   * 接口名：获取可视化数据
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276879&mod=438584&itf=1870199
   */
  'GET/todo/getHeat': function useData(
    requestParams?: IModels['GET/todo/getHeat']['Req'],
    extra?: reduxLib.IUseAPIExtra<IModels['GET/todo/getHeat']['Req']>
  ) {
    type Req = IModels['GET/todo/getHeat']['Req']
    type Res = IResponseTypes['GET/todo/getHeat']
    type IFetcher = typeof fetch['GET/todo/getHeat']
    return reduxLib.useAPICommon<TRapperStoreKey, Req, Res | undefined, IFetcher>({
      modelName: 'GET/todo/getHeat',
      fetcher: fetch['GET/todo/getHeat'],
      requestParams,
      extra,
    })
  },

  /**
   * 接口名：修改TODO
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276879&mod=438584&itf=1870291
   */
  'POST/todo/edit': function useData(
    requestParams?: IModels['POST/todo/edit']['Req'],
    extra?: reduxLib.IUseAPIExtra<IModels['POST/todo/edit']['Req']>
  ) {
    type Req = IModels['POST/todo/edit']['Req']
    type Res = IResponseTypes['POST/todo/edit']
    type IFetcher = typeof fetch['POST/todo/edit']
    return reduxLib.useAPICommon<TRapperStoreKey, Req, Res | undefined, IFetcher>({
      modelName: 'POST/todo/edit',
      fetcher: fetch['POST/todo/edit'],
      requestParams,
      extra,
    })
  },
}

export const useAllResponse = {
  /**
   * 接口名：获取TODO列表
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276879&mod=438584&itf=1870135
   */
  'GET/todo/getList': function useData() {
    return useSelector((state: reduxLib.IState) => {
      const selectedState = (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/todo/getList']) || []
      type TReturnItem = reduxLib.IInterfaceInfo & {
        request?: IModels['GET/todo/getList']['Req']
        response?: IResponseTypes['GET/todo/getList']
      }
      return selectedState as Array<TReturnItem>
    })
  },

  /**
   * 接口名：完成TODO
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276879&mod=438584&itf=1870286
   */
  'GET/todo/finish': function useData() {
    return useSelector((state: reduxLib.IState) => {
      const selectedState = (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/todo/finish']) || []
      type TReturnItem = reduxLib.IInterfaceInfo & {
        request?: IModels['GET/todo/finish']['Req']
        response?: IResponseTypes['GET/todo/finish']
      }
      return selectedState as Array<TReturnItem>
    })
  },

  /**
   * 接口名：删除TODO
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276879&mod=438584&itf=1870190
   */
  'DELETE/todo': function useData() {
    return useSelector((state: reduxLib.IState) => {
      const selectedState = (state['$$rapperResponseData'] && state['$$rapperResponseData']['DELETE/todo']) || []
      type TReturnItem = reduxLib.IInterfaceInfo & {
        request?: IModels['DELETE/todo']['Req']
        response?: IResponseTypes['DELETE/todo']
      }
      return selectedState as Array<TReturnItem>
    })
  },

  /**
   * 接口名：添加TODO
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276879&mod=438584&itf=1870191
   */
  'PUT/todo': function useData() {
    return useSelector((state: reduxLib.IState) => {
      const selectedState = (state['$$rapperResponseData'] && state['$$rapperResponseData']['PUT/todo']) || []
      type TReturnItem = reduxLib.IInterfaceInfo & {
        request?: IModels['PUT/todo']['Req']
        response?: IResponseTypes['PUT/todo']
      }
      return selectedState as Array<TReturnItem>
    })
  },

  /**
   * 接口名：收藏
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276879&mod=438584&itf=1870197
   */
  'POST/todo/fav': function useData() {
    return useSelector((state: reduxLib.IState) => {
      const selectedState = (state['$$rapperResponseData'] && state['$$rapperResponseData']['POST/todo/fav']) || []
      type TReturnItem = reduxLib.IInterfaceInfo & {
        request?: IModels['POST/todo/fav']['Req']
        response?: IResponseTypes['POST/todo/fav']
      }
      return selectedState as Array<TReturnItem>
    })
  },

  /**
   * 接口名：获取可视化数据
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276879&mod=438584&itf=1870199
   */
  'GET/todo/getHeat': function useData() {
    return useSelector((state: reduxLib.IState) => {
      const selectedState = (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/todo/getHeat']) || []
      type TReturnItem = reduxLib.IInterfaceInfo & {
        request?: IModels['GET/todo/getHeat']['Req']
        response?: IResponseTypes['GET/todo/getHeat']
      }
      return selectedState as Array<TReturnItem>
    })
  },

  /**
   * 接口名：修改TODO
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276879&mod=438584&itf=1870291
   */
  'POST/todo/edit': function useData() {
    return useSelector((state: reduxLib.IState) => {
      const selectedState = (state['$$rapperResponseData'] && state['$$rapperResponseData']['POST/todo/edit']) || []
      type TReturnItem = reduxLib.IInterfaceInfo & {
        request?: IModels['POST/todo/edit']['Req']
        response?: IResponseTypes['POST/todo/edit']
      }
      return selectedState as Array<TReturnItem>
    })
  },
}

/** 重置接口数据 */
export const clearResponseCache = {
  /**
   * 接口名：获取TODO列表
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276879&mod=438584&itf=1870135
   */
  'GET/todo/getList': (): void => {
    reduxLib.dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/todo/getList': undefined},
    })
  },

  /**
   * 接口名：完成TODO
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276879&mod=438584&itf=1870286
   */
  'GET/todo/finish': (): void => {
    reduxLib.dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/todo/finish': undefined},
    })
  },

  /**
   * 接口名：删除TODO
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276879&mod=438584&itf=1870190
   */
  'DELETE/todo': (): void => {
    reduxLib.dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'DELETE/todo': undefined},
    })
  },

  /**
   * 接口名：添加TODO
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276879&mod=438584&itf=1870191
   */
  'PUT/todo': (): void => {
    reduxLib.dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'PUT/todo': undefined},
    })
  },

  /**
   * 接口名：收藏
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276879&mod=438584&itf=1870197
   */
  'POST/todo/fav': (): void => {
    reduxLib.dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'POST/todo/fav': undefined},
    })
  },

  /**
   * 接口名：获取可视化数据
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276879&mod=438584&itf=1870199
   */
  'GET/todo/getHeat': (): void => {
    reduxLib.dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/todo/getHeat': undefined},
    })
  },

  /**
   * 接口名：修改TODO
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=276879&mod=438584&itf=1870291
   */
  'POST/todo/edit': (): void => {
    reduxLib.dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'POST/todo/edit': undefined},
    })
  },
}

export const rapperBaseSelector = {
  'GET/todo/getList': (
    state: reduxLib.IState,
    filter?:
      | {request?: IModels['GET/todo/getList']['Req']}
      | {(storeData: IRapperStore['GET/todo/getList'][0]): boolean}
  ) => {
    type Req = IModels['GET/todo/getList']['Req']
    type Res = IResponseTypes['GET/todo/getList']
    type Item = IRapperStore['GET/todo/getList'][0]
    return reduxLib.getResponseData<TRapperStoreKey, Req, Res | undefined, Item>(state, 'GET/todo/getList', filter)
  },
  'GET/todo/finish': (
    state: reduxLib.IState,
    filter?: {request?: IModels['GET/todo/finish']['Req']} | {(storeData: IRapperStore['GET/todo/finish'][0]): boolean}
  ) => {
    type Req = IModels['GET/todo/finish']['Req']
    type Res = IResponseTypes['GET/todo/finish']
    type Item = IRapperStore['GET/todo/finish'][0]
    return reduxLib.getResponseData<TRapperStoreKey, Req, Res | undefined, Item>(state, 'GET/todo/finish', filter)
  },
  'DELETE/todo': (
    state: reduxLib.IState,
    filter?: {request?: IModels['DELETE/todo']['Req']} | {(storeData: IRapperStore['DELETE/todo'][0]): boolean}
  ) => {
    type Req = IModels['DELETE/todo']['Req']
    type Res = IResponseTypes['DELETE/todo']
    type Item = IRapperStore['DELETE/todo'][0]
    return reduxLib.getResponseData<TRapperStoreKey, Req, Res | undefined, Item>(state, 'DELETE/todo', filter)
  },
  'PUT/todo': (
    state: reduxLib.IState,
    filter?: {request?: IModels['PUT/todo']['Req']} | {(storeData: IRapperStore['PUT/todo'][0]): boolean}
  ) => {
    type Req = IModels['PUT/todo']['Req']
    type Res = IResponseTypes['PUT/todo']
    type Item = IRapperStore['PUT/todo'][0]
    return reduxLib.getResponseData<TRapperStoreKey, Req, Res | undefined, Item>(state, 'PUT/todo', filter)
  },
  'POST/todo/fav': (
    state: reduxLib.IState,
    filter?: {request?: IModels['POST/todo/fav']['Req']} | {(storeData: IRapperStore['POST/todo/fav'][0]): boolean}
  ) => {
    type Req = IModels['POST/todo/fav']['Req']
    type Res = IResponseTypes['POST/todo/fav']
    type Item = IRapperStore['POST/todo/fav'][0]
    return reduxLib.getResponseData<TRapperStoreKey, Req, Res | undefined, Item>(state, 'POST/todo/fav', filter)
  },
  'GET/todo/getHeat': (
    state: reduxLib.IState,
    filter?:
      | {request?: IModels['GET/todo/getHeat']['Req']}
      | {(storeData: IRapperStore['GET/todo/getHeat'][0]): boolean}
  ) => {
    type Req = IModels['GET/todo/getHeat']['Req']
    type Res = IResponseTypes['GET/todo/getHeat']
    type Item = IRapperStore['GET/todo/getHeat'][0]
    return reduxLib.getResponseData<TRapperStoreKey, Req, Res | undefined, Item>(state, 'GET/todo/getHeat', filter)
  },
  'POST/todo/edit': (
    state: reduxLib.IState,
    filter?: {request?: IModels['POST/todo/edit']['Req']} | {(storeData: IRapperStore['POST/todo/edit'][0]): boolean}
  ) => {
    type Req = IModels['POST/todo/edit']['Req']
    type Res = IResponseTypes['POST/todo/edit']
    type Item = IRapperStore['POST/todo/edit'][0]
    return reduxLib.getResponseData<TRapperStoreKey, Req, Res | undefined, Item>(state, 'POST/todo/edit', filter)
  },
}

export const rapperDataSelector = {
  'GET/todo/getList': (state: reduxLib.IState) => {
    type Res = IResponseTypes['GET/todo/getList']
    return reduxLib.getRapperDataSelector<TRapperStoreKey, Res>(state, 'GET/todo/getList')
  },
  'GET/todo/finish': (state: reduxLib.IState) => {
    type Res = IResponseTypes['GET/todo/finish']
    return reduxLib.getRapperDataSelector<TRapperStoreKey, Res>(state, 'GET/todo/finish')
  },
  'DELETE/todo': (state: reduxLib.IState) => {
    type Res = IResponseTypes['DELETE/todo']
    return reduxLib.getRapperDataSelector<TRapperStoreKey, Res>(state, 'DELETE/todo')
  },
  'PUT/todo': (state: reduxLib.IState) => {
    type Res = IResponseTypes['PUT/todo']
    return reduxLib.getRapperDataSelector<TRapperStoreKey, Res>(state, 'PUT/todo')
  },
  'POST/todo/fav': (state: reduxLib.IState) => {
    type Res = IResponseTypes['POST/todo/fav']
    return reduxLib.getRapperDataSelector<TRapperStoreKey, Res>(state, 'POST/todo/fav')
  },
  'GET/todo/getHeat': (state: reduxLib.IState) => {
    type Res = IResponseTypes['GET/todo/getHeat']
    return reduxLib.getRapperDataSelector<TRapperStoreKey, Res>(state, 'GET/todo/getHeat')
  },
  'POST/todo/edit': (state: reduxLib.IState) => {
    type Res = IResponseTypes['POST/todo/edit']
    return reduxLib.getRapperDataSelector<TRapperStoreKey, Res>(state, 'POST/todo/edit')
  },
}

export const rapperActions = RequestTypes || []
