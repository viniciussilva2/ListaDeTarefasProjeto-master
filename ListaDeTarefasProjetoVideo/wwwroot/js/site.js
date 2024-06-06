document.getElementById('limparFiltros').addEventListener('click', function () {
    // Reseta os valores dos campos de filtro
    document.getElementsByName('filtro').forEach(function (element) {
        element.value = 'todos';
    });
});