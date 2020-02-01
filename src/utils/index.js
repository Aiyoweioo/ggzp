/*
包含N个共用的工具函数
*/


/*
用户主界面
dashsen: /dashen
laoban: /laoban
用户信息完善界面路由
dasheninfo: /dasheninfo
labaninfo: /laobaninfo
需要判断信息是否需完善 user.header是否有值
用户类型? type
*/
// 返回正确的路由路径
export function getRedirectTo(type, header){
    let path = ''
    if(type === 'laoban'){
      path = '/laoban'
    }else{
      path = '/dashen'
    }
    // header
    if(!header){ // 没有值， 返回信息完善界面的path
      path += 'info'
    }
    return path
  }