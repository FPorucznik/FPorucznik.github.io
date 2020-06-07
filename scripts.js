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

        var break_point = document.createElement("br");
        var kg_text = document.createTextNode("  kg:");
        var dag_text = document.createTextNode("  dag:");
        var g_text = document.createTextNode("  g:");

        input_field_kg.setAttribute("type", "text");
        input_field_dag.setAttribute("type", "text");
        input_field_g.setAttribute("type", "text");

        input_field_kg.setAttribute("id", "kg");
        input_field_dag.setAttribute("id", "dag");
        input_field_g.setAttribute("id", "g");

        label.appendChild(label_text);

        field.appendChild(label);
        field.appendChild(kg_text);
        field.appendChild(input_field_kg);
        field.appendChild(dag_text);
        field.appendChild(input_field_dag);
        field.appendChild(g_text);
        field.appendChild(input_field_g);
        field.appendChild(break_point);
    }
}

function clear_div(divId)
{
    document.getElementById(divId).innerHTML="";
}
