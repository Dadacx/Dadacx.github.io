function tooltipPos(tooltip) {
    var tooltipText = tooltip.querySelector('#tooltip')
    var e = window.event;
    var posX = e.clientX;
    var posY = e.clientY;
    var tooltipHeight = tooltipText.offsetHeight

    //console.log(posX + " " + posY)

    tooltipHeight /= 2
    posX += 7
    posY -= tooltipHeight

    tooltipText.style.left = posX + 'px';
    tooltipText.style.top = posY + 'px';
}