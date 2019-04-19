document.body.innerHTML = '';
document.body.style.overflow = 'hidden';



function createCube(color, speed, width, height, keyUp, keyDown, keyLeft, keyRight){
    
    var speed = speed;
    var str = '<div class="element-wrapper"><span class="span-left">'+
    keyLeft+'</span><span class="span-right">'+
    keyRight+'</span><span class="span-top">'+
    keyUp+'</span><span class="span-bottom">'+
    keyDown+'</span></div>';

    var player_el = document.createElement('div');
    player_el.innerHTML = str;
    player_el.style.height = width + 'px';
    player_el.style.width = height + 'px';
    player_el.style.position = 'absolute';
    player_el.style.backgroundColor = color;
    player_el.style.top = '0px';
    player_el.style.left = '0px';

    var keyState = {
        up: false,
        down: false,
        left: false,
        right: false
    };

    var maxR = window.innerWidth;
    var maxB = window.innerHeight;

    var position = {
        top: 0,
        left: 0,
        maxLeft: 0,
        maxRight: maxR -= width += 3,
        maxTop: 0,
        maxBottom: maxB -= height += 3
    }

    document.body.appendChild(player_el);


    document.addEventListener('keydown', function(event) {
        if (event.code === keyDown) {
            keyState.down = true;
        } else if (event.code === keyUp) {
            keyState.up = true;
        } else if (event.code === keyLeft) {
            keyState.left = true;
        } else if (event.code === keyRight) {
            keyState.right = true;
        }
    })

    document.addEventListener('keyup', function(event) {
        if (event.code === keyDown) {
            keyState.down = false;
        } else if (event.code === keyUp) {
            keyState.up = false;
        } else if (event.code === keyLeft) {
            keyState.left = false;
        } else if (event.code === keyRight) {
            keyState.right = false;
        }
    })


    setInterval(function() {
        if (keyState.up) {
            if(position.top >= position.maxTop){
                position.top -= speed;
            }else{
                return ;
            }
        }

        if (keyState.down) {
            if(position.top <= position.maxBottom){
                position.top += speed;
            }else{
                return ;
            }
        }
        
        if (keyState.left) {
            if(position.left >= position.maxLeft){
                position.left -= speed;
            }else{
                return ;
            }
        }

        if (keyState.right) {
            if(position.left <= position.maxRight){
                position.left += speed;
            }else{
                return ;
            }
        }
    });


    setInterval(function() {
        player_el.style.top = position.top + 'px';
        player_el.style.left = position.left + 'px';
    }, (1000/30));
}

createCube('red', 2, 100, 100, 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight');

createCube('green', 5, 75, 75, 'Numpad8', 'Numpad2', 'Numpad4', 'Numpad6');

var a = document.querySelectorAll('.element-wrapper');

for(i = 0 ; i < a.length ; i++){
a[i].style.position = 'relative';
a[i].style.width = '100%';
a[i].style.height = '100%';


a[i].children[1].style.position = 'absolute'; // r
a[i].children[1].style.right = '-150px'; // r
a[i].children[1].style.top = '30%'; // r

a[i].children[2].style.position = 'absolute'; // t
a[i].children[2].style.left = '0'; // t
a[i].children[2].style.top = '-40px'; // t

a[i].children[3].style.position = 'absolute'; // b
a[i].children[3].style.left = '0'; // b
a[i].children[3].style.bottom = '-40px'; // b

a[i].children[0].style.position = 'absolute'; // l
a[i].children[0].style.left = '-135px'; // l
a[i].children[0].style.top = '30%'; // l
}