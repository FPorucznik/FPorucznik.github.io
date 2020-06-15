var products = {};

function product_add()
{
    var product_name = document.getElementById("product_name").value;
    var product_price = parseFloat(document.getElementById("product_kg_price").value);

    if(product_name == "" || isNaN(product_price))
    {
        alert("Wpisz odpowiednie wartości");
    }
    else 
    {
        var product_block = document.createElement("li");
        var product_info = document.createTextNode(product_name + " " + product_price + " zł / kg     ");
        var product_remove_btn = document.createElement("button");
        product_remove_btn.onclick = function(){ delete products[product_name]; this.parentNode.remove(); calculator(); if(Object.entries(products).length == 0){ document.getElementById("count_btn").disabled = true;}};
    
        product_remove_btn.className = "remove";
        var product_remove_text = document.createTextNode("X");
    
        product_remove_btn.appendChild(product_remove_text);
        product_block.appendChild(product_info);
        product_block.appendChild(product_remove_btn);
    
        document.getElementById("products").appendChild(product_block);
    
        products[product_name] = product_price; 
    
        document.getElementById("product_name").value="";
        document.getElementById("product_kg_price").value="";
    
        document.getElementById("count_btn").disabled = false;
        calculator();
    
        console.log(products);
    }
}

function calculator()
{
    clear_div("calc_tools");
    for(product in products)
    {
        var field = document.getElementById("calc_tools");

        var input_field_kg = document.createElement("input");
        var input_field_dag = document.createElement("input");
        var input_field_g = document.createElement("input");

        var label = document.createElement("label");
        var label_text = document.createTextNode(product + ": ");

        input_field_kg.setAttribute("type", "number");
        input_field_dag.setAttribute("type", "number");
        input_field_g.setAttribute("type", "number");

        input_field_kg.setAttribute("id", "kg_" + product);
        input_field_dag.setAttribute("id", "dag_" + product);
        input_field_g.setAttribute("id", "g_" + product);

        input_field_kg.defaultValue = 0;
        input_field_dag.defaultValue = 0;
        input_field_g.defaultValue = 0;

        label.appendChild(label_text);

        field.appendChild(label);
        field.innerHTML += "<br>";
        field.innerHTML += "kg:&nbsp;&nbsp;";
        field.appendChild(input_field_kg);
        field.innerHTML += "<br>";
        field.innerHTML += "dag:";
        field.appendChild(input_field_dag);
        field.innerHTML += "<br>";
        field.innerHTML += "g:&nbsp;&nbsp;&nbsp;&nbsp;";
        field.appendChild(input_field_g);
        field.innerHTML += "<br>";
        field.innerHTML += "<br>";
    }
}

function clear_div(divId)
{
    document.getElementById(divId).innerHTML="";
}

function count()
{
    let sum = 0;
    for(product in products)
    {
        let current_kg_value = parseFloat(document.getElementById("kg_" + product).value);
        if(isNaN(current_kg_value)){ current_kg_value = 0; document.getElementById("kg_" + product).value = 0;}
        sum += current_kg_value*products[product];

        let current_dag_value = parseFloat(document.getElementById("dag_" + product).value);
        if(isNaN(current_dag_value)){ current_dag_value = 0; document.getElementById("dag_" + product).value = 0;}
        sum += (current_dag_value*products[product]) / 100;

        let current_g_value = parseFloat(document.getElementById("g_" + product).value);
        if(isNaN(current_g_value)){ current_g_value = 0; document.getElementById("g_" + product).value = 0;}
        sum += (current_g_value*products[product]) / 1000;

    }
    sum = Math.round(sum * 100) / 100;
    console.log(sum);

    document.getElementById("sum").innerHTML = "Suma: " + sum + " zł";
}
