import $ from 'jquery'
import './app1.css'

const $add1 = $('#add1')
const $minus1 = $('#minus1')
const $mul2 = $('#mul2')
const $divide2 = $('#divide2')
const $output = $('.output')

let n = localStorage.getItem("n");
let s = $output.text(n || 100);
$add1.on('click', () => {
    n = parseInt($output.text())
    n += 1
    localStorage.setItem('n', n)
    $output.text(n)
})
$minus1.on('click', () => {
    n = parseInt($output.text())
    n -= 1
    localStorage.setItem('n', n)
    $output.text(n)
})
$mul2.on('click', () => {
    n = parseInt($output.text())
    n *= 2
    localStorage.setItem('n', n)
    $output.text(n)
})
$divide2.on('click', () => {
    n = parseInt($output.text())
    n /= 2
    localStorage.setItem('n', n)
    $output.text(n)
})
//事件委托
// const $input = $('.input')
// $input.on('click', (e) => {
//     console.log(e.target, 88888)
//     if (e.target === $add1[0]) {
//         n = parseInt($output.text())
//         n += 1
//         localStorage.setItem('n', n)
//         $output.text(n)
//     } else if (e.target === $minus1[0]) {
//         n = parseInt($output.text())
//         n -= 1
//         localStorage.setItem('n', n)
//         $output.text(n)
//     } else if (e.target === $mul2[0]) {
//         n = parseInt($output.text())
//         n *= 2
//         localStorage.setItem('n', n)
//         $output.text(n)
//     } else if (e.target === $divide2[0]) {
//         n = parseInt($output.text())
//         n /= 2
//         localStorage.setItem('n', n)
//         $output.text(n)
//     }
// })