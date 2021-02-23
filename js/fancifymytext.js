function onClickHandler() {
    document.getElementById('user-input').style.fontSize = '24px';
}

function fancy() {
    fancy_button = document.getElementById('fancy');
    user_input = document.getElementById('user-input');
    if (fancy_button.checked) {
        user_input.style.fontWeight = 'bold';
        user_input.style.color = 'blue';
        user_input.style.textDecoration = 'underline'
        boring_button.checked = false;
    }
}

function boring() {
    boring_button = document.getElementById('boring');
    user_input = document.getElementById('user-input');
    if (fancy_button.checked) {
        user_input.style.fontWeight = 'normal';
        user_input.style.color = 'inherit';
        user_input.style.textDecoration = 'none'
        fancy_button.checked = false;
    }
}

function moo() {
    user_input = document.getElementById('user-input');
    user_input.value = user_input.value.toUpperCase();
    split_input = user_input.value.split(".");

    for (i = 0; i <split_input.length-1; i++) {
        split_input[i] += "moo";
    }
    user_input.value = split_input.join(".");
}