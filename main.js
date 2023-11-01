$(document).ready(function () {
  $("header button").click(() => {
    $("form").slideDown();
  });

  $("#btn-cancelar").click(() => {
    $("form").slideUp();
  });

  $("form").on("submit", (e) => {
    e.preventDefault();

    const endereDaNovaImagem = $("#endereco-imagem-nova").val();
    const novoItem = $("<li style='display:none'></li>");
    $(`<img src="${endereDaNovaImagem}" />`).appendTo(novoItem);
    $(`<div class="overlay-imagem-link">
        <a href="${endereDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">Ver imagem em tamanho real</a>
    </div>`).appendTo(novoItem);
    $(novoItem).appendTo("ul");
    $(novoItem).fadeIn(2000);
    $("#endereco-imagem-nova").val("");
  });
});
