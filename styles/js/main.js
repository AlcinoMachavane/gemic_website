$(function () {
    // Alterna o menu ao clicar no menu ou no botão
    $('.menu-mobile-limit').on('click', function (event) {
        event.stopPropagation(); // Impede que o clique se propague para o documento
        $('.menu-mobile-list').toggleClass('ds_none');
        $(this).toggleClass('menu-mobile-limit_active');
    });

    // Fecha o menu ao clicar fora dele
    $(document).on('click', function (event) {
        if (!$(event.target).closest('.menu-mobile-list, .menu-mobile-limit').length) {
            // Se o clique não é no menu ou no botão, fecha o menu
            $('.menu-mobile-list').addClass('ds_none');
            $('.menu-mobile-limit').removeClass('menu-mobile-limit_active');
        }
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

