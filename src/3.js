import $ from 'jquery'
import './app3.css'

const $squre = $('#app3 #squre')
$squre.on('click', () => {
    $squre.toggleClass('active')
})