import ApiService from './ApiService'

export async function ApiGetMenuList() {
    return ApiService.fetchData({
        url: '/Corporate/Menu/MenuList',
        method: 'Get',
        timeout: 0 ,
    })
}

export async function ApiGetContent(url) {
    return ApiService.fetchData({
        url: '/Corporate/WebContent/GetContent?url=' + url,
        method: 'Get',
        timeout: 0 ,
    })
}

