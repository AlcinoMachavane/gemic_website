$(function () {
    $('.menu-mobile-limit').on('click', function () {
        $('.menu-mobile-list').toggleClass('ds_none');
        $(this).toggleClass('menu-mobile-limit_active');
    });
});

// //////////////////////////////////////////////////////////////////////////

const nav = document.querySelector('.header-top');
let prevScrollpos = window.pageYOffset;

window.addEventListener('scroll', ()=>{
    let currentScrollPos = window.pageYOffset;

    if (prevScrollpos < currentScrollPos){
        nav.classList.add('hide');
    }else {
        nav.classList.remove('hide');
    }
    prevScrollpos = currentScrollPos;
})


// ///////////////////////////////////////////////////////////////////////////


function fazerChamada() {
    // Substitua "123456789" pelo número de telefone desejado
    var numeroTelefone = "874000778";

    // Utiliza a API tel: para iniciar a chamada telefônica
    window.location.href = "tel:" + numeroTelefone;
}

