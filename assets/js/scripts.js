document.querySelectorAll('.test-progress-item').forEach((item) =>
    item.addEventListener('click', function (e){
        e.preventDefault();
        const id = e.target.getAttribute('href').replace('#', '')

        document.querySelectorAll('.test-progress-item').forEach(
            (child) => child.classList.remove('_active')
        );
        document.querySelectorAll('.test-info').forEach(
            (child) => child.classList.remove('_active')
        );

        item.classList.add('_active');
        document.getElementById(id).classList.add('_active');
    })
);

$(document).ready(function() {
    $('.user-avatar').on('click', function(){
        if($('.user-param').hasClass('hid')){
            $('.user-param').removeClass('hid')
        }
        else{
            $('.user-param').addClass('hid')
        }
    });
});