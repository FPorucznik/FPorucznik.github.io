var products = {};

function product_add()
{
    var product_name = document.getElementById("product_name").value;
    var product_price = parseFloat(document.getElementById("product_kg_price").value);

    var product_block = document.createElement("li");
    var product_info = document.createTextNode(product_name + " " + product_price + " zł / kg     ");
    var product_remove_btn = document.createElement("button");
    product_remove_btn.onclick = function(){ delete products[product_name]; this.parentNode.remove(); calculator();};

    product_remove_btn.className = "remove";
    var product_remove_text = document.createTextNode("X");

    product_remove_btn.appendChild(product_remove_text);
    product_block.appendChild(product_info);
    product_block.appendChild(product_remove_btn);

    document.getElementById("products").appendChild(product_block);

    products[product_name] = product_price; 

    document.getElementById("product_name").value="";
    document.getElementById("product_kg_price").value="";

    calculator();

    console.log(products);
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

        input_field_kg.setAttribute("type", "text");
        input_field_dag.setAttribute("type", "text");
        input_field_g.setAttribute("type", "text");

        input_field_kg.setAttribute("id", "kg");
        input_field_dag.setAttribute("id", "dag");
        input_field_g.setAttribute("id", "g");

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
