import $ from 'jquery'
import './app2.css'
const $tabBar = $('#app2 .tabBar');
const $tabContent = $('#app2 .tabContent')
$tabBar.on('click', "li", (e) => {
    const $li = $(e.currentTarget)
    //e.currentTarget 是监听的元素，e.tarrget是点击的元素
    const index = $li.index()
    $tabBar.children()
        .eq(index).addClass('selected')
        .siblings().removeClass('selected')
    $tabContent.children()
        .eq(index).addClass('active')
        .siblings().removeClass('active')
})