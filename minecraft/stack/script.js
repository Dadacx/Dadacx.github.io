// 64
var stack = document.querySelector("#stack")
var stack_bloki = document.querySelector("#stack_bloki")
var bloki = document.querySelector("#bloki")
function stacks64() {
    var stacki = parseInt(bloki.value) / 64
    //stacki = stacki.toFixed(0)
    stacki = parseInt(stacki)
    stack.value = stacki
    stacki = stacki * 64
    stack_bloki.value = bloki.value - stacki
}
function blok64() {
    if (stack_bloki.value == "") { stack_bloki.value = "0" }
    bloki.value = parseInt(stack.value) * 64 + parseInt(stack_bloki.value)
}

// 16
var stack2 = document.querySelector("#stack2")
var stack_bloki2 = document.querySelector("#stack_bloki2")
var bloki2 = document.querySelector("#bloki2")
function stacks16() {
    var stacki = parseInt(bloki2.value) / 16
    //stacki = stacki.toFixed(0)
    stacki = parseInt(stacki)
    stack2.value = stacki
    stacki = stacki * 16
    stack_bloki2.value = bloki2.value - stacki
}
function blok16() {
    if (stack_bloki2.value == "") { stack_bloki2.value = "0" }
    bloki2.value = parseInt(stack2.value) * 16 + parseInt(stack_bloki2.value)
}