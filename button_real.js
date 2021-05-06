<script>
    if (window.location.href = "https://claracloud.freshservice.com/support/catalog/items/55") {

        document.getElementById('requested_item_values_55_requested_item_value_attributes_cf_ponto_de_entrada_162904').onclick =
            setStartTime();

        document.getElementById('requested_item_values_55_requested_item_value_attributes_cf_ponto_de_saida_162904').onclick =
            setStartTime();

        function setStartTime() {
            document.getElementById('requested_item_values_55_requested_item_value_attributes_cf_entrada_162904_time').value =
                new Date().toLocaleTimeString(navigator.language, {
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                });

            document.getElementById('requested_item_values_55_requested_item_value_attributes_cf_entrada_162904_date').value =
                new Date().toLocaleDateString();
        }

    }
</script>
