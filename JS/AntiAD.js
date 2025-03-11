/**
 * Shadowrocket 移除 twmanga 相关网站的广告元素
 * 目标：删除 class="mobadsq", "div_sub_adhost", "div_adhost", "div_close_ads", "l-box" 的广告
 * 适用于 twmanga 的所有域名
 */

// 解析 HTML 并删除目标广告元素
const body = $response.body;
let modifiedBody = body;

// 需要删除的广告类名列表
const adClasses = ["mobadsq", "div_sub_adhost", "div_adhost", "div_close_ads", "l-box"];

// 更强的正则匹配方式，兼容多行、嵌套子元素等情况
adClasses.forEach(className => {
    const regex = new RegExp(`<div[^>]*\\b${className}\\b[^>]*>[\\s\\S]*?<\\/div>`, "g");
    modifiedBody = modifiedBody.replace(regex, '');
});

// 返回修改后的 HTML
$done({ body: modifiedBody });
