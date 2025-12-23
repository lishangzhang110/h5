import { port } from '@/setting'
// 静态资源地址配置，主要是图片
export default {
    // 首页背景
    home_bg: {
        nurse: 'https://app.hqhis.com/cdn/images/nurse/banner/nurseBanner3.png',
        doctor: 'https://app.hqhis.com/cdn/images/doctor/banner/doctorBanner2.png'
    }[port],
    // 通知
    notice: {
        patient: 'https://app.hqhis.com/cdn/images/newui/home/msg.png',
        nurse: 'https://app.hqhis.com/cdn/images/newui/home/msg3.png',
        doctor: 'https://app.hqhis.com/cdn/images/doctor/img/msg.png'
    }[port],
    // 通知-任务
    notice_task: 'https://app.hqhis.com/cdn/images/newui/home/icon-task.png',
    // 菜单
    menus: {
        // 问诊表
        icon1: {
            nurse: 'https://app.hqhis.com/cdn/images/nurse/img/jzb.png',
            doctor: 'https://app.hqhis.com/cdn/images/doctor/img/jzb.png'
        }[port],
        // 预约挂号
        icon2: 'https://app.hqhis.com/cdn/images/nurse/img/yygh.png',
        // 预警
        icon3: {
            nurse: 'https://app.hqhis.com/cdn/images/nurse/img/yj.png',
            doctor: 'https://app.hqhis.com/cdn/images/doctor/img/yj.png'
        }[port],
        // 随访任务
        icon4: {
            nurse: 'https://app.hqhis.com/cdn/images/nurse/img/sfrw.png',
            doctor: 'https://app.hqhis.com/cdn/images/doctor/img/sfrw.png'
        }[port],
        // 服务包
        icon5: 'https://app.hqhis.com/cdn/images/nurse/img/sfrw.png',
        // 医教资料
        icon6: 'https://app.hqhis.com/cdn/images/nurse/img/yjzl.png',
        // 临床实验
        icon7: 'https://app.hqhis.com/cdn/images/nurse/img/lcsy.png',
        // 签约服务
        icon8: 'https://app.hqhis.com/cdn/images/nurse/img/qyfw.png',
        // AI问诊
        icon9: 'https://app.hqhis.com/cdn/images/newui/home/icon-aiwz.png'
    },
    // 电话
    phone: {
        nurse: 'https://app.hqhis.com/cdn/images/nurse/img/dh.png',
        doctor: 'https://app.hqhis.com/cdn/images/doctor/img/dh.png',
    }[port],
    // 消息
    message: {
        nurse: 'https://app.hqhis.com/cdn/images/nurse/img/xx.png',
        doctor: 'https://app.hqhis.com/cdn/images/doctor/img/xx.png',
    }[port],
    // 标记
    mark: {
        nurse: 'https://app.hqhis.com/cdn/images/nurse/img/bj.png',
        doctor: 'https://app.hqhis.com/cdn/images/doctor/img/bj.png',
    }[port],
    // 无数据
    no_data: 'https://app.hqhis.com/cdn/images/newui/home/no_data.png'
}